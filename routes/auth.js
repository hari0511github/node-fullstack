const express = require("express");
const router = express.Router();
const Cognito = require('../cognito/index');

// Create the users
router.post('/signup', async (req, res)=>{
    const payload = {
              email: req.body.email,
              password:  req.body.password
    }
     try {
        const data = await Cognito.signUp(payload);
        res.status(201).json(data)
     } catch (error) {
        res.status(400).json({message:error.message})        

     }
})

//verify the user
router.post('/verify', async (req, res)=>{
    const payload = {
              email: req.body.email,
              code:  req.body.code
    }
     try {
        const data = await Cognito.verify(payload);
        res.status(201).json(data)
     } catch (error) {
        res.status(400).json({message:error.message})        

     }
})

//verify the user
router.post('/login', async (req, res)=>{
    console.log("gehehada",req.body)
    const payload = {
        email: req.body.email,
        password:  req.body.password
    }
     try {
    
        const data = await Cognito.signIn(payload);
        res.status(201).json(data)
     } catch (error) {
        res.status(400).json({message:error.message})        

     }
})
router.put('', (req, res)=>{
    res.send("HELLO")
})
module.exports = router;