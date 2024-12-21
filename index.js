const express = require('express');
const app = express();

// Import jokes and fun facts data
const jokes = require('./data/jokes');
const funfacts = require('./data/funfacts');

const port = process.env.PORT || 3000;

// Route to get a random joke
app.get('/api/joke', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke: randomJoke });
});

// Route to get a random fun fact
app.get('/api/funfact', (req, res) => {
    const randomFact = funfacts[Math.floor(Math.random() * funfacts.length)];
    res.json({ fact: randomFact });
});

// Start the server
app.listen(port, () => {
    console.log(`Joke and Fun API running on port ${port}`);
});
