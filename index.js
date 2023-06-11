import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import postrouts from './routes/posts.js'

dotenv.config()

const app = express();
const port = process.env.ports

app.use(express.json())
app.use('/api/posts', postrouts)

const connectdb = async()=>{
    try{
    mongoose.set('strictQuery',true)
    mongoose.connect(process.env.mongouri)
    
    console.log('db connected')}
    catch(err){

        console.log(err,"error")
    }
}

connectdb().then(()=>{
    app.listen(port,()=>console.log(`server is working under port ${port}`))

}).catch(err=>console.log(err))



app.get("/",
)