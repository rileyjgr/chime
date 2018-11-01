const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const frames = require('../Frames-dataset/frames.json');
const controllers = require('../controllers/controllers.js');

const chime = require('../controllers/chime.js');

module.exports ={
  html: async(app)=>{
      app.get('/dataset', chime.chimer);
      app.use(express.static(`${__dirname}/../../dist`));
      app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
      app.get('*', (req, res) => {
          res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
      });
  }
};


