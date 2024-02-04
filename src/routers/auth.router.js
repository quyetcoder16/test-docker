import express from "express";
import { loginWithFacebook, signIn, signUp } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/login-with-facebook", loginWithFacebook);

export default authRouter;