const express = require('express');
const app = express();
const notes = require('./data/notes');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is listening on port : ${PORT}`);
});

app.get('/', (req,res)=>{
    res.send("Hello kaise ho hein hod");
});

app.get('/api/notes', (req,res)=>{
    res.json(notes);
});


app.get('/api/notes/:id', (req,res)=>{
    const id = req.params.id;
    const maal = notes.find((n) => n._id === id);
    res.send(maal);
});