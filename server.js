import express from 'express';
import dotenv from 'dotenv'
import route from './routes/twitter.routes.js';
dotenv.config();
const {port} = process.env
const app = express();


app.use("/",route)
app.listen(port,(req,res)=>{
    console.log(`server is running on http://localhost:${port}`)
});
