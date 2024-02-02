const {setupDB} = require('./db')
const Movie = require('./Movie')

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const www = process.env.WWW || './public';
app.use(express.static(www));
app.use(express.json())


app.post('/movie', async (req, res) => {

    const movie = await Movie.create(req.body)
    res.status(200).json(movie)
})

app.get('/movie', async (req,res) => {
    const movies = await Movie.find()
    res.status(200).json(movies)
})

app.delete('/movie/:id', async (req, res) => {
    const movies = await Movie.deleteOne({_id: req.params.id})
    res.status(200).json(movies)
})

app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});

setupDB().then(() => {
    console.log('Connected to mongo');
    app.listen(port, () => console.log(`listening on http://localhost:${port}`));

})
