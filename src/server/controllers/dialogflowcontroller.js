'use strict';

const functions = require('firebase-functions');
const {google} = require('googleapis');
const {WebhookClient} = require('dialogflow-fulfillment');
const chime = require('./chime-hook');

require('dotenv');
// Enter your calendar ID and service account JSON below.
const calendarId = process.env.CAL_ID; // Example: 6ujc6j6rgfk02cp02vg6h38cs0@group.calendar.google.com
const serviceAccount = {  
"type": "service_account",
"project_id": process.env.PROJECT_ID,
"private_key_id": process.env.PRIVATE_KEY_ID,
"private_key": process.env.PRIVATE_KEY,
"client_email": process.env.CLIENT_EMAIL,
"client_id": process.env.CLIENT_ID,
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://oauth2.googleapis.com/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": process.env.CLIENT_x509_CERT_URL
}; // The JSON object looks like: { "type": "service_account", ... }

// Set up Google Calendar service account credentials
const serviceAccountAuth = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: 'https://www.googleapis.com/auth/calendar'
});

const calendar = google.calendar('v3');

const timeZone = 'America/Los_Angeles';  // Change it to your time zone
const timeZoneOffset = '-07:00'; 
exports.dialogflowFirebaseFulFillment = functions.https.onRequest((request, response)=>{
    const agent = new WebhookClient({request, response});
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    let intentMap = new Map();
    intentMap.set('Hello', chime.hello);
    intentMap.set('Feedback', chime.feedback);
    intentMap.set('Event',chime.event);
    intentMap.set('getPersonalInfo',chime.getInfo);
    intentMap.set('weather', chime.weather);
    
    agent.handleRequest(intentMap);
});