import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rootRouter from "./routers/root.router.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"]
}));
app.use(express.json());
app.use(rootRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server is running on port : ", PORT);
});
