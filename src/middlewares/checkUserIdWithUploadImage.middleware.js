import { deleteImageCloud } from "../configs/cloudinary.config.js";
import { sendResponse } from "../utils/sendResponse.js";

const checkUserIdUploadImage = (req, res, next) => {
    // console.log(req.file);
    try {
        const { userId } = req.body;
        const { filename } = req.file;
        if (+req.user_id == +userId) {
            next();
        } else {
            deleteImageCloud(filename);
            sendResponse(res, 400, "user info incorrect!");
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
}

export {
    checkUserIdUploadImage,
}
