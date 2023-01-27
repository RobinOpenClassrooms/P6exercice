const express = require('express');


const app = express();

app.use((req, res, next) => {
    console.log('Requête OK !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
});

app.use((req, res, next) => {
    res.json({message: 'Your request was successful!'})
});

module.exports = app;