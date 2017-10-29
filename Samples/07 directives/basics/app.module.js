const myApp = angular.module("myApp", []);

myApp.directive("button", function() {
    return {
        restrict: "E",
        compile: function(element) {
            console.log("compile", element);

            if(!element.hasClass("no-btn")) {
                element.addClass("btn");
            }
        }
    };
});

