import {
  getUsers,
  isProtected,
  login,
  register,
} from "../controllers/auth.controller";
import { Router } from "express";
import registerFn from "../validators/auth.validator";
import { validationMiddleware } from "../middlewares/validations.middleware";
import { userAuth } from "../middlewares/auth.middleware";
const { registerValidation, loginValidation } = registerFn;
var router = Router();

router.route("/get-users").get(getUsers);
router
  .route("/register")
  .post(registerValidation, validationMiddleware, register);
router.route("/login").post(loginValidation, validationMiddleware, login);
router.route("/protected").get(userAuth, isProtected);

export default router;
