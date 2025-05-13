const { getMovie, createMovie, updateMovie, removeMovie } = require ("../models/movies/index")

const getAllMovies = async (req, res) => {
    try{
        const movies = await getMovie()
        return res.status(200).send(movies)
    }catch(err){
    console.log(err)
    return res.status(500).send("Invalid Server Error!")
    }
}

const createNewMovie = async (req, res) => {
    try{
        const data = {
            ...req.body,
            userId: req.auth.id
        }
        await createMovie(data)
        return res.status(200).send("New movie created successfully!")
    }catch(err){
    console.log(err)
    return res.status(500).send("Invalid Server Error!")
    }
}

const updateCurrentMovie = async (req, res) => {
    try{
        await updateMovie(req.params.id, req.body)
        return res.status(200).send("Movie updated successfully!")
    }catch(err){
    console.log(err)
    return res.status(500).send("Invalid Server Error!")
    }
}

const removeCurrentMovie = async (req, res) => {
    try{
        await removeMovie(req.params.id)
        return res.status(200).send("Movie removed successfully!")
    }catch(err){
    console.log(err)
    return res.status(500).send("Invalid Server Error!")
    }
}

module.exports = {
    getAllMovies,
    createNewMovie,
    updateCurrentMovie,
    removeCurrentMovie
}