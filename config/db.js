import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () =>{
        try{
            const conn = await mongoose.connect(process.env.MONGO_URL)
            console.log(`Successfully connected to Database ${conn.connection.host}`.bgGreen.white)
        }catch(error){
            console.log(error)//printing the error in console
            console.log(`Error in connecting MongoDb`.bgRed.white)
        }
}

export default connectDB;