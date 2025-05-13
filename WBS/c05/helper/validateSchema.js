 const validateSchema = async(data, Schema) => {
    const validator = new Validator (data, Schema);
    const err = await validator.check()
    
  if (!err) {
    throw {
      code: 400,
      error: "Greska na klient!",
    };
  }
  }

  module.exports = validateSchema