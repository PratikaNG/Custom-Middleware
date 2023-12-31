
import express from "express"
import bodyParser from "body-parser"
import {dirname} from "path"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3000
var fullname = ""
app.use(bodyParser.urlencoded({extended:true}))

function logger(req,res,next){
    console.log(req.body)
    fullname = req.body["firstname"]+req.body["lastname"]
    next()
}
app.use(logger)
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})
app.post("/submit",(req,res)=>{
    res.send(`<h1>Your fullname is : <em>${fullname} </em>😍</h1>`)
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})