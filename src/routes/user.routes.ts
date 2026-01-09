import { Router } from 'express';
import userControler from '../controllers/user-controler.js';

const userRoutes = Router();

userRoutes.post('/sign-in', userControler.createUsers);
userRoutes.get('/sign-up', userControler.login);

export default userRoutes;
