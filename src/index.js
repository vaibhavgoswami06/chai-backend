import dotenv from "dotenv";
import ConnectDB from "./db/index.js";

// dotenv configuration
dotenv.config({
  path: "./env",
});

ConnectDB();

/* 
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("Db connected");
    app.on("error", () => {
      console.log("ERRR related to application: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("App listening on port: ", process.env.PORT);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
