const mongoose = require("mongoose");
const { getSection } = require("../config/INDEX.JS");

const uri = `mongodb+srv://${getSection("development").MONGO_USERNAME}:${
  getSection("development").MONGO_PASSWORD
}@cluster0.54vyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//mongodb+srv://marijadimovska099:<db_password>@cluster0.54vyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;