angular.module("shoppingList").service("shoppingService", function () {

    this.isBuyListEmpty = function (list) {
        return (list.length > 0) ? false : true;
    },

    this.addToBuy = function (product, quantity, buyList) {
        var item = {'quantity': quantity, 'product': product};
        buyList.push(item);
        console.log(buyList);
    }

    this.buy = function (index, buyList, alreadyBoughtList) {
        var itemBuyed = buyList.splice(index, 1);
        alreadyBoughtList.push(itemBuyed);
    }

})