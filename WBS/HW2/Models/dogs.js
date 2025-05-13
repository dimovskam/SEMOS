const mongoose = require ("mongoose");

const dogSchema = mongoose.Schema({
    breed: String,
    origin: String,
    life_expectancy: String
});

const dogsModel = mongoose.model("Dog", dogSchema, "dogs");

const get = async () => {
    return await dogsModel.find()
}

const create = async(data) => {
    const newDog = new dogsModel(data)
    return await newDog.save()
}

const update = async (_id, data) => {
    return await dogsModel.updateOne({_id}, data);
}

const remove = async(_id) => {
    return await dogsModel.deleteOne({_id})
}
module.exports= {
    get,
    create, 
    update, 
    remove
}