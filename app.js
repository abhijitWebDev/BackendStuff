const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello from Hitesh sir</h1>");
})

app.get('/hitesh', (req, res) => {
    res.send('Instagram')
})
app.get('/features', (req, res) => {
    res.send("<h1>This is a feature</h1>")
    
})

app.get('/insta', (req, res) => {
    const insta = 
      {
        userName: 'HiteshChoudharyOfficial',
        followers: 70,
        follow: 20,
        language: 'English',
      }

    ;
res.status(200).send({insta});

})

app.get('/v1/twitter', (req, res) => {
    const twitter = {
        userName: "Abhijit Mone",
        followers: 30,
        following: 40
    };
    res.status(200).send({twitter});
})

app.get('/api/v1/:token', (req,res) => {
    console.log(req.params.token);
    res.status(200).json({param: req.params.token})
})



app.listen(port, () => {
    console.log(`I am able to listen on  port ${port}`)
})