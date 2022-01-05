import { check } from "express-validator";
import db from "../db";
// varification of the user's password
const password = check("password")
  .isLength({ min: 6, max: 15 })
  .withMessage("Password must be between 6 and 15 characters");

// varification of the user's email
const email = check("email")
  .isEmail()
  .withMessage("Please enter a valid email");

const emailExists = check("email").custom(async (value) => {
  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
    value,
  ]);
  if (rows[0]) {
    throw new Error("Email already exists");
  }
});

export default {
  registerValidation: [email, password, emailExists],
};
