angular.module("NarrowItDownApp").directive('displayDetail', function () {
    return{
        restrict : 'E',
        scope : {
            found : '=',
            callback : '&'
        },
        templateUrl : 'display.html',
    }
});