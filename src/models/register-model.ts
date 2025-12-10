import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, require },
  email: { type: String, require },
  password: { type: String, require }
});

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
