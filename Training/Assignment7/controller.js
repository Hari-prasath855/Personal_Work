angular.module("shoppingList").controller("shoppingController", ['$scope', 'shoppingService', function ($scope, shoppingService) {
    $scope.buyList = [
        { quantity: 10, product: 'cookies' },
        { quantity: 11, product: 'cookies' },
        { quantity: 12, product: 'cookies' },
        { quantity: 13, product: 'cookies' },
        { quantity: 14, product: 'cookies' }
    ];

    $scope.alreadyBoughtList = [];

    $scope.product ;

    $scope.quantity;

    $scope.isBuyListEmpty = function () {
        return shoppingService.isBuyListEmpty($scope.buyList);
    }

    $scope.isBoughtListEmpty = function () {
        return shoppingService.isBuyListEmpty($scope.alreadyBoughtList);
    }

    $scope.addToBuy = function (product, quantity) {
        console.log(product+" "+quantity);
        if(product!==undefined && quantity!==undefined){
            shoppingService.addToBuy(product, quantity, $scope.buyList);
        }else{
            alert("Enter Valid input...")
        }
        $scope.product = '';
        $scope.quantity = '';
    }

    $scope.buy = function (index) {
        shoppingService.buy(index, $scope.buyList, $scope.alreadyBoughtList);
    }

}]);