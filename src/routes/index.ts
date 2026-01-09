import { Router } from 'express';
import taskRoutes from './tasks.routes.js';
import userRoutes from './user.routes.js';

const routes = Router();

routes.use('/tasks', taskRoutes);
routes.use('/user', userRoutes);

export default routes;
