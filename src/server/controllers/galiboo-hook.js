const axios = require('axios');
require('dotenv').config();

module.exports = {
    music: async(agent)=>{
        console.log(agent.parameters.queries);
        const potentionalQuerys = [agent.parameters];
        console.log(potentionalQuerys);
        const getQuerys = (potentionalQuerys) => {



        };
        // const queries = agent.pareters.Queries;
        const token = '?token=' + process.env.GALIBOO_ACCESS_TOKEN;
        const query = '&q=' + potentionalQuerys;

        let spotify_ids_array = [];
        let songsArray = [];
        // call to galiboo to get spotify ids based on user inputs 
        await axios.get('http://secure.galiboo.com/api/discover/tracks/smart_search/'+ token + query)
        .then((response)=>{
            const songData = response.data.results;
            for(let key in songData){
                let spotify_id = songData[key].external_ids.spotify;
                spotify_ids_array.push(spotify_id);
            }
        })
        .catch((error)=>{
            console.log(error);
        });

        // call to spotify api to get data based on ids that galiboo gives us.
        await spotify_ids_array.forEach((entry)=>{
            const spotify_url = 'https://open.spotify.com/track/' + entry;
            songsArray.push(spotify_url);
        });


        return agent.add('Okay I have generated some spotify links for you,' + '\n' + songsArray.join('\n'));
    }
};