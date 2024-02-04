import { deleteCommentServices, getCommentByImageIdServices, getCommentDetailByCommentIdSerVices, postRecordCommentServices } from "../services/comment.services.js";
import { getDetailImageByImageIdServices } from "../services/image.services.js";

import { getCurrentDateTime } from "../utils/getCurrentDateTime.js";
import { sendResponse } from "../utils/sendResponse.js";

const getCommentByImageId = async (req, res) => {
    try {
        const { imageId } = req.params;
        const listComment = await getCommentByImageIdServices(imageId);
        if (listComment) {
            sendResponse(res, 200, "list comment", listComment);
        } else {
            sendResponse(res, 404, "Not Found!");
        }

    } catch (error) {
        sendResponse(res, 500, error);
    }
}

const postRecordComment = async (req, res) => {
    try {
        const { userId, imageId, content } = req.body;
        const formattedDate = getCurrentDateTime();
        const image = await getDetailImageByImageIdServices(imageId);
        if (image.commenting_right) {
            const newComment = {
                user_id: userId,
                image_id: imageId,
                content: content,
                date_comment: formattedDate
            };
            await postRecordCommentServices(newComment);
            sendResponse(res, 201, "record comment successful!");
        } else {
            sendResponse(res, 401, "image can't comment");
        }

    } catch (error) {
        sendResponse(res, 500, error);
    }
}


const deleteComment = async (req, res) => {
    try {
        const { commentId, userId } = req.body;
        const comment = await getCommentDetailByCommentIdSerVices(commentId);
        if (!comment) {
            sendResponse(res, 404, "comment not found!");
        } else {
            if (comment.user_id == userId) {
                await deleteCommentServices(commentId);
                sendResponse(res, 200, "delete comment successful!");
            } else {
                sendResponse(res, 401, "The user does not have permission to delete");
            }
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
}

export {
    getCommentByImageId,
    postRecordComment,
    deleteComment,
}