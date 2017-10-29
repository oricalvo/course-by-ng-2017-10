const myApp = angular.module("myApp", []);

myApp.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

myApp.controller("HomeCtrl", function($scope, $location) {
    $scope.change = function() {
        $location.path("123");
    }
});
