const express = require ("express")

const connectToDB = require("./DB/config")
connectToDB();

const {getAllDogs, createNewBreed, updateCurrentBreed, removeBreed}= require ("./Handlers/dogs")

const app = express();

app.use(express.json());

app.get("/dogs", getAllDogs)
app.post("/dogs", createNewBreed)
app.put("/dogs/:id", updateCurrentBreed)
app.delete("/dogs/:id", removeBreed)

app.listen(8000, () => console.log("Server is started at port 8000"))