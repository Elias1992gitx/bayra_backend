import mongoose from "mongoose"

const connectDB = async () =>{

    mongoose.connection.on('connected', () =>{
        console.log("Connected to MongoDB")
    })

    mongoose.connection.on('error', (err) => {
      console.log('Error connecting to MongoDB', err)
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/bayra_music`)
}

export default connectDB