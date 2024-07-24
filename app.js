import env from "dotenv";
import express from "express";

env.config();

const app = express()
const port = process.env.PORT||3000;

app.get('/', (req, res) => {
    res.send('Hellfffo World!')
})

app.get('/himalay', (req, res) => {
    res.send('nothuing')
})

app.listen(port, () => {
   console.log(`Server ${port}`) 
})
