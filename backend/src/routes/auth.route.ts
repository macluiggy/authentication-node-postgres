import { getUsers } from "../controllers/auth.controller";
import { Router } from "express";
var router = Router();

router.route("/get-users").get(getUsers);

export default router;
