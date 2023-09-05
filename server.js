const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// env config 
dotenv.config();

// mongodb connection
connectDB();

// rest object 
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
    res.status(200).send({
        "message": "Node server"
    })
});

// port 
const PORT = process.env.PORT || 5000

// listen
app.listen(PORT, () => {
    console.log(`server is running on ${process.env.DEV_MODE} port ${PORT}`.bgGreen.white)
})
 