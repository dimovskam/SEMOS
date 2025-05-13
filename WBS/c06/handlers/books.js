const { getBooks, createBook, updateBook, removeBook } = require ("../models/books")

const getAllBooks = async (req, res) => {
    try{
        const books = await getBooks()
        return res.stat(200).send(books)
    }catch(err){
        console.log(err)
        return res.status(500).send("Invali Server Error")
    }
}

const createNewBook = async (req, res) => {
    try{
        await createBook(req.body)
        return res.status(200).send("New book created successfully!")
    }catch(err){
        console.log(err)
        return res.status(500).send("Invali Server Error")
    }
}

const updateCurrentBook = async (req, res) => {
    try{
        await updateBook(req.params.id, req.body)
        return res.status(200).send(`Book with ${req.params.id} successfully updated!`)
    }catch(err){
        console.log(err)
        return res.status(500).send("Invali Server Error")
    }
}

const removeCurrentBook = async (req, res) => {
    try{
        await removeBook(req.params.id)
        return res.status(200).send(`Book with ${req.params.id} deleted successfully!`)
    }catch(err){
        console.log(err)
        return res.status(500).send("Invali Server Error")
    }
}

module.exports = {
    getAllBooks,
    createNewBook,
    updateCurrentBook,
    removeCurrentBook
}