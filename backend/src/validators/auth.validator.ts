import { check } from "express-validator";
import db from "../db";
import { compare } from "bcryptjs";
// It will validate the email and password, this check are made in the middleware auth.middleware.ts file, after this validation are called in the auth.route.ts file, when are handled, then the validationMiddleware function is called, that is when the checks are made so the next middleware is called if the validation is ok.
// varification of the user's password
const password = check("password")
  .isLength({ min: 6, max: 15 })
  .withMessage("Password must be between 6 and 15 characters");

// varification of the user's email
const email = check("email")
  .isEmail()
  .withMessage("Please enter a valid email");

// check if the user's email is already in the database
const emailExists = check("email").custom(async (value) => {
  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
    value,
  ]);
  if (rows[0]) {
    throw new Error("Email already exists");
  }
});

// login validation
const loginFieldsCheck = check("email").custom(async (value, { req }) => {
  // return console.log(req.body);
  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
    value,
  ]);
  if (!rows[0]) {
    throw new Error("Email does not exist");
  }
  const validPassword = await compare(req.body.password, rows[0].password);
  if (!validPassword) {
    throw new Error("Password is incorrect");
  }
  req.user = rows[0];
});
export default {
  registerValidation: [email, password, emailExists],
  loginValidation: [loginFieldsCheck],
};
