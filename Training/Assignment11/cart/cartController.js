angular.module("shopping").controller('cartController', function ($rootScope, $scope, cartService) {
    $rootScope.cartItems;

    $scope.removeFromCart = function (id) {
        $rootScope.cartItems = cartService.removeFromCart($rootScope.cartItems,id);
        $scope.$digest();
    }

    $scope.incrementQuantity = function (id) {
        $rootScope.cartItems = cartService.incrementQuantity($rootScope.cartItems,id);
        $scope.$digest();
    }

    $scope.decrementQuantity = function (id) {
        $rootScope.cartItems = cartService.decrementQuantity($rootScope.cartItems,id);
        $scope.$digest();
    }    
});