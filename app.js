const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/hitesh', (req, res) => {
    res.send('Instagram')
})
app.get('/features', (req, res) => {
    res.send('A tes runner built for humans')
})


app.listen(port, () => {
    console.log(`I am able to listen on  port ${port}`)
})