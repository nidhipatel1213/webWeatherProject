const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;


const staticPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');     //set hbs
app.set('views',templatePath);     //Change views to templates
hbs.registerPartials(partialPath);  //set partials path

app.use(express.static(staticPath));   //Set static path

// ENDPOINTS
app.get('/', (req,res) =>{
    res.render('index')
})

app.get('/about', (req,res) =>{
    res.render('about')
})

app.get('/weather', (req,res) =>{
    res.render('weather')
})

app.get('*', (req,res) =>{
    res.render('404error',{
        errorMsg: 'Opps! Page Not Found'
    })
})

// START THE SERVER
app.listen(port, (req,res) =>{
    console.log(`The application started successfully on ${port}`);
})