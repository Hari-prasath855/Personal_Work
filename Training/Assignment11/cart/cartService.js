angular.module("shopping").service('cartService', function () {
    this.removeFromCart = function (list, id) {
        var newList = list.filter((value)=>{
            return value.objectID != id;
        })
        console.log(newList);
        return newList;
    },
    this.incrementQuantity = function (list, id) {
        for(let i=0;i<list.length;i++){
            if(list[i].objectID === id){
                list[i].quantity +=1;
            }
        }
        return list;
    },
    this.decrementQuantity = function (list, id) {
        for(let i=0;i<list.length;i++){
            if(list[i].objectID===id && list[i].quantity>0){
                list[i].quantity -=1;
            }
        }
        return list;
    }    
});