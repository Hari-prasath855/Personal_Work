angular.module('shopping').controller('homeController', function($scope, $rootScope, $http, homeService) {

    $rootScope.cartItems;

    $scope.myValue = '';

    $scope.getProduct = async function () {
        const response = await $http.get('products.json');
        $rootScope.products = response.data.products;
        console.log($rootScope.products);
        $scope.$digest();
    }

    $scope.getUpdateProduct = function (value) {
        if(value===''){
            getProduct();
        }
        $rootScope.products = homeService.getUpdateProduct($rootScope.products,value);
        $scope.$digest();
        // console.log($rootScope.products);
    }
    
});