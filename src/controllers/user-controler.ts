import { createUserSchema } from '../schemas/create-user-schema.js';
import { loginSchema } from '../schemas/login-schema.js';
import { UserService } from '../services/index.js';
import type { Request, Response } from 'express';

class UserController {
  async createUsers(req: Request, res: Response) {
    try {
      const data = createUserSchema.parse(req.body);

      const { name, email, password } = data;

      const newUser = await UserService.createUser(name, email, password);

      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = loginSchema.parse(req.body);
      const { email, password } = data;
      const token = await UserService.login(email, password);
      res.status(201).json(token);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
