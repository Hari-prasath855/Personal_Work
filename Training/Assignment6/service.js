angular.module("myFirstApp").service("moduleService", function () {
    this.tooMuchorNot = function (item) {
        if (item === '' || item === ' ') {
            return [false, "Please enter data first"];
        }
        let food = item.split(",");
        if (food.length <= 3) {
            return [true, "Enjoy!"];
        } else {
            return [true, "Too much!"]
        }
    };
});