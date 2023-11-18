import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/adminDB`);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connection established');
        })

        connection.on('error', () =>{
            console.log(`MongoDB connection error, please make sure mongoDB is running`);
            process.exit();
        })
    }
    catch (err) {
        console.log('Something went wrong');
        console.log(err);
    }
}