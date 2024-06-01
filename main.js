const express = require('express')
const app = express()

const PORT = process.env.PORT || 8002;

app.get('/',(req,res)=>{
    return res.json({message: 'Hey I am node JS from docker!'})
})

app.listen(PORT, ()=>console.log('Server started'))