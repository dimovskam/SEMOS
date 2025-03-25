// Infrastrukturen kod
const express = require("express");

const connectToDB = require("./db/config")
connectToDB();

const {getAllAccounts, createNewAccount, updateCurrentAccount, removeCurrentAccount} = require("./handlers/account")

const app = express();

app.use(express.json());

app.get("/accounts", getAllAccounts)
app.post("/accounts", createNewAccount)
app.put("/accounts/:id", updateCurrentAccount)
app.delete("/accounts/:id", removeCurrentAccount)

app.listen(8000, () => console.log("Server is started at port 8000!"));