angular.module('shopping').controller('signupController', function($scope, $rootScope,signupService, $timeout) {
    $scope.userDetail={
        name:'',
        email:'',
        password:''
    }
    

    $scope.addUser = function() {
        if(signupService.addUser($rootScope.user, $scope.userDetail)){
            $rootScope.user.push($scope.userDetail);
            $scope.alert = true;
            $timeout(function () {
                $rootScope.goToPage('/login');
            }, 1000);
        }else{
            $scope.emailExist = true;
        }
    }
});