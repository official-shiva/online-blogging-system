const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongoDB DataBase ${mongoose.connection.host}`.bgMagenta.white)
    } catch (e) {
        console.log(`connection error`.bgRed.white)
    }
}

module.exports = connectDB;