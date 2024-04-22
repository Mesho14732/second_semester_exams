import mongoose from "mongoose";

// Schema
const blogSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  author: {
    type: String,
    default: 0,
    required: true,
  },
  tittle: {
    type: String,
    default: 0,
    required: true,
  },
  description: {
    type: String,
    default: 0,
    required: true,
  },
  read_count: {
    type: Number,
    default: 0,
    required: true,
  },
  reading_time: {
    type: Number,
    default: 0,
    required: true,
  },
  tags: {
    type: Number,
    default: 0,
    required: true,
  },
  body: {
    type: String,
    default: 0,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Model
const blog = mongoose.model("blog", blogSchema);
export default blog;