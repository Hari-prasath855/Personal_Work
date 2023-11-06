angular.module('shopping').service('signupService',function(){
    this.addUser = function (list, user) {
        var found = list.filter((value)=>{
            return value.email === user.email;
        })
        return found.length>0 ? false : true;
    }
})