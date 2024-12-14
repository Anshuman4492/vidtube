import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// Common Middlewares...
// Limiting the size of json data coming in
app.use(express.json({ limit: "16kb" }));
// Accepting the URL encoded form: " " becomes -> "%20" in url,also limitng that size
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// Allow express to use static files (CSS, Img, Svg) from "public" folder
app.use(express.static("public"));

// import Routes
import healtCheckRouter from "./routes/healthCheck.route.js";
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/healthCheck", healtCheckRouter);
app.use("/api/v1/users", userRouter);

export default app;
