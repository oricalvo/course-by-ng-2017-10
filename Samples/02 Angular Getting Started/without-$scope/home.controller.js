(function() {
    "use strict";

    class HomeCtrl {
        constructor() {
            this.counter = 0;
        }

        inc() {
            ++this.counter;
        }

        dec() {
            --this.counter;
        }
    }

    // function HomeCtrl() {
    //     this.counter = 0;
    // }
    //
    // HomeCtrl.prototype.inc = function() {
    //     ++this.counter;
    // }
    //
    // HomeCtrl.prototype.dec = function() {
    //     --this.counter;
    // }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();

