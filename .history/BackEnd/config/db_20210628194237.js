require("dotenv").config();
const mongoose = require("mongoose")

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.MONGO_URI, {
           useNewUrlParser:true,
           useUnifiedTopology:true
       });
       console.log("MONGO CONNECTION SUCCESS")
    }catch(error){
        console.error(error);
        process.exit(1);

    }
};

module.exports= connectDB;