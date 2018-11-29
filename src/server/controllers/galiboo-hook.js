const axios = require('axios');
require('dotenv').config();

module.exports = {
    music: async(agent)=>{
        console.log(agent.parameters.Queries);

        // const queries = agent.pareters.Queries;

        const headers = {
            token: process.env.GALIBOO_ACCESS_TOKEN,
            threshold: 0.6,
            q: 'jazz',
            count: 5,
            page: 1
        }
        const token = '?token=' + process.env.GALIBOO_ACCESS_TOKEN;
        const query = '&q=jazz';

        let songsArray = [];
        await axios.get('http://secure.galiboo.com/api/discover/tracks/smart_search/'+ token + query)
        .then((response)=>{
            const songData = response.data.results;
            for(let key in songData){
                let url = songData[key].audio_url;
                console.log(url);
                songsArray.push(url);
            }
        })
        .catch((error)=>{
            console.log(error);
        });

        console.log(songsArray);
        return agent.add('I have a list of songs for you,' + songsArray.join('\n'));
    }
};