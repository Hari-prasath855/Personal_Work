angular.module('restaurant').controller('signUpController',['$scope', '$rootScope' ,'signUpService',  function($scope, $rootScope, signUpService) {
    $rootScope.user;

    $scope.isAvailable = async function (dish) {
        if (dish != '') {
            $scope.span = await signUpService.isAvailable(dish);
            $rootScope.user.dishname = $scope.span[1];
            $rootScope.user.description = $scope.span[2];
            $rootScope.user.image = $scope.span[3];
            console.log($scope.span,$rootScope.user);
        }
        $scope.$digest();
    };
    

    $scope.submit = async function () {
        console.log(signUpService.isAvailable($scope.user.dish));
        var check = await signUpService.isAvailable($scope.user.dish);
        if (check[0]===0) {
            $rootScope.user = { firstname : '', lastname : '', email : '',
            phone : '', dish : '', dishname: '', description: '', image:'' }
            $scope.message = 'No such menu number exists';
            document.getElementById("myForm").reset();
            
        } else {
            $scope.message = 'Your information has been saved \n Check out your updated info!';
        }
        $scope.$digest();
    }
}]);