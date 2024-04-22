import User from "../database/schema/user.schema.js";
import blog from "../database/schema/blog.schema.js";
import { Types, isValidObjectId } from "mongoose";

export const getAll = async () => {
  return blog.find().populate("user");
};

export const create = async (userId) => {
  if (!isValidObjectId(userId)) {
    throw new Error("Invalid user id");
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const existingblog = await blog.findOne({
    user: new Types.ObjectId(userId),
  });
  if (existingblog) {
    throw new Error("blog already exists");
  }
  return blog.create({ user: new Types.ObjectId(userId) });
};

export const getOne = async (blogId) => {
  return blog.findOne({ _id: new Types.ObjectId(blogId) });
};
