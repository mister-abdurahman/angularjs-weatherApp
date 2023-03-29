weatherApp.controller("homeController", [
  "$scope",
  "cityService",
  "$location",
  function ($scope, cityService, $location) {
    $scope.city = cityService.city;

    // to watch and update data, $watch takes in the data to be watched and a fn
    $scope.$watch("city", function () {
      cityService.city = $scope.city;
    });
    $scope.submit = function () {
      $location.path("/forecast");
    };
  },
]);

weatherApp.controller("forecastController", [
  "$scope",
  "cityService",
  "weatherService",
  "$http",
  function ($scope, cityService, weatherService, $http) {
    $scope.city = cityService.city;

    $scope.countrycode = $scope.city.slice(-2).toUpperCase();

    // resource service is used to wrap up the http service that comes with angularjs, it makes it easier to get data
    // $scope.weatherAPI = $resource(
    //   `http://api.openweathermap.org/data/2.5/weather?q=${$scope.city}&APPID=45ffd1e4e39d11a0d0bb20014013db4c`,
    //   {
    //     // this line below is to make the browser ignore the api data request.
    //     callback: "JSON_CALLBACK",
    //   },
    //   { get: { method: "JSONP" } }
    // );

    // $scope.weatherResult = $scope.weatherAPI.get();
    $scope.weatherResult = weatherService.getWeather($scope.city);
    // console.log($scope.weatherResult);

    $scope.convertToCelsius = function (degK) {
      return Math.round(degK - 273.15);
    };
    $scope.convertToDate = function (date) {
      return new Date(date * 1000); //cos its in milliseconds
    };
  },
]);
