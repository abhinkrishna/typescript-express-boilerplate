import { Router } from "express";

const productRouter = Router();

productRouter.get('/', (req, res) => res.json({ message: `products API's`}));

export default productRouter;
