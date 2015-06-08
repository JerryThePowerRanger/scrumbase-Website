// Namensraum und Abhängigkeiten des Moduls festlegen
var app = angular.module("scrumApp", ["ngRoute"]);

// Routing
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider
    .html5Mode(false)
    .hashPrefix("");

  $routeProvider
    .when("/intro", { templateUrl: "intro.html" })
    .when("/diary", { templateUrl: "diary.html" })
    .when("/terms", { templateUrl: "terms.html" })
    .when("/application", { templateUrl: "application.html" })
    .when("/templates", { templateUrl: "templates.html" })
    .when("/contact", { templateUrl: "contact.html" })
    .when("/home", { templateUrl: "home.html" })
    .otherwise({ templateUrl: "home.html" });
});