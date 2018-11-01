const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const frames = require('../Frames-dataset/frames.json');

module.exports ={
  html: async(app)=>{
      app.get('/dataset', function(req, res){
          res.send(frames)
      });
      app.use(express.static(`${__dirname}/../../dist`));
      app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
      app.get('*', (req, res) => {
          res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
      });
  }
};


