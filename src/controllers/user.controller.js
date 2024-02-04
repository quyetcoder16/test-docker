import { updateUserServices } from "../services/user.services.js";
import { sendResponse } from "../utils/sendResponse.js";

const getDetailUser = (req, res) => {
    try {
        const { email, full_name, age, avatar, introduce, link_user_info, user_name } = req.user;
        const user = {
            email,
            full_name,
            age,
            avatar,
            introduce,
            link_user_info,
            user_name
        };
        sendResponse(res, 200, "detail user", user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const fileAvatar = req.file;
        const { userId, fullName, introduce, linkUserInfo, userName } = req.body;
        const userUpdate = {
            full_name: fullName,
            avatar: fileAvatar.path,
            introduce,
            link_user_info: linkUserInfo,
            user_name: userName
        }

        await updateUserServices(userId, userUpdate);
        sendResponse(res, 200, "update successful!");


    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    getDetailUser,
    updateUser,
}