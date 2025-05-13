const AccountLogin = {
    email:"required|email",
    password:"required|string"
}

const AccountRegister = {
    username: "required|string",
    email: "required|email",
    password: "required|string",
    confirmPassword: "required|string"
}

const AccountCreate = {
    username: "required|string",
    email: "required|email",
    password: "required|string"
}

const AccountUpdate = {
    username: "String",
    email: "String",
    password: "String"
}

module.exports = {
    AccountLogin,
    AccountRegister,
    AccountCreate,
    AccountUpdate
}