const Event = require('../models/event');
const User = require('../models/user');
const Feedback = require('../models/feedback');
// const googleapis = require('./google-apis');

module.exports = {
    
    hello: async(agent)=>{
        const req = JSON.stringify(agent.body);
        console.log('agent: ' + agent);
        agent.add('Hello.')
    },
    // Create Event Intent
    event: async(agent)=>{

        const convertParametersDate = (date, time) =>{
            return new Date(Date.parse(date.split('T')[0] + 'T' + time.split('T')[1].split('-')[0] + timeZoneOffset));
        }
        const addHours = (dateObj, hoursToAdd)=>{
            return new Date(new Date(dateObj).setHours(dateObj.getHours() + hoursToAdd));
        }        
        
        const getLocaleTimeString = (dateObj)=>{
            return dateObj.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, timeZone: timeZone });
        }

        const getLocaleDateString= (dateObj)=> {
            return dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: timeZone });
        }

        const createCalendarEvent = (dateTimeStart, dateTimeEnd) => {
            return new Promise((resolve, reject) => {
                calendar.events.list({  // List all events in the specified time period
                  auth: serviceAccountAuth,
                  calendarId: calendarId,
                  timeMin: dateTimeStart.toISOString(),
                  timeMax: dateTimeEnd.toISOString()
                }, (err, calendarResponse) => {
                  // Check if there exists any event on the calendar given the specified the time period
                  if (err || calendarResponse.data.items.length > 0) {
                    reject(err || new Error('Requested time conflicts with another appointment'));
                  } else {
                    // Create an event for the requested time period
                    calendar.events.insert(
                        {   
                            auth: serviceAccountAuth, 
                            calendarId: calendarId,
                            resource: {summary: 'Bike Appointment',
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
        const dateTimeStart = convertParametersDate(agent.parameters.date, agent.parameters.time);
        const dateTimeEnd = addHours(dateTimeStart, 1);
        const appointmentTimeString = getLocaleTimeString(dateTimeStart);
        const appointmentDateString = getLocaleDateString(dateTimeStart);



        // Check the availability of the time, and make an appointment if there is time on the calendar
        return createCalendarEvent(dateTimeStart, dateTimeEnd).then(() => {
          agent.add(`Got it. I have your appointment scheduled on ${appointmentDateString} at ${appointmentTimeString}. See you soon. Good-bye.`);
        }).catch(() => {
          agent.add(`Sorry, we're booked on ${appointmentDateString} at ${appointmentTimeString}. Is there anything else I can do for you?`);
        });
    },

    // Get Calendar Info
    getInfo: async(agent)=>{
        agent.add('get info hit');
    },
    
    feedback: async(agent)=>{
        const userFeedback = agent.parameters.feedback;
        const newFeedback = new Feedback({message: userFeedback});
        await newFeedback.save();

        agent.add('Thank you for your feedback, your feedback request was:' + newFeedback + 'this was sent to your supervisor anonymously');
    },
    
    weather: async(agent)=>{
        console.log(agent.parameters);
        const {name, city, etc} = agent.parameters;

        const weather = '';
        agent.add(weather);
    }

};