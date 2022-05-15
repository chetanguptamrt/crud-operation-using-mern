const express = require("express");
const users = require("../model/user");

const routes = express.Router()

// add user
routes.post("/add",async (req,res)=>{
    let message = "done";
    const {name,email,mobile,work,age,address,description} = req.body;
    if(name=="" || email=="" || mobile=="" || work=="" || address=="" || description=="") {
        message= "Please fill all data."
    }else {
        try{
            const preuser = await users.findOne({email:email})
    
            if(preuser!=null || preuser) {
                message= "Email already exist."
            } else {
                const addUser = new users({
                    name,email,mobile,work,age,address,description
                });
                await addUser.save()
                // console.log(addUser)
            }
        } catch(error) {
            message= "Something went wrong!"
        }
    }
    res.json({message})
});

// get all user
routes.get("/users",async(req,res)=>{
   try{
       const userdata = await users.find();
    //    console.log(userdata);
       res.status(200).send(userdata)
   } catch(e) {
       console.log(e)
       res.status(500).send("Something went wrong!")
   }
})

// search user
routes.get("/search",async(req,res)=>{
    try{
        const s = req.query.s
        let regex = new RegExp(s,"i")
        const userData = await users.find({name: regex})
        // console.log(userData,s)
        res.status(200).send(userData)
    } catch(e) {
        console.log(e)
        res.status(500).send("Something went wrong!")
    }
 })

// get user by id
routes.get("/user/:id", async(req,res)=>{
    try{
        // console.log(req.params)
        const {id} = req.params;
        const user = await users.findById(id)
        // console.log(user)
        res.status(200).json(user)
    } catch(e) {
       console.log(e)
       res.status(500).send("Something went wrong!")
   }
})

// update user by id
routes.patch("/update-user/:id",async (req,res)=>{
    const {id} = req.params;

    const {_id,name,email,mobile,work,age,address,description} = req.body;
    if(_id=="" || name=="" || email=="" || mobile=="" || work=="" || address=="" || description=="") {
        message= "Please fill all data."
    }else {
        try{
            // console.log({_id,name,email,mobile,work,age,address,description})
            // const update = 
             await users.findByIdAndUpdate(id,req.body)
            // console.log(update)
            res.status(200).send("Data update successfully.")
        } catch(error) {
            // console.log(error)
            res.status(500).send("Something went wrong!")
        }
    }
});

// delete user by id
routes.delete("/delete-user/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        await users.findByIdAndRemove(id)
        res.status(200).send("Data delete successfully.")
    } catch(error) {
        res.status(500).send("Something went wrong!")
    }
})

module.exports = routes