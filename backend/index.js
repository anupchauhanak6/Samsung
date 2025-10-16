const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('server is running...')
})
app.get('/cart',(req,res)=>{
    res.send('This is cart')
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log('This is Port 3000');
})