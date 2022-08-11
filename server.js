
const eg = require ('express-handlebars');
const express = require('express')
const path = require('path');
const app = express()


// Engine setup
app.engine('handlebars', eg.engine());
app.set('view engine', 'handlebars');
app.set('public', './public/pages');


// Routes 
app.get('/', (req, res) => {
    res.render('home', { body: 'home' , title: 'Mubashir', condition: false })
})


app.listen(3000, () => {
    console.log(`Example app listening on port change`)
})