import { PrismaClient } from '@prisma/client'
import { getFileNameImage } from '../utils/getFileNameImage.js';
import { deleteImageCloud } from '../configs/cloudinary.config.js';
const prisma = new PrismaClient();

const getUserByEmailServices = async (email) => {
    const user = await prisma.users.findFirst({
        where: {
            email
        }
    });
    if (user) {
        return user;
    } else {
        return false;
    }
}

const getUserByUserIdServices = async (userId) => {
    const user = await prisma.users.findFirst({
        where: {
            user_id: +userId
        }
    });
    if (user) {
        return user;
    } else {
        return false;
    }
}

const createUserServices = async (newUser) => {
    await prisma.users.create({
        data: newUser
    });
}

const updateUserServices = async (userId, userUpdate) => {
    const user = await getUserByUserIdServices(userId);
    if (user.avatar) {
        const fileName = getFileNameImage(user.avatar);
        deleteImageCloud(fileName);
    }
    await prisma.users.update({
        where: {
            user_id: +userId
        },
        data: userUpdate
    });
}


export {
    getUserByEmailServices,
    createUserServices,
    getUserByUserIdServices,
    updateUserServices,
}