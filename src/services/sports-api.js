const API_KEY = process.env.API_KEY;

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