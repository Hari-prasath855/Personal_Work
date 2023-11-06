angular.module('restaurant').service('signUpService',function($http){
    this.isAvailable = async function (dish) {
        try {
            const response = await $http.get('menu.json');
            const menu = response.data;
            const item = menu.filter((value) => {
                return value.short_name === dish;
            });
            return item.length > 0 ? [1,item[0].name,item[0].description,item[0].image] : [0];
        } catch (error) {
            console.error(error);
        }
    }
})