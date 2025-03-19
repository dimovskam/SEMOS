const express = require("express");

const {getBeauty, createBeauty, updateProduct, deleteProduct} = require("./controllers/beauty")

const app = express();
app.use(express.json());

app.get("/beauty", getBeauty);
app.post("/beauty", createBeauty);
app.put("/beauty/:id", updateProduct)
app.delete("/beauty/:id", deleteProduct )


app.listen(8000, () => console.log("Server started at port 8000!"));