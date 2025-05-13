const MovieCreate = {
    title: "required|string",
    genre: "required|string",
    director: "required|string",
    year: "required|number",
    country: "required|string",
    userId: "required|string"
}

const MovieUpdate = {
    title: "String",
    genre: "String",
    director: "String",
    year: "Number",
    country: "String"
}

module.exports = {
    MovieCreate,
    MovieUpdate
}