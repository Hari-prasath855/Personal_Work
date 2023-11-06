app.controller('mainController',['$scope', '$location','$rootScope', function ($scope, $location, $rootScope) {

    $rootScope.user = {
        firstname : '',
        lastname : '',
        email : '',
        phone : '',
        dish : '',
        dishname: '',
        description: '',
        image:''
    }
     
    $scope.goToPage = function(link) {
        $location.path(link);
    }
}])