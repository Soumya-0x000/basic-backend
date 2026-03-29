import mongoose from 'mongoose';

const db_connection_string = process.env.DB_CONNECTION_STRING;

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(db_connection_string);
        console.log(connectionInstance.connection.host);
        console.log('MongoDB connected 📊📊');
    } catch (error) {
        console.log(error);
    }
};
