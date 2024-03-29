const Feedback = require('../models/feedback');
const Axios = require('axios');
const {google} = require("googleapis");
const timeZone = "America/New_York";
const timeZoneOffset = "-05:00"; 

const axios = require('axios');

require('dotenv').config();

module.exports = {
    event: async(agent)=>{
        // this is how you get parameters

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
        }; 

        console.log(serviceAccount);

        
        // Set up Google Calendar service account credentials
        const serviceAccountAuth = new google.auth.JWT({
            email: serviceAccount.client_email,
            key: serviceAccount.private_key,
            scopes: "https://www.googleapis.com/auth/calendar"
        });
        
        const calendar = google.calendar("v3");

        const date = agent.parameters.date;
        const time = agent.parameters.time;
        
        const convertParametersDate = (date, time) =>{
            return new Date(Date.parse(date + "T" + time + timeZoneOffset));
        }

        const addHours = (dateObj, hoursToAdd)=>{
            return new Date(new Date(dateObj).setHours(dateObj.getHours() + hoursToAdd));
        }        
        
        const getLocaleTimeString = (dateObj)=>{
            return dateObj.toLocaleTimeString("en-US", { hour: "numeric", hour12: true, timeZone: timeZone });
        }

        const getLocaleDateString= (dateObj)=> {
            return dateObj.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: timeZone });
        }

        const appointmentDuration = 1;
        const dateTimeStart = convertParametersDate(date, time);
        const dateTimeEnd = addHours(dateTimeStart, 1);
        const appointmentTimeString = getLocaleTimeString(dateTimeStart);
        const appointmentDateString = getLocaleDateString(dateTimeStart);
        const calendarId = process.env.CAL_ID;

        const createCalendarEvent = (dateTimeStart, dateTimeEnd) => {
            console.log(dateTimeStart);
            return new Promise((resolve, reject) => {
                calendar.events.list({  // List all events in the specified time period
                  auth: serviceAccountAuth,
                  calendarId: calendarId,
                  timeMin: dateTimeStart.toISOString(),
                  timeMax: dateTimeEnd.toISOString()
                }, (err, calendarResponse) => {
                    console.log(calendarResponse);
                  // Check if there exists any event on the calendar given the specified the time period
                  if (err || calendarResponse.data.items.length > 0) {
                    reject(err || new Error("Requested time conflicts with another Meeting"));
                    console.log(err);
                  } else {
                    // Create an event for the requested time period
                    calendar.events.insert(
                        {   
                            auth: serviceAccountAuth, 
                            calendarId: calendarId,
                            resource: {summary: "Meeting", // agent.params.event?
                            start: {dateTime: dateTimeStart},
                            end: {dateTime: dateTimeEnd}
                        }
                    }, (err, event) => {
                      err ? reject(err) : resolve(event);
                    }
                    );
                  }
                });
              });
            }

        // Check the availability of the time, and make an appointment if there is time on the calendar
        return createCalendarEvent(dateTimeStart, dateTimeEnd).then(() => {
          agent.add(`Got it. I have your Meeting scheduled on ${appointmentDateString} at ${appointmentTimeString}.`);
        }).catch(() => {
          agent.add(`Sorry, we"re booked on ${appointmentDateString} at ${appointmentTimeString}. Is there anything else I can do for you?`);
        });
    },

    // Get Calendar Info
    getInfo: async(agent)=>{
        agent.add("get info hit");
    },
    feedback: async(agent)=>{
        const userFeedback = agent.parameters.feedback;
        const newFeedback = new Feedback({message: userFeedback});
        
        await newFeedback.save();
        agent.add("Thank you for your feedback, your feedback request was:" + newFeedback + "this was sent to your supervisor anonymously");
    },
    weather: async(agent)=>{

        console.log(agent.parameters);

        const zip = agent.parameters.zip-code;

        getWeather = (z) =>  {
            const weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + z + ",us&APPID=" + process.env.OPENWEATHER_ACCESS_TOKEN;
            console.log(weatherURL);

            return Axios(weatherURL);
        };

        const toFarenheit = kelvin => {
            console.log(kelvin);
            let temp = (kelvin - 273.15) * 9/5 + 32;
            var result = parseInt(temp);
            return result;
        }
        await getWeather(zip).then((data) => {
        agent.add(`The weather by you is looking like ${toFarenheit(data.main.temp)} degrees and ${data.weather[0].main} today`);
        });
    },
    News: async(agent)=>{

        console.log(agent.parameters);

        const company = agent.parameters.company;
        const ticker = agent.parameters.ticker;
        const date = agent.parameters.date;
        
        getNews = c => {
            const newsURL = 'https://newsapi.org/v2/everything?language=en&domains=wsj.com,nytimes.com,businessinsider.com&q="' + c + '"&apiKey=' + process.env.NEWS_ACCESS_TOKEN;
            console.log(newsURL);
            return axios.get(newsURL).then(response => {

                return response.data;
            });;
        }

        getStock = s => {
            const stockURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + s + "&outputsize=compact&apikey=" + process.env.ALPHA_ACCESS_TOKEN;
            console.log(stockURL);
          
            return axios.get(stockURL).then(response => {

                return response.data;
            });
        }

        getUpdates = (com, tick) => {
            return Promise.all([getNews(com), getStock(tick)])
        }

        return getUpdates(company, ticker).then((data) => {
            console.log("$$$$$$$$$$$$ data array here", data);
            var placement = data[1]['Time Series (Daily)'];
            var stockplacer = Object.keys(placement)[0];
            var stockprice = '1. open';

            agent.add(`The headline of the day for ${company} is "${data[0].articles[0].description}". The stock ticker ${ticker} opened the this most recent trading day @ ${placement[stockplacer][stockprice]}`)
        }).catch(() => {
            agent.add(`Sorry, no news today. Is there anything else I can do for you?`);
          });
    }
};

