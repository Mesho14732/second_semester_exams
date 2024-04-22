import { ErrorWithStatus } from "../exception/error-with-status.js";
export const userValidationMiddleware = (req, res, next) => {
    const { email, first_name, last_name } = req.body;
    if (!email) {
      throw new ErrorWithStatus("Email is eequired", 400);
    }
    if (!first_name) {
      throw new ErrorWithStatus("First name is required", 400);
    }
    if (!last_name) {
        throw new ErrorWithStatus("Last name is required", 400) ;
      }
    next();
  };