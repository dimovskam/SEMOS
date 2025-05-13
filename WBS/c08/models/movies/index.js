const mongoose = require ("mongoose");

const movieSchema = mongoose.Schema ({
    title: String,
    genre: String,
    director: String,
    year: Number,
    releaseDate: Date,
    country: String,
    // director_id: {
    //     type: mongoose.SchemaType.ObjectId, 
    //     ref: "Acount",
    //     immutable: true
    // }
})

const MovieModel = mongoose.model("movie", movieSchema, "movies");

const getMovie = async() => {
    return await MovieModel.find()
}

const createMovie = async (date) => {
    const newMovie = new MovieModel(data);
    return await newMovie.save()
}

const updateMovie = async(id, data) => {
    return await MovieModel.updateOne({ _id: id }, data)
}

const removeMovie = async (id) => {
    return await MovieModel.deleteOne({_id: id})
}

module.exports = {
    getMovie, 
    createMovie,
    updateMovie,
    removeMovie
}