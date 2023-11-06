app.controller('mainController',['$scope', '$location', function ($scope, $location) {
    $scope.goToPage = function(link) {
        $location.path(link);
    }
}])