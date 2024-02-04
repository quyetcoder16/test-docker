import express from "express";
import { authTokenMiddleware } from "../middlewares/auth.middleware.js";
import { getDetailUser, updateUser } from "../controllers/user.controller.js";
import cloud from "../configs/cloudinary.config.js";
import { authTokenWithUploadImage } from "../middlewares/authWithUploadImage.middleware.js";
import { checkUserIdUploadImage } from "../middlewares/checkUserIdWithUploadImage.middleware.js";


const userRouter = express.Router();

userRouter.get("/get-detail-user", authTokenMiddleware, getDetailUser);
userRouter.put("/update-user", cloud.single("fileAvatar"), authTokenWithUploadImage, checkUserIdUploadImage, updateUser);

export default userRouter;