angular.module('shopping').controller('productController', function($rootScope,productService,$scope) {
    
    $scope.getProduct = async function () {
        $scope.product = productService.getProduct($rootScope.products, $rootScope.id);
        $scope.$digest();
    }

    $scope.addToCart = function(product) {
        document.getElementById('btn').innerHTML = "Added";
        $rootScope.cartItems = productService.addToCart($rootScope.cartItems,product);
        console.log($rootScope.cartItems);
    }
   
});