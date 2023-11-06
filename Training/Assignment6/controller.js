angular.module("myFirstApp").controller("moduleController", function ($scope, moduleService) {
    $scope.foodList = "";

    $scope.check = function (item) {
        $scope.display = true;
        $scope.result = moduleService.tooMuchorNot(item);
    }
})