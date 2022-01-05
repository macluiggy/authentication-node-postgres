import { getUsers, login, register } from "../controllers/auth.controller";
import { Router } from "express";
import registerFn from "../validators/auth.validator";
import { validationMiddleware } from "../middlewares/auth.middleware";
const { registerValidation, loginValidation } = registerFn;
var router = Router();

router.route("/get-users").get(getUsers);
router
  .route("/register")
  .post(registerValidation, validationMiddleware, register);
router.route("/login").post(loginValidation, validationMiddleware, login);

export default router;
