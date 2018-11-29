const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fulfillment = require('../controllers/dialogflowcontroller');
const appcontrollers = require('../controllers/appcontrollers');

require('dotenv');

module.exports ={

    html: async(app)=>{
        app.get('/api/feedback', (req, res)=> {
            appcontrollers.feedback(req, res);
        });
        app.use(express.static(`${__dirname}/../../dist`));
        app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
        app.get('*', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    },
    
    users: async(app)=>{

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        app.get('/users/login', (req, res)=>{
            res.send('hello from users login');
        })
        app.get('/users/signup', (req,res)=>{
            res.send('hello from users signup')
        })
        app.post('/users/login', appcontrollers.login);
        
        app.post('/users/signup', appcontrollers.signup);
    },
    
    chime: async(app)=>{
        app.use(bodyParser.json());

        app.get('/chime', (req, res)=>{
            res.send('hello from chime')
        });
        
        app.post('/chime', (request, response) =>{
            fulfillment.dialogflowFirebaseFulFillment(request, response);
        });
    }

};