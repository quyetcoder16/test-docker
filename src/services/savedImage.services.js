import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const deleteSaveImagesByImageIdServices = async (imageId) => {
    await prisma.savedImages.deleteMany({
        where: {
            image_id: +imageId
        }
    })
}

const getCheckUserSavedImageServices = async (userId, imageId) => {
    const savedImage = await prisma.savedImages.findFirst({
        where: {
            user_id: userId,
            image_id: imageId
        }
    });
    if (savedImage) {
        return savedImage;
    } else {
        return false;
    }
}

const getListSavedImageByUserIdService = async (userId) => {
    const listSavedImage = await prisma.savedImages.findMany({
        where: {
            user_id: +userId
        },
        include: {
            images: {
                select: {
                    url: true,
                    image_name: true,
                    commenting_right: true,
                    description: true,
                    title: true,
                    link_web_detail: true
                }
            }
        }
    });

    if (listSavedImage) {
        return listSavedImage;
    } else {
        return false;
    }
}

const savedImageServices = async (newSavedImage) => {
    await prisma.savedImages.create({
        data: newSavedImage
    });
}

const unsavedImageServices = async (userId, imageId) => {
    await prisma.savedImages.deleteMany({
        where: {
            user_id: +userId,
            image_id: +imageId
        }
    });
}

export {
    deleteSaveImagesByImageIdServices,
    getCheckUserSavedImageServices,
    getListSavedImageByUserIdService,
    savedImageServices,
    unsavedImageServices,
}