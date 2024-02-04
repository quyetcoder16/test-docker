import { getDetailImageByImageIdServices } from "../services/image.services.js";
import { getCheckUserSavedImageServices, getListSavedImageByUserIdService, savedImageServices, unsavedImageServices } from "../services/savedImage.services.js";
import { getCurrentDateTime } from "../utils/getCurrentDateTime.js";
import { sendResponse } from "../utils/sendResponse.js";

const getCheckUserSavedImage = async (req, res) => {
    try {
        const { userId, imageId } = req.body;
        const savedImage = await getCheckUserSavedImageServices(userId, imageId);
        if (savedImage) {
            sendResponse(res, 200, "image had saved!", true);
        } else {
            sendResponse(res, 200, "image hadn't saved!", false);
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
}

const getListSavedImageByUserId = async (req, res) => {
    try {
        const { userId } = req.body;
        const listSavedImage = await getListSavedImageByUserIdService(userId);
        if (listSavedImage) {
            sendResponse(res, 200, "list saved image", listSavedImage);
        } else {
            sendResponse(res, 404, "Not found!");
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
}

const savedImage = async (req, res) => {
    try {
        const { imageId, userId } = req.body;
        const image = await getDetailImageByImageIdServices(imageId);
        if (image) {
            const checkSaved = await getCheckUserSavedImageServices(userId, imageId);
            if (checkSaved) {
                sendResponse(res, 400, "image had saved");
            } else {
                const newSavedImage = {
                    user_id: +userId,
                    image_id: +imageId,
                    date_saved: getCurrentDateTime()
                }
                await savedImageServices(newSavedImage);
                sendResponse(res, 200, "saved image successful!");
            }
        } else {
            sendResponse(res, 404, "image not found!");
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
}

const unsavedImage = async (req, res) => {
    try {
        const { userId, imageId } = req.body;
        const image = await getDetailImageByImageIdServices(imageId);
        if (image) {
            const checkSaved = await getCheckUserSavedImageServices(userId, imageId);
            if (!checkSaved) {
                sendResponse(res, 400, "image hadn't saved");
            } else {
                await unsavedImageServices(userId, imageId);
                sendResponse(res, 200, "unsaved image successful!");
            }
        } else {
            sendResponse(res, 404, "image not found!");
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
}

export {
    getCheckUserSavedImage,
    getListSavedImageByUserId,
    savedImage,
    unsavedImage,
}