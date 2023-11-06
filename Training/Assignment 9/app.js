var app = angular.module('restaurant',["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller : "homeController",
            templateUrl : "home/home.html"
        })
        .when('/categories', {
            controller : "categoriesController",
            templateUrl : "categories/categories.html"
        })
        .when('/categories/starters', {
            controller : 'startersController',
            templateUrl : "items/starters/starters.html"
        })
        .when('/categories/breakfast', {
            controller : "breakfastController",
            templateUrl : "items/breakfast/breakfast.html"
        })
        .when('/categories/mainmenu', {
            controller : 'mainmenuController',
            templateUrl : "items/mainmenu/mainmenu.html"
        })
        .when('/categories/dessert', {
            controller : 'dessertController',
            templateUrl : "items/dessert/dessert.html"
        })
        .otherwise('/');
}])