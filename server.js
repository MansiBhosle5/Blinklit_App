const express = require("express");
const mongoose = require("mongoose");

const blinkitRoute = require("./routes/blinkitRoute");
const cors = require("cors");
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Newproject", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

// Middleware to parse JSON
const corsOptions ={
    origin : "http://localhost:3000",
    method :'GET,POST',
    allowedHeaders: ['Content-Type','Authorization']
};
app.use(cors())
app.use(express.json(corsOptions));
app.use("/Blinkit",blinkitRoute);

// Test route
app.get("/", (req, res) => {
    res.send("hello");
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
