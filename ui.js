class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelslike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${(weather.main.temp - 273.15).toFixed(2)}°C (${(
      ((weather.main.temp - 273.15) * 9) / 5 +
      32
    ).toFixed(2)}°F)`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Humidity : ${weather.main.humidity}%`;
    this.feelslike.textContent = `Min Temp : ${(
      weather.main.temp_min - 273.15
    ).toFixed(2)}°C | Max Temp : ${(weather.main.temp_max - 273.15).toFixed(
      2
    )}°C `;
    this.wind.textContent = `Wind : ${weather.wind.speed * 3.6} Km/Hr`;
  }
}
