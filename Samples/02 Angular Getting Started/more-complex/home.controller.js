(function() {
    "use strict";

    function HomeCtrl($scope) {
        $scope.counter = 0;
        $scope.name = "";

        $scope.inc = function() {
            $scope.counter++;
        }

        $scope.dec = function() {
            $scope.counter--;
        }

        $scope.sayHello = function() {
            alert("Hello " + $scope.name);
        }

        $scope.changeView = function() {
            $scope.view = "xxx";
        }
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();

