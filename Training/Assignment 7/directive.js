angular.module("shoppingList").directive('displayDetails', function () {
    return{
        restrict : 'E',
        scope : {
            items : '=',
            callback : '&'
        },
        templateUrl : 'display.html',
    }
});