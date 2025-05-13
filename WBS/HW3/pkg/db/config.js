const mongoose = require("mongoose");
// const { getSection } = require("../config/index");

// const uri = `mongodb+srv://${getSection("development").MONGO_USERNAME}:${
//   getSection("development").MONGO_PASSWORD
// }@cluster0.54vyd.mongodb.net/semos?retryWrites=true&w=majority&appName=Cluster0`;
const uri = "mongodb+srv://marijadimovska099:<BAIrEZVTafZMz3Nd>@cluster0.54vyd.mongodb.net/semos?retryWrites=true&w=majority&appName=Cluster0"

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;