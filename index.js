import express, { json } from 'express'
import { connectdb } from './config/DB.js';
import movies from './route/apiroutes.js'
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());


app.get('/api',(req,res)=>{
    res.json("This is the api call in the server")
});

app.use('/api',movies);


app.listen(port,()=>{
   console.log(`Sever running on the port ${port}`)
   connectdb();
})