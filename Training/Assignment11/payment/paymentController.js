angular.module('shopping').controller('paymentController', function($scope,$timeout,$rootScope) {
    $scope.checkbtn1 = false;
    $scope.cardNo;
    $scope.month;
    $scope.year;
    $scope.checkbtn2 = false;

    $scope.goTo = function(link) {
        $timeout(function () {
            $rootScope.goToPage('/success');
        }, 1000);

    }
});