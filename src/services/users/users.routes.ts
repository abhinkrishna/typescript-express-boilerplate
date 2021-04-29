import { NextFunction, Request, Response, Router } from "express";
import { UserController, userCreate, userReadOne, userText } from "./users.controller";

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => res.json({ message: `user API's`, status: 'ok' }));

// Functinal
router.post('/f', userCreate);
router.get('/f/', userText);
router.get('/f/:id', userReadOne);

// Object Oriented
router.post('/o', async (req: Request, res: Response, next: NextFunction) => {
    await new UserController(req, res, next).create();
})

router.get('/o/:id', async (req: Request, res: Response, next: NextFunction) => {
    await new UserController(req, res, next).readOne();
})


export default router;
