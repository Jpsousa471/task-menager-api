import bcrypt from 'bcryptjs';
import type {
  CreateUserProps,
  LoginUserProps
} from '../interfaces/task-services.js';
import UserModel from '../models/register-model.js';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

class UserService {
  async createUser({ name, email, password }: CreateUserProps) {
    const user = await UserModel.create({ name, email, password });
    if (user) {
      throw new Error('Usuário já exitente');
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashPassword });
    await newUser.save();
    return {
      newUser
    };
  }

  async login({ email, password }: LoginUserProps) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    const isValid = await bcrypt.compare(password, user.password as string);
    if (!isValid) {
      throw new Error('Senha inválida');
    }
    const token = jwt.sign({ id: user._id }, 'segredo', { expiresIn: '1h' });
    return token;
  }
}
export default new UserService();
