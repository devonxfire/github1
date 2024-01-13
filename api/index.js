import express from "express";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use("/", userRouter);

app.listen(5001, () => console.log("Listening on port 5001..."));
