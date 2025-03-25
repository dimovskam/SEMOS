const {Validator} = require ("node-input-validator")

const dogCreate = {
    breed: "required|string",
    origin: "required|string",
    life_expectancy: "required|string"
}

const dogUpdate = {
    breed : String, 
    origin: String,
    life_expextancy: String
}

const validateDog = async (data, Schema) => {
    const validator = new Validator(data, Schema)
    const err = await validator.check()

    console.log("Greska", err)

    if(!err) {
        throw {
            code: 400,
            error: "Greska na klient!",
          };
    }
}

module.exports = {
    dogCreate,
    dogUpdate,
    validateDog
}