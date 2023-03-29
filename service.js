weatherApp.service("cityService", function () {
  this.city = "Lagos,ng";
});
weatherApp.service("weatherService", [
  "$resource",
  function ($resource) {
    this.getWeather = function (city) {
      const weatherAPI = $resource(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=45ffd1e4e39d11a0d0bb20014013db4c`,
        {
          callback: "JSON_CALLBACK",
        },
        { get: { method: "JSONP" } }
      );
      return weatherAPI.get();
    };
  },
]);
