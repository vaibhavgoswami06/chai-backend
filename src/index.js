import dotenv from "dotenv";
import ConnectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;
// dotenv configuration
dotenv.config({
  path: "./env",
});

ConnectDB()
  .then(() => {
    app.on("error", () => {
      console.error(`Error related to Server: `, error);
      throw error;
    });
    app.listen(port, () => {
      console.log(`Application working \n Server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection error", err);
  });

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
