import { sendResponse } from "../utils/sendResponse.js";

const checkUserId = (req, res, next) => {
    try {
        const { userId } = req.body;
        if (+req.user_id == +userId) {
            next();
        } else {
            sendResponse(res, 400, "user info incorrect!");
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
}

export {
    checkUserId,
}
