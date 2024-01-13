import express from "express";
import userRouter from "./routes/userRoutes.js";
import productsRouter from "./routes/productRoutes.js";

const app = express();

app.use("/", userRouter);
app.use("/", productsRouter);

app.listen(5001, () => console.log("Listening on port 5001..."));
