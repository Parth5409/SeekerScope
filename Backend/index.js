import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import roadmapRoute from "./routes/roadmap.route.js";
import path from "path";

dotenv.config({});

const app = express();

const _dirname = path.resolve();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "https://seekerscope.onrender.com",
  credentials: true,
};
app.use(cors(corsOptions)); // CORS applied here

// API's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/roadmap", roadmapRoute);

app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is live at server ${process.env.PORT}`);
});
