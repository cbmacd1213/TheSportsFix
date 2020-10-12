//Example of API calls

// export function getCurWeatherByLatLng(lat, lng) {
//     console.log(lat, lng)
//     return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=4507ec27b0a5b32877e856da0ceca6c9`)
//         .then(res => res.json())
// }

export function getAllSports(){
    return fetch(`https://www.thesportsdb.com/api/v1/json/1/all_sports.php`)
    .then(res => res.json())
}

console.log(getAllSports)

export function getAllNFLTeams(){
    return fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391`)
    .then(res => res.json())
}

console.log(getAllNFLTeams)

export function getAllNHLTeams(){
    return fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4380`)
    .then(res => res.json())
}

console.log(getAllNHLTeams)

export function getAllNBATeams(){
    return fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387`)
    .then(res => res.json())
}

console.log(getAllNBATeams)

export function getAllMLBTeams(){
    return fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4424`)
    .then(res => res.json())
}

console.log(getAllMLBTeams)