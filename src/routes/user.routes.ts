import { Router } from 'express';
import userControler from '../controllers/user-controler.js';

const userRoutes = Router();

userRoutes.post('/sign-up', userControler.createUsers);
userRoutes.post('/sign-in', userControler.login);

export default userRoutes;
