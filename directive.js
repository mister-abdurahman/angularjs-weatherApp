weatherApp.directive("weatherReport", function () {
  return {
    restrict: "E",
    templateUrl: "directive/weatherReport.html",
    // replace: true, //probably not supported by current angularjs version
    scope: {
      weatherResult: "=",
      convertToStandard: "&",
      convertToCelsius: "&",
      dateFormat: "@",
      countrycode: "=",
    },
  };
});
