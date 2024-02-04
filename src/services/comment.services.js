import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const getCommentDetailByCommentIdSerVices = async (commentId) => {
    const comment = await prisma.comments.findFirst({
        where: {
            comment_id: +commentId
        }
    });
    if (comment) {
        return comment;
    } else {
        return false;
    }
}

const getCommentByImageIdServices = async (imageId) => {
    const listComment = await prisma.comments.findMany({
        where: {
            image_id: +imageId
        }
    });
    if (listComment) {
        return listComment;
    } else {
        return false;
    }
}

const postRecordCommentServices = async (newComment) => {
    await prisma.comments.create({
        data: newComment
    });
}

const deleteCommentServices = async (commentId) => {
    await prisma.comments.delete({
        where: {
            comment_id: +commentId
        }
    });
}

const deleteCommentByImageIdServices = async (imageId) => {
    await prisma.comments.deleteMany({
        where: {
            image_id: +imageId
        }
    })
}

export {
    getCommentByImageIdServices,
    postRecordCommentServices,
    getCommentDetailByCommentIdSerVices,
    deleteCommentServices,
    deleteCommentByImageIdServices,
}