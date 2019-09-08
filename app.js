const storage = new Storage();
// Get Stored Location Data
const weatherLoc = storage.getLocData();

// Init Weather Class
const weather = new Weather(weatherLoc.city, weatherLoc.state);
const ui = new UI();
// Get Weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Change Location Event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("state").value;
  // Change Location
  weather.changeLocation(city, country);

  // Set location in local storage
  storage.setLocData(city, country);
  getWeather();
  // Close Modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(data => {
      ui.paint(data);
    })
    .catch(err => console.log(err));
}
