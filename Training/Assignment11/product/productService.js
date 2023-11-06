angular.module("shopping").service('productService', function () {
    this.getProduct = function (products, id) {
        var product = products.filter((value)=>{
            return value.objectID === id;
        });
        return product;
    },
    this.addToCart = function (list, product) {
        var flag = true;
        for(let i=0;i<list.length;i++){
            if(list[i].objectID===product.objectID){
                list[i].quantity +=1;
                flag = false;
            }
        }
        if(flag){
            list.push(product);
        }
        return list;
    }
});