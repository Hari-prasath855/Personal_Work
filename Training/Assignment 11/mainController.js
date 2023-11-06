app.controller('mainController',['$scope','$rootScope', '$location', function ($scope, $rootScope, $location) { 

    $rootScope.user=[];

    $rootScope.cartItems=[];

    $rootScope.goToPage = function(link) {
        $location.path(link);
    };

    $rootScope.updateId = function(id) {
        console.log(id);
        $rootScope.id = id;
    }

    
}])