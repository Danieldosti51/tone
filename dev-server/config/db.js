import mongoose from 'mongoose';

export function connectDB() {
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true },
    error => {
        if(error) {
            console.log('Couldn\'t connect to the database');
            throw error;
        } else {
            console.log('Successfully connected to MongoDB');
        }
    });
}