const mongoose = require("mongoose");
require("dotenv").config();
const connecttoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected successfully");
    } catch (err) {
        console.error("error", err);
        process.exit(1);
    }
}
module.exports=connecttoDb();