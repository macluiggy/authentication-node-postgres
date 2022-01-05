import { getUsers, register } from "../controllers/auth.controller";
import { Router } from "express";
import registerFn from "../validators/auth.validator";
import { validationMiddleware } from "../middlewares/auth.middleware";
const { registerValidation } = registerFn;
var router = Router();

router.route("/get-users").get(getUsers);
router
  .route("/register")
  .post(registerValidation, validationMiddleware, register);

export default router;
