const {read, write} = require("../read-write");

const getTreatment = async (req, res) => {
    try{
        const beauty = await read("beautyTreatments.json");
        return res.status(200).send(beauty)

    }catch(err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
}

const createTreatment = async (req,res) => {
    try {
        const beauty = await read ("beautyTreatments.json");
        const newProduct = req.body
        beauty.push(newProduct)
        await write ("beautyTreatments.json", beauty)
        return res.status(200).send("Product added successfully!")

    }catch(err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
}

const updateTreatment = async (req,res) => {
    try {
        let beauty = await read ("beautyTreatments.json");
        const productId = Number (req.params.id);
        const newProduct = req.body

        beauty = beauty.map((product, index) => {
            if(index === productId) {
                return {
                    ...beauty,
                    ...newProduct
                }
            }
            return product;
        })
        await write ("beautyTreatments.json", beauty)
        return res.status(200).send("Product updated successfully!")

    }catch(err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
}

const deleteTreatment = async (req, res) => {
    try {
        const productId = Number (req.params.id);
        let beauty = await read ("beautyTreatments.json");
        beauty = beauty.filter((_, index) => index !==  productId);

        await write ("beautyTreatments.json", beauty)
        return res.status(200).send("Product deleted successfully!")
    }catch(err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
}

module.exports = {
    getTreatment,
    createTreatment,
    updateTreatment,
    deleteTreatment
}