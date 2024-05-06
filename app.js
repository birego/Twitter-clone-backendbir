import express from 'express';
import dotenv from 'dotenv'
import route from './routes/twitter.routes.js';
dotenv.config();
const {port} = process.env || 4400;
const app = express();
app.use(express.json())

app.use("/",route)
app.listen(port,(req,res)=>{
    console.log(`server is running on http://localhost:${port}`)
});
