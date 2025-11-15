import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDb } from "./config/db.js";
import userRouter from "./routes/route.js";
import cookieParser from "cookie-parser";
import { connectCloudinary } from "./config/cloudinary.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.get("/", (req, res) => {
  res.send("Samsung Backend is running");
});

app.use("/api", userRouter);

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("This is Port", process.env.PORT);
  });
});

// Start server only DB & cloudinary connect

export const startServer = async () => {
  try {
    await connectDb();
    await connectCloudinary();

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
