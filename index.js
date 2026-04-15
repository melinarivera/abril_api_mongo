import db from "mongoose";
import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.listen(port, ()=>[
    console.log ('el servidor arranco en la url http://localhost${port}')
    
])