import { Router } from "express";
import {
    getUserController,
    updateScoreController
} from "./user.controller.js";
import {validateToken} from "../middleware.js"


const router = Router();
router.get("/get_user", getUserController);
router.post("/update_score",validateToken, updateScoreController);

export default router;
