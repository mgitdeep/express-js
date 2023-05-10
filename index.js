// const http = require('http');
// import http from 'http';
import express from 'express';
import path from 'path';

// console.log(http)

const app = express();  

app.get("/yoo", (req, res) => { 
    // console.log(path.resolve())
    const pathLocation = path.resolve()
    console.log(pathLocation) 

    res.sendFile(path.join(pathLocation, "/index.html"))
    // res.send("Hello World")
})



app.listen(5000, () => {
    console.log("Listening on port 5000")
})