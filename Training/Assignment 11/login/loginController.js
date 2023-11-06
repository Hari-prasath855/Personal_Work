angular.module('shopping').controller('loginController', function($scope,loginService,$rootScope,$timeout) {
    $scope.email = '';
    $scope.password = '';

    console.log($rootScope.user);

    $scope.login = function(email,password) {
        $scope.noAcc = false;
        if(loginService.login($rootScope.user,email,password)){
            $scope.alert = true;
            $timeout(function () {
                $rootScope.goToPage('/home');
            }, 1000);
        }else{
            $scope.noAcc = true;
        }
    }
});