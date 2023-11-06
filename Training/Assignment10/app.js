var app = angular.module('restaurant',["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/info', {
            controller : "infoController",
            templateUrl : "info/info.html"
        })
        .when('/signUp', {
            controller : "signUpController",
            templateUrl : "signup/signup.html"
        })
        .otherwise('/');
}])