const API_KEY = "71b1c1d0702b8b340b3eac8e96a5dd5e";

function onGeo(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude={part}&appid=${API_KEY}`;
  fetch(url);
}

function onGeoError() {
  alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);
