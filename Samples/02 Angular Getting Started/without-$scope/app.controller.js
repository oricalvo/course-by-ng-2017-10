(function() {
    "use strict";

    class AppCtrl {
        constructor() {
            this.title = "Hello Modern AngularJS";
        }
    }

    angular.module("myApp").controller("AppCtrl", AppCtrl);
})();

