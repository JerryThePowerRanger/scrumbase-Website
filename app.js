// Namensraum und Abhängigkeiten des Moduls festlegen
var app = angular.module("scrumApp", ["ngRoute"]);

// Routing
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider
    .html5Mode(false)
    .hashPrefix("");

  $routeProvider
    .when("/intro", { templateUrl: "intro.html" })
    .when("/terms", { templateUrl: "terms.html" })
    .when("/application", { templateUrl: "application.html" })
    .when("/home", { templateUrl: "home.html" })
    .otherwise({ templateUrl: "home.html" });
});