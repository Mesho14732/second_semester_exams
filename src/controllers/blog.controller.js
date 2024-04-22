import * as blogService from "../services/blog.service.js";

export const getAll = async (req, res) => {
  const blogs = await blogService.getAll();
  res.json(blogs);
};

export const create = async (req, res) => {
  const { userId } = req.body;
  try {
    const blog = await blogService.create(userId);
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  const { blogId } = req.params;
  const blog = await blogService.getOne(blogId);
  res.json(blog);
};
