const myApp = angular.module("myApp", []);

myApp.provider("contactService", function() {
    let allowCache;

    this.$get = function() {
        console.log("$get");

        return {
            getAll: function() {
            }
        };
    }

    this.setAllowCache = function(value) {
        allowCache = value;
    }
});

myApp.config(function(contactServiceProvider) {
    console.log(contactServiceProvider);

    contactServiceProvider.setAllowCache(true);
});

myApp.run(function() {
});

myApp.controller("HomeCtrl", function($scope, contactService) {
    console.log(contactService);

    $scope.change = function() {
    }
});
