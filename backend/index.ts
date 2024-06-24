import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import USerRoutes from "./src/routes/user.route";
import authRoutes from "./src/routes/auth.route";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING as string);

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "api working fine" });
});
const distPath = path.join(__dirname, "../..", "frontend", "dist");
const indexPath = path.join(distPath, "index.html");


console.log("distPath:", distPath);
console.log("indexPath:", indexPath);
app.use(express.static(path.resolve(__dirname, "../../frontend/dist")));

// user routes
app.use("/api/users", USerRoutes);
//auth routes
app.use("/api/auth", authRoutes);
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, indexPath));
});

const PORT: number = 8080;
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
