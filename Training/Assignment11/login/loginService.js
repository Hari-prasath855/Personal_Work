angular.module('shopping').service('loginService',function(){
    this.login = function (list, email, password) {
        var found = list.filter((value)=>{
            return value.email === email && value.password === password;
        })
        return found.length>0 ? true : false;
    }
})