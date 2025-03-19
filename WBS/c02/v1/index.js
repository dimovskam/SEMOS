const express = require("express");

const { getCars, createCar, updateCar, removeCar } = require("./handlers/cars");

const app = express();
app.use(express.json());

// ruti
app.get("/cars", getCars);
app.post("/cars", createCar);
app.put("/cars/:id", updateCar);
app.delete("/cars/:id", removeCar);

app.listen(8000, () => console.log("Server started at port 8000!"));