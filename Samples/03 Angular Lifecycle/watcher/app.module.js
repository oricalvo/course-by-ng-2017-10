var myApp = angular.module("myApp", []);

myApp.run(function($rootScope) {
    console.log("run");

    var original = $rootScope.constructor.prototype.$apply;
    var applyCount = 0;

    $rootScope.constructor.prototype.$apply = function() {
        iterationCount = 0;

        var before = performance.now();

        var retVal = original.apply(this, arguments);

        var after = performance.now();

        console.log("Dirty checking (" + (++applyCount) + ") : " + (after-before));

        return retVal;
    }

    let iterationCount = 0;
    $rootScope.$watch(function() {
        console.log("Iteration: " + (++iterationCount));
    });
});
