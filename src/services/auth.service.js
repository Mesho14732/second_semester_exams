import Jwt from "jsonwebtoken";
import User from "../database/schema/user.schema.js";
import { ErrorWithStatus } from "../exception/error-with-status.js";
import bcrypt from "bcrypt";

export const login = async (email, password) => {
  // Check if email exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new ErrorWithStatus("User not found", 404);
  }
  // Check if password is not correct
  if (!bcrypt.compareSync(password, user.password)) {
    throw new ErrorWithStatus("Username or Password is incorrect", 401);
  }
  // Generate access token
  const JWT_SECRET = process.env.JWT_SECRET || "secret";
  const token = Jwt.sign(
    {
      role: user.role || "USER",
      email: user.email,
      _id: user._id,
      sub: user._id,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
};
