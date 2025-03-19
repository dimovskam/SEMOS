const {read, write} = require("../read-write");

const getBeauty = async (req, res) => {
    try{
        const beauty = await read("beauty_salon.json");
        return res.status(200).send(beauty)

    }catch(err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
}

const createBeauty = async (req,res) => {
    try {
        const beauty = await read ("beauty_salon.json");
        const newProduct = req.body
        beauty.push(newProduct)
        await write ("beauty_salon.json", beauty)
        return res.status(200).send("Product added successfully!")

    }catch(err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
}

const updateProduct = async (req,res) => {
    try {
        let beauty = await read ("beauty_salon.json");
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
        await write ("beauty_salon.json", beauty)
        return res.status(200).send("Product updated successfully!")

    }catch(err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = Number (req.params.id);
        let beauty = await read ("beauty_salon.json");
        beauty = beauty.filter((_, index) => index !==  productId);

        await write ("beauty_salon.json", beauty)
        return res.status(200).send("Product deleted successfully!")
    }catch(err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
}

module.exports = {
    getBeauty,
    createBeauty, 
    updateProduct,
    deleteProduct
}