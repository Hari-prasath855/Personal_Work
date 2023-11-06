app.controller("NarrowItDownController", ['$scope', 'MenuSearchService','$http', function ($scope, MenuSearchService, $http) {
    $scope.search = "";
    $scope.foundList=[];

    $scope.getMatchedMenuItems = function (search) {

        $http.get('file.json').then(function(response) {
             $scope.data = response.data;
            if (search != '')
                $scope.foundList = MenuSearchService.getMatchedMenuItems($scope.data, search);
         }); 
    }

    $scope.remove = function(index) {
        MenuSearchService.remove($scope.foundList, index);
    }

    $scope.isEmpty = function(){
        return MenuSearchService.isEmpty($scope.foundList);
    }
}]);