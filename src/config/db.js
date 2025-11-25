import mongoose from 'mongoose';
import { env } from './env.js';
const connectDB = async () => {
    const { HOST_USERNAME, HOST_DATABASE, HOST_CLUSTER, HOST_PASSWORD } = env;
    const URI = `mongodb+srv://${HOST_USERNAME}:${HOST_PASSWORD}@${HOST_CLUSTER}.znlxk8q.mongodb.net/${HOST_DATABASE}?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URI);
        console.log('Connect to the MongoDB');
    }
    catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}.`);
        process.exit(1);
    }
};
export default connectDB;
