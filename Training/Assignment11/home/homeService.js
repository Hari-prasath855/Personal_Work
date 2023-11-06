angular.module("shopping").service('homeService', function () {
    this.getUpdateProduct = function (lists, search) {
        var foundList = lists.filter((list) => {
            var myResult = list.name.split(" ");
            for (let i = 0; i < myResult.length; i++) {
                var word = myResult[i].toLowerCase();
                search = search.toLowerCase(); 
                var result = word.match(search);
                if (result)
                    return list;
            }
        })
        return foundList;
    }
});