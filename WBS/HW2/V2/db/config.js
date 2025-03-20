const mongoose = require("mongoose");

const URI =

async function connect() {
    try{
    await mongoose.connect(URI);
    console.log("MongoDB connected!");
    }catch (err) {
        console.error(err)
    }

}

module.exports = connect;
