import express from 'express'
import notes from './data/notes.js';


const app=express();


app.get('/',(req,res)=>{
    res.send('Hello');
})

app.get('/api/notes',(req,res)=>{
    res.json(notes);
})

app.listen(5000,()=>{
    console.log(`Server runnig at port 5000`);
    
})