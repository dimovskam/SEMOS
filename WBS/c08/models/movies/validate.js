const MovieCreate = {
    title: "required|string",
    genre: "required|string",
    director: "required|string",
    year: "required|number",
    releaseDate: "required|date",
    country: "required|string",
    // director_id: "required|string"
}

const MovieUpdate = {
    title: "String",
    genre: "String",
    director: "String",
    year: "Number",
    releaseDate: "Date",
    country: "String"
}

module.exports = {
    MovieCreate,
    MovieUpdate
}