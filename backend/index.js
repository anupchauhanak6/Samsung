const express = require('express')
const cors = require('cors')

const app = express()

// Middleware to parse JSON
app.use(express.json())
// Enable CORS for frontend communication
app.use(cors())

app.get('/',(req,res)=>{
    res.send('server is running...')
})
app.get('/cart',(req,res)=>{
    res.send('This is cart')
})

// Signup endpoint
app.post('/api/signup',(req,res)=>{
    try {
        const { fullName, email, password } = req.body
        
        // Validate required fields
        if (!fullName || !email || !password) {
            return res.status(400).json({ 
                success: false,
                message: 'All fields are required' 
            })
        }
        
        // Here you would typically save to database
        console.log('Received signup data:', { fullName, email, password })
        
        res.status(201).json({ 
            success: true,
            message: 'Signup successful',
            data: { fullName, email }
        })
    } catch (error) {
        console.error('Signup error:', error)
        res.status(500).json({ 
            success: false,
            message: 'Server error during signup' 
        })
    }
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log('This is Port 3000');
})