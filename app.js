// Now heading to learn MongoDB

const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.get("/", (req, res) => {
    console.log(path.join(__dirname + '/index.html'))
    res.sendFile(path.join(__dirname + '/index.html'))
    // req.sendFile('./index.html')
    // res.send("Hello from the Express!!")
    // res.write("<h1>Hello from the Express!!</h1>")
    // res.write("<h2>Hello from the Express!!</h2>")
    // res.send()
})

app.post("/api/v1/login", (req, res) => {
    res.send(`<h1>DONE Mr ${req.body.name}</h1> <h2>Here's your email: ${req.body.email}</h2>`)
    // res.send(`<h1>Here's your email: ${req.body.email}</h1>`)
    console.log('submitted')
    console.log(req.body)
})

app.get("/api/v1/userdata", (req, res) => {
    res.json({
        name: "Mondeep",
        email: "super@gmail.com",
        password: "xyzz"
    })
})

app.post("/api/v1/register", (req, res) => {

    const userName = req.body.name
    const userEmail = req.body.email
    const userPassword = req.body.password

    res.json({
        success: "true",
        name: userName,
        email: userEmail,
        password: userPassword
    })
})

app.get("/about", (req, res) => {
    res.status(200).send("Hello from the About Page!!")
    // res.status(200).send("Hello from the About Page!!")
})

app.listen(9000, () => {
    console.log("Listening on port 9000")
})