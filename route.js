weatherApp.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "homeController",
      })
      .when("/forecast", {
        templateUrl: "views/forecast.html",
        controller: "forecastController",
      })
      .otherwise({ redirectTo: "/" });
  },
]);
