import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtSecretKey = process.env.SECRET_KEY;
const expiresIn = process.env.EXPIRESIN;

const createToken = (data) => {
    const token = jwt.sign(data, jwtSecretKey, { expiresIn: expiresIn });
    return token;
}

const checkToken = (token) => {
    return jwt.verify(token, jwtSecretKey, (err, decode) => {
        if (err) {
            return {
                statusCode: 401,
                mess: "Invalid token"
            }
        } else {
            return {
                statusCode: 200,
                data: decode
            }
        }
    });
}


export {
    createToken,
    checkToken,
}