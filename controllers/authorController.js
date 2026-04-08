const Author = require("../models/Author")

exports.createArthor = async (req, res) => {
    try {
        const author = await author.create(req.body)
    } catch (error) {
        res.status(500).json({ messsage: error.mesage })
    }
}

//Get all authors
exports.getAuthors = async (req, res) => {
    const authors = await author.find()
    res.json(authors)
}

//Get one

exports.getAuthor = async (req, res) => {
    const author = await
    Author.findById(req.params.id)
    res.json(aurthor)
}

//Update

exports.updateAuthor = async (req, res) => {
    const updated = await
    Author.findAndUpdate(req.params.id, req.body, {new: true})
    res.json(updated)
}

//Delete

exports.deleteAuthor = async (req, res) => {
    await
    Author.findByIdAndDelete(req.params.id)
    res.json({ message: "Author deleted" })
}