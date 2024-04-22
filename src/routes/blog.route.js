import { Router } from "express";
import * as blogController from "../controllers/blog.controller.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { createBlogMiddleware } from "../middlewares/blog.middleware.js";

const blogRoute = Router();

blogRoute.get("/", blogController.getAll);
blogRoute.post("/", createBlogMiddleware, blogController.create);
blogRoute.get("/:blogId", blogController.getOne);


export default blogRoute;