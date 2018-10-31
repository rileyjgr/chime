const controllers = require('controllers');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

module.exports ={
  html: async(app)=>{
      app.use(express.static(`${__dirname}/../../dist`));
      app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
      app.get('*', (req, res) => {
          res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
      });
  }
};


