const express = require("express")
const expensesViewModel = require("../models/expensesViewModel")
const expenses = express.Router()


expenses.get("/", async (req, res)=>{
    const foundExpenses = await expensesViewModel.find().sort({date: -1}).limit(10)
    res.send(foundExpenses)
})

expenses.get("/:from/:to/:categoryId", async (req, res)=>{
    const {from, to, categoryId} = req.params // {from: "", to: "", categoryId: ""}
    let foundExpenses = []
    if(categoryId=="all"){
        foundExpenses = await expensesViewModel.find({
            date: {
                $gte: new Date(from),
                $lte: new Date(to)
            }
        })
    }
    else{
        foundExpenses = await expensesViewModel.find({
            date: {
                $gte: new Date(from),
                $lte: new Date(to)
            },
            categoryId: categoryId
        })    
    }
    res.send(foundExpenses)
})

module.exports = expenses