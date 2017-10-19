(function() {
    "use strict";

    function AppCtrl($scope) {
        $scope.view = "home";

        $scope.gotoLogin = function() {
            $scope.view = "login";
        }
    }

    angular.module("myApp").controller("AppCtrl", AppCtrl);
})();

