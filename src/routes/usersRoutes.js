const express = require("express")
const usersModel = require("../models/usersModel")
const users = express.Router()

users.get("/", (req, res)=>{
    res.send("GET from /users")
})

users.post("/", async (req, res)=>{
    const newUser = req.body
    try{
        await usersModel.insertOne(newUser)
        res.send("User Created Successfully")    
    }
    catch(e){
        console.log(e)
        res.send("Some error")
    }
})

module.exports = users