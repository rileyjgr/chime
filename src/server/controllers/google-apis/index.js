const { google } = require('googleapis');
const creds = require('./crendtials.json');

const oauth2Client = new google.auth.OAuth2(
    creds.client_id,
    creds.client_secret,
    creds.redirect_uris
);

const scopes = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/calendar'
];

const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
  
    // If you only need one scope you can pass it as a string
    scope: scopes
});

