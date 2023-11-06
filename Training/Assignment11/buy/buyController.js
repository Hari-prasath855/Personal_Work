angular.module('shopping').controller('buyController', function($rootScope,$scope,buyService,$timeout) {
    $rootScope.cartItems;

    $scope.total = function () {
        $scope.amount = buyService.total($rootScope.cartItems);
    }

    $scope.clearCart = function () {
        
        $timeout(function () {
            $rootScope.goToPage('/payment');
            $rootScope.cartItems = [];
        }, 1000);
    }
});