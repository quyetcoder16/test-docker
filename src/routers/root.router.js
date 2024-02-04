import express from "express";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";
import commentRouter from "./comment.router.js";
import imageRouter from "./image.router.js";
import savedImageRouter from "./savedImage.router.js";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/comment", commentRouter);
rootRouter.use("/image", imageRouter);
rootRouter.use("/savedImage", savedImageRouter);

export default rootRouter;