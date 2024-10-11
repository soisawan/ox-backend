import { Router } from "express";
import userRoute from './user/user.routes.js'
import authRoute from './auth/auth.route.js'

const router = Router()

router.use("/user",userRoute);
router.use("/auth",authRoute);

export default router 