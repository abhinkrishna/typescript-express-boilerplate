import { Router } from "express";
import productRouter from "./products/products.routes";
import userRouter from "./users/users.routes";

const router = Router();

router.use('/users', userRouter)
router.use('/products', productRouter)

export default router;