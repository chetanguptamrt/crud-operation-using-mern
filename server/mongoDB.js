const mongoose = require("mongoose")

const db = "mongodb://127.0.0.1:27017/crud"
mongoose.connect(db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Connection Start")
}).catch((error)=>{
    console.log(error.message)
})