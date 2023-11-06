var app = angular.module("shopping",["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller : "loginController",
            templateUrl : "login/login.html"
        })
        .when('/signup', {
            controller : "signupController",
            templateUrl : "signup/signup.html"
        })
        .when('/home', {
            controller : "homeController",
            templateUrl : "home/home.html"
        })
        .when('/{{item.objectID}}', {
            controller : "productController",
            templateUrl : "product/product.html"
        })
        .when('/cart', {
            controller : "cartController",
            templateUrl : "cart/cart.html"
        })
        .when('/buy', {
            controller : "buyController",
            templateUrl : "buy/buy.html"
        })
        .when('/payment', {
            controller : "paymentController",
            templateUrl : "payment/payment.html"
        })
        .when('/success', {
            controller : "successController",
            templateUrl : "success/success.html"
        })
        .otherwise('/');
}])