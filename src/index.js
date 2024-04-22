import express from "express";
import dotenv from "dotenv";
import userRouter from "../src/routes/user.route.js";
import blogRoute from "./routes/blog.route.js";
import { connect } from "./database/connection.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/blog", blogRoute);
//

connect().then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
