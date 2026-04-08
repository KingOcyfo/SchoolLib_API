const express = require("express")

const app = express()

app.use(express.json())

app.use("/authors", require("./routes/authorRoutes"))

app.use("/books", require("./routes/bookRoutes"))

module.exports = app