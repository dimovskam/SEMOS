const mongoose = require("mongoose");

const treatementSchema = mongoose.Schema({
    "service": String,
    "price": Number,
    "duration": String
})

const treatmentModel = mongoose.model("beautyTreatment", treatementSchema, "beautyTreatments");

const get = async () => {
    return await treatmentModel.find()
}

const create = async (data) => {
    const newTreatement = new treatmentModel(data);
    return await newTreatement.save()
}

const update = async (id, data) => {
    return await treatmentModel.updateOne({_id: id}, data)
}

const remove = async (id) => {
    return await treatmentModel.deleteOne({_id: id})
}

module.exports = {
    get,
    create,
    update,
    remove
}