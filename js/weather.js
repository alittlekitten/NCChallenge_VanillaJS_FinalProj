const weather = document.querySelector(".js-weather");

const API_KEY = "c3001d6c36bfa343ca01e3a84d962b00"; /* API는 특정 웹사이트로부터 데이터를 얻거나 컴퓨터끼리 소통하기 위해 고안됨!*/
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` // 데이터 가져오기 fetch()
    ).then(function(response){ // then은 함수를 호출하고, 이 함수는 데이터가 넘어오고 나서 동작!
        return response.json()
    }).then(function(json){
        const temperature = Math.floor(json.main.temp);
        const place = json.name;
        weather.innerText = `${temperature}º @ ${place}`;
    }) 
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj)) // 저장값 string으로 - int로 바꾸려면 parseInt 사용
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        /*
        latitude:latitude,
        longitude:longitude을 아래처럼 간단하게 표시
        */
       latitude,
       longitude
    }
    saveCoords(coordObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geolocation");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        // getWeather 함수 호출
        const parseCoords = JSON.parse(loadedCoords); // parse는 구문분석!
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();