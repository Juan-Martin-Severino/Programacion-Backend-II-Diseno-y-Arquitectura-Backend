import mongoose from 'mongoose';
import 'dotenv/config';


const connectionString = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/coder69900';

export const initMongoDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('Conectado a la base de datos de MongoDB');
  } catch (error) {
    console.log(`ERROR => ${error}`);
  }
}