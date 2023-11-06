angular.module("shopping").service('buyService', function () {
    this.total = function (list){
        var totalAmount = 0;
        for(let i=0;i<list.length;i++){
            totalAmount += list[i].quantity * list[i].salePrice;
        }
        console.log(totalAmount);
        return totalAmount;
    }    
});