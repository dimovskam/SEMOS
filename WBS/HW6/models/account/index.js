const mongoose = require ("mongoose");

const accountSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const AccountModel = mongoose.model("Account", accountSchema, "accounts")

const getAccount = async() => {
    return await AccountModel.find();
}

const getByEmail = async (email) => {
    return await AccountModel.findOne({email});
}

const createAccount = async(data) => {
    const newAccount = new AccountModel(data);
    return await newAccount.save();
}

const updateAccount = async (id, data) => {
    return await AccountModel.updateOne({_id: id}, data)
}

const removeAccount = async(id) => {
    return await AccountModel.deleteOne({_id: id})
}

module.exports = {
    getAccount,
    getByEmail,
    createAccount,
    updateAccount,
    removeAccount
}