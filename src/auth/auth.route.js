import { Router } from "express";
import {
    login,
    getProfile
} from "./auth.controller.js";
import {validateToken} from "../middleware.js"


const router = Router();
router.post("/login", login);
router.post("/get_profile",validateToken, getProfile);

export default router;
 