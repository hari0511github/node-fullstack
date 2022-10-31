const express = require("express");
const router = express.Router();
const userModel =  require("../models/users");
// Get User Details
router.get('/', async(req, res)=>{
    
    try {
        const data =  await userModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error.message})        
    }
})


// Get By User Details By I
router.get('/:id', (req, res)=>{
    res.send("HELLO")
})


// Create the users
router.post('/', async (req, res)=>{
    const payload = {
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email:req.body.email
    }
     try {
         const data =  await new userModel(payload).save();
         res.status(201).json(data)
     } catch (error) {
        res.status(400).json({message:error.message})        

     }
})


router.put('', (req, res)=>{
    res.send("HELLO")
})
module.exports = router;