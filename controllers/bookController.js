const Book = require("../models/Book")

exports.createBook = async (req, res) => {
    try {
        const book = await
        Book.create(req.body)
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
  
//Get all
exports.getBooks = async (req, res) => {
    const book = await
    Book.find().populate("authors")
    res.json(book)
}

//Get one
exports.getBook = async (req, res) => {
    Book.findById(req.params.id).populate("authors")
    res.json(book)
}

//Update
exports.updateBook = async (req, res) => {
    const updated = await 
    Book.findByIdAndUpdate(req.params.id, req.body, 
        {new: true})
    res.json(updated)
}

//Delete
exports.deleteBook = async (req, res) => {
    await
    Book.findByIdAndDelete(req.params.id)
    res.json({ message: "Book deleted" })
}