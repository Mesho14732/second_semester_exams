import mongoose from "mongoose";

// Schema
const userSchema = mongoose.Schema({
 first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Model
const User = mongoose.model("User", userSchema);
export default User;