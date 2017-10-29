const myApp = angular.module("myApp", []);

myApp.directive("mySpecialIf", function($parse, $compile) {
    return {
        restrict: "A",
        terminal: true,
        compile: function(element, attrs) {
            console.log("Extracting template from DOM");
            element.removeAttr("my-special-if");
            const template = element[0].outerHTML;
            const linkFn = $compile(template);

            console.log("Cleaning the DOM");
            const mark = $("<!-- mySpecialIf -->");
            element.before(mark);
            element.remove();

            const expr = attrs["mySpecialIf"];
            const exprFn = $parse(expr);

            return function link(scope, element, attrs) {
                let templateElement = null;
                let childScope = null;

                scope.$watch(exprFn, function(newValue) {
                    if(newValue) {
                        console.log("Restoring the DOM");

                        childScope = scope.$new();
                        linkFn(childScope, function(clone) {
                            console.log("clone", clone[0].outerHTML);
                            templateElement = clone;
                            mark.after(clone);
                        });
                    }
                    else {
                        if(templateElement) {
                            childScope.$destroy();

                            templateElement.remove();
                            templateElement = null;

                        }
                    }
                });
            }
        }
    }
});
