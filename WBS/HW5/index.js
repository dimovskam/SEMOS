const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const connectDB = require("./pkg/db/config");
connectDB();
const { getSection } = require("./pkg/config");
const { login, register } = require("./handlers/auth");
const { getAllMovies, createNewMovie, updateCurrentMovie, removeCurrentMovie } = require("./handlers/movies");


const app = express();
app.use(express.json());

app.use(
  "/api",
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  }).unless({
      path: ["/auth/login", "/auth/register"],
    })
);


app.post("/auth/login", login);
app.post("/auth/register", register);


app.get("/movies", getAllMovies);
app.post("/movies", createNewMovie);
app.put("/movies/:id", updateCurrentMovie);
app.delete("/movies/:id", removeCurrentMovie);


app.listen(8000, () => console.log("Server started at port 8000!"));