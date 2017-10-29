const myApp = angular.module("myApp", []);

myApp.directive("mySpecialClick", function($parse) {
    return {
        restrict: "A",
        compile: function(element, attrs) {
            console.log("compile");

            const expr = attrs["mySpecialClick"];
            const exprFn = $parse(expr);

            return function link(scope, element, attrs) {
                console.log("link");

                element.on("click", function() {
                    exprFn(scope);

                    scope.$apply();
                });
            }
        }
    }
});
