const BASE_URL = '/api/sports';
const APIKEY = process.env.APIKEY;

export default {
    leagueDetail, 
    leagueEvents
}

function leagueDetail(league) {
    console.log(leagueDetail, league)
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
    };
    return fetch(BASE_URL+'/league/'+ league, options).then(res => res.json());
}

function leagueEvents(league) {
    console.log(leagueEvents, league)
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
    };
    return fetch(BASE_URL+'/league/'+ league + '/events', options).then(res => res.json());
}
