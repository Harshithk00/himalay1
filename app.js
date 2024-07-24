require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hellfffo World!')
})

app.listen(process.env.PORT||port, () => {
    
})
app.get('/himalay', (req, res) => {
    res.send('nothuing')
})