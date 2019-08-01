const express = require("express")
const path = require("path")


const app = express()


const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/add", (req,res) => {
    res.sendFile(path.join(__dirname, "add.html"))
})



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})