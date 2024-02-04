import express from "express";
import { deleteComment, getCommentByImageId, postRecordComment } from "../controllers/comment.controller.js";

import { authTokenMiddleware } from "../middlewares/auth.middleware.js";
import { checkUserId } from "../middlewares/checkUserId.middleware.js";

const commentRouter = express.Router();

commentRouter.get("/get-comment-by-imageId/:imageId", getCommentByImageId);
commentRouter.post("/post-record-comment", authTokenMiddleware, checkUserId, postRecordComment);
commentRouter.delete("/delete-comment", authTokenMiddleware, checkUserId, deleteComment);

export default commentRouter;