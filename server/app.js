require("dotenv").config();
const express= require("express")
const app = express()
const mongoose = require("mongoose")
require("./mongoDB")
const users= require("./model/user")
const cors = require("cors")
const routes = require("./routes/routes")

const port = process.env.port || 8083

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port,()=>{
    console.log(`Server is start at port ${port}`)
})