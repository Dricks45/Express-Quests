require("dotenv").config();

const express = require("express");

const app = express();

const usersControllers = require("./controllers/usersControllers");
const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", usersControllers.getUsers);
app.get("/api/users/:id", usersControllers.getUserById);

module.exports = app;
