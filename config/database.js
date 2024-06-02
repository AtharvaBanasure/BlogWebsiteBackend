import mongoose from "mongoose";

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Connection Successful")})
    .catch((error)=>{
        console.log("Error in Connection",error)
        process.exit(1);
    });
}

export default dbConnect;