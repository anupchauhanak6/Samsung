import { Router } from "express";
import { Cart, Login, Register } from "../controllers/user.js";
import { authMidleWare } from "../middleware/auth.js";

const userRouter = Router()

userRouter.post('/register',Register)

userRouter.post('/login',Login)

userRouter.post('/cart',Cart)

userRouter.post('/token',authMidleWare , Cart)

export default userRouter;