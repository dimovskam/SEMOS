const {get, create, update,remove} = require ("../Models/dogs")

const {dogCreate, dogUpdate, validateDog} = require ("../Models/validate")

const getAllDogs = async(req, res) => {
    try{
        const dogs = await get()
        return res.status(200).send(dogs)
    }catch(err){
        return res.status(500).send("Invalid server error!")
    }
}

const createNewBreed = async(req, res) => {
    try {
        await validateDog(req.body, dogCreate);
        await create (req.body)
        return res.status(200).send("New breed successfully created!")
    }catch(err){
        return res.status(500).send("Invalid server error!")
    }
}

const updateCurrentBreed = async (req, res) => {
    try{
        await validateDog(req.body. dogUpdate)
        await update (req.params.id, req.body)
        return res.status(200).send(`Dog breed with id ${req.params.id} successfully updated!`)
    }catch(err){
        return res.status(500).send("Invalid server error!")
    }
}

const removeBreed = async (req, res) => {
    try{
        await remove(req.params.id)
        return res.status(200).send(`Dog breed with id ${req.params.id} successfully deleted!`)
    }catch(err){
        return res.status(500).send("Invalid server error!")
    }
}

module.exports = {
    getAllDogs,
    createNewBreed, 
    updateCurrentBreed,
    removeBreed
}