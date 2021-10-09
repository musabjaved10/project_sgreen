const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.use(express.json())

const dbURL =  'mongodb://localhost:27017/reporting';
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", () => {
    console.log("Database connected successfully")
});

app.get('/',(req,res)=> {
    res.send('Hello from the root route')
})

app.get('/events',(req,res)=> {
    res.send('testing')
})

app.post('/events',(req,res)=> {
    res.json(req.body)
})


const PORT =  5000;
app.listen(PORT, () => {
    console.log(`Server running in ${PORT} `)
})