const mongoose = require("mongoose");

const treatmentSchema = mongoose.Schema({
    service: String,
    price: Number,
    duration: String
})

const treatmentModel = mongoose.model("beautyTreatment", treatmentSchema, "beautyTreatments");

const get = async () => {
    return await treatmentModel.find()
}

const create = async (data) => {
    const newTreatment = new treatmentModel(data);
    return await newTreatment.save()
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