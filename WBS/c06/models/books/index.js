const mongoose = require ("mongoose")

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    language: String, 
    pages: Number,
    genre: String,
    publicationDate: Number,
    publisher: String,
    createdAt: Number,
    updatedAt: Number
})

const booksModel = mongoose.model("book", bookSchema, "books")

const getBooks = async () => {
    return await booksModel.find();
}

// const getOneBook = async (id) => {
//     return await booksModel.findOne({_id: id})
// }

const createBook = async (data) => {
    const book = new booksModel(data)
    return await book.save();
}

const updateBook = async (id, data) => {
    return await booksModel.updateOne({_id: id}, data)
}

const removeBook = async (id) => {
    return await booksModel.deleteOne({_id: id})
}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    removeBook
}