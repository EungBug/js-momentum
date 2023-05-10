// Geolocation
// navigator
// 브라우저에서 위치 정보를 전달해줌

const apiKey = config.API_KEY;

function getWeatherIcon() {}

function onGeoSuccess(position) {
  const weatherEl = document.getElementById('weather');
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const cityEl = document.querySelector('p.weather__city');
      const tempEl = document.querySelector('p.weather__temp');
      const iconEl = document.querySelector('img.weather__icon');
      const infoEl = document.querySelector('p.weather__info');

      cityEl.textContent = data.name;
      tempEl.innerHTML = `${Math.round(data.main.temp)}&#8451;`;
      infoEl.textContent = data.weather[0].main;
      iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .then(data => {
      weatherEl.classList.remove('hidden');
    });
}

function onGeoError() {
  // TODO ERROR 처리
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
