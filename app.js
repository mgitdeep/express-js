// Now heading to learn MongoDB

const express = require("express")

const app = express()

app.get("/", (req, res) => {
    // res.send("Hello from the Express!!")
    res.write("<h1>Hello from the Express!!</h1>")
    res.write("<h2>Hello from the Express!!</h2>")
    res.send()
})

app.get("/about", (req, res) => {
    res.status(200).send("Hello from the About Page!!")
    // res.status(200).send("Hello from the About Page!!")
})

app.listen(9000, () => {
    console.log("Listening on port 9000")
})