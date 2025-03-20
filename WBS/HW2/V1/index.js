const express = require("express");

const {getTreatment, createTreatment, updateTreatment, deleteTreatment} = require ("./controllers/treatments")

const app = express();
app.use(express.json());

app.get("/beauty", getTreatment);
app.post("/beauty", createTreatment);
app.put("/beauty/:id", updateTreatment)
app.delete("/beauty/:id", deleteTreatment )


app.listen(8000, () => console.log("Server started at port 8000!"));