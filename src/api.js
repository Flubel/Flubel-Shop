const express = require("express")
const serverless = require("serverless-http")
const path = require('path');


const app = express()
const router = express.Router()

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})


router.get('/welcome',(req,res)=>{
    res.json({
        "hello": "welcomed"
    })
})



router.get('/ola',(req,res)=>{
    res.json({
        "hello": "ola"
    })
})


app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)