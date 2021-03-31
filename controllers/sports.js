const axios = require('axios');
const APIKEY = process.env.APIKEY;

const leagueLookup = {
    NFL: 4391,
    NHL: 4380,
    NBA: 4387,
    MLB: 4424,
}


module.exports = {
    leagueDetail,
    leagueEvents
}

function leagueDetail(req, res) {
    //         https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4346
    axios.get(`https://www.thesportsdb.com/api/v1/json/${APIKEY}/lookup_all_teams.php?id=${leagueLookup[req.params.id]}`)
    .then(function (response) {
    // handle success
        console.log(response);
        res.json(response.data)
        
    })
    .catch(function (error) {
    // handle error
        console.log(error);
    })
}


function leagueEvents(req, res) {
    axios.get(`https://www.thesportsdb.com/api/v1/json/${APIKEY}/eventsnextleague.php?id=${leagueLookup[req.params.id]}`)
    .then(function (response) {
    // handle success
        console.log(response);
        res.json(response.data)
    })
    .catch(function (error) {
    // handle error
        console.log(error);
    })
}
