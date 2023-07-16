import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const connectionString = 'mongodb://127.0.0.1:27017/database';
    await connect(connectionString);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
};

export default connectDB;