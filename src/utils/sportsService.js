const BASE_URL = '/api/sports';
const APIKEY = process.env.APIKEY;

export default {
    leagueDetail
}

function leagueDetail(Teams) {
    console.log(leagueDetail, Teams)
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({Teams})
    };
    //return fetch(BASE_URL, options).then(res => res.json());
}
