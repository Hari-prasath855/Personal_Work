app.service("MenuSearchService", function () {
    this.getMatchedMenuItems = function (lists, search) {
        var foundList = lists.filter((list) => {
            var myResult = list.description.split(" ");
            for (let i = 0; i < myResult.length; i++) {
                var result = myResult[i].match(search);
                if (result)
                    return list;
            }
        })
        return foundList;
    },
    this.remove = function(list,index){
        list.splice(index, 1)
    },
    this.isEmpty = function(list) {
        return (list.length === 0) ? true : false;
    }
});