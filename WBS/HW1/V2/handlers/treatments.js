const {get, create, update, remove} = require ("../models/treatments")

const getMakeover = async (req, res) => {
    try{
        const treatments = await get();
        res.status(200).send(treatments)

    }catch (err) {
        console.log(err)
        return res.status(500).send("Internal Server Error!")
    }
}

const createMakeover = async (req, res) => {
    try {
        await create(req.body);
        return res.status(200).send("Treatment created successfully!")
    }catch (err){
        console.log(err)
        return res.status(500).send("Internal Server Error!")
    }
}

const updateMakeover = async (req, res) => {
    try{
        await update(req.params.id, req.body)
        return res.status(200).send("Treatment updated successfully!")
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error!")
    }
}

const removeMakeover =async (req, res) => {
    try{
        await remove(req.params.id)
        return res.status(200).send("Treatment removed successfully!")
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error!")
    }
}

module.exports = {
    getMakeover,
    createMakeover, 
    updateMakeover,
    removeMakeover
}