const express = require("express");

const connectToDB = require("./db/config");
connectToDB();

const { getVehicle, createVehicle,updateVehicle, removeVehicle } = require("./handlers/cars");

const app = express();
app.use(express.json());

app.get("/cars", getVehicle);
app.post("/cars", createVehicle);
app.put("/cars/:id", updateVehicle);
app.delete("/cars/:id", removeVehicle);

app.listen(8000, () => console.log("Server started at port 8000!"));