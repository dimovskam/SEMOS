const express = require ("express")

const connectToDB = require("./db/config")
connectToDB();

const {getMakeover, createMakeover, updateMakeover, removeMakeover} = require("./handlers/treatments");
const app=express()
app.use=(express.json())

app.get("/beauty", getMakeover)
app.post("/beauty", createMakeover)
app.put("/beauty/:id", updateMakeover)
app.delete("/beauty/:id", removeMakeover)

app.listen(8000, () => console.log("Server started at port 8000"))