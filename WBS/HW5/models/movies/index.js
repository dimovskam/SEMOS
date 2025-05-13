const mongoose = require ("mongoose");

const movieSchema = mongoose.Schema ({
    title: String,
    genre: String,
    director: String,
    year: Number,
    country: String,
    userId: {
        immutable: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Account",
      },
})

const MovieModel = mongoose.model("movie", movieSchema, "movies");

const getMovie = async() => {
    return await MovieModel.find()
}

const createMovie = async (data) => {
    const newMovie = new MovieModel(data);
    return await newMovie.save()
}

const updateMovie = async(_id, data) => {
    return await MovieModel.updateOne({ _id: id }, data)
}

const removeMovie = async (_id) => {
    return await MovieModel.deleteOne({_id: id})
}

module.exports = {
    getMovie, 
    createMovie,
    updateMovie,
    removeMovie
}