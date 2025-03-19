const mongoose = require("mongoose");

const URI = "mongodb+srv://marijadimovska099:BAIrEZVTafZMz3Nd@cluster0.54vyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
async function connect() {
    await mongoose.connect(URI)
}