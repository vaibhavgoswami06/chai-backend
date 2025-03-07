import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// cors middle ware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//  json limit middle ware
app.use(
  express.json({
    limit: "16kb",
  })
);

// middleware for url data acceptations and extending
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

// middleware to store static files
app.use(express.static("public"));

// middleware for cookies
app.use(cookieParser());
export { app };
