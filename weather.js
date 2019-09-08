//  Creating Weather Class
class Weather {
  constructor(city, country) {
    this.api = "0a0d89281d8c8242eabeb4ac94efb2d9";
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    //   Send HTTP Request
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&Appid=${this.api}`
    );
    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
