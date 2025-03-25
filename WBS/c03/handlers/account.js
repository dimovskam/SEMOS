const {getAccounts, createAccount, updateAccount, removeAccount} = require ("../models/account")

const getAllAccounts = async (req,res) => {
    try {
        const accounts = await getAccounts()
        return res.status(200).send(accounts)
    } catch (err) {
      return res.status(500).send("Invalid server error!");
    }
  };
  
  const createNewAccount = async (req,res) => {
    try{
        const account=await createAccount(req.body);
        return res.status(200).send("Account created successfully!")
    }catch(err){
        return res.status(500).send("Invalid server error!");
    }
    };
  
  const updateCurrentAccount = async (req,res) => {
    try{
        const account=await updateAccount(req.params.id, req.body)
        return res.status(200).send("Account updated successfully!")
    }catch(err) {
        return res.status(500).send("Invalid server error!")
    }
  };
  
  const removeCurrentAccount = async (req, res) => {
    try{
        const account=await removeAccount(req.params.id)
        return res.status(200).send("Account removed successfully!")

    }catch(err){
        return res.status(500).send("Invalid server error!");
    }
  };
  
  module.exports = {
    getAllAccounts,
    createNewAccount,
    updateCurrentAccount,
    removeCurrentAccount,
  };