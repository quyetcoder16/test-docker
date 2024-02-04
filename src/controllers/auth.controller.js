import bcrypt from "bcrypt";
import { createUserServices, getUserByEmailServices } from "../services/user.services.js";
import { createToken } from "../configs/jwt.config.js";
import { sendResponse } from "../utils/sendResponse.js";

const signUp = async (req, res) => {
    try {
        const { email, password, full_name, age } = req.body;
        if (!email) {
            sendResponse(res, 400, "email error!");
            return;
        }
        const user = await getUserByEmailServices(email);
        if (user) {
            sendResponse(res, 400, "email exist!");
        } else {
            const hashPass = bcrypt.hashSync(password, 10);
            let newUser = {
                email,
                password: hashPass,
                full_name,
                age
            }
            await createUserServices(newUser);
            sendResponse(res, 200, "sign up successful!");
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
}

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getUserByEmailServices(email);
        if (!user) {
            sendResponse(res, 404, "Email not found!");
        } else {
            let checkPass = bcrypt.compareSync(password, user.password);
            if (checkPass) {
                const token = createToken({
                    email
                });
                sendResponse(res, 200, "token", token);
            } else {
                sendResponse(res, 400, "password error!");
            }
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
}

const loginWithFacebook = async (req, res) => {
    try {
        const { email, name, picture, userID } = req.body;
        let user = await getUserByEmailServices(email);
        if (!user) {
            const newUser = {
                email,
                full_name: name,
                avatar: picture.data.url
            };
            await createUserServices(newUser);
            user = await getUserByEmailServices(email);
            const token = createToken({
                email: user.email
            });
            sendResponse(res, 201, "token", token);
        } else {
            const token = createToken({
                email: user.email
            });
            sendResponse(res, 200, "token", token);
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
}

export {
    signUp,
    signIn,
    loginWithFacebook,
}