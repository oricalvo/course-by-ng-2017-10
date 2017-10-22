(function() {
    "use strict";


    class HomeCtrl {
        constructor($scope, $interval, x) {
            console.log($scope);

            this.$scope = $scope;
            this.$interval = $interval;

            this.counter = 0;

            this.contacts = [
                {id:1, name: "Ori"},
                {id:2, name: "Roni"},
                {id:3, name: "Udi"},
            ];
        }

        dump() {
            console.log(document.querySelector("h1").innerText);
        }

        inc() {
            ++this.counter;

            console.log(document.querySelector("h1").innerText);
            // this.$interval(()=> {
            //     console.log(++this.counter);
            //
            // }, 1500);

            //this.$scope.$apply();
        }

        change() {
            this.hasTitle = !this.hasTitle;
        }

        remove(contact, index) {
            if(confirm("Delete contact " + contact.name + "?")) {
                this.contacts.splice(index, 1);
            }
        }
    }

    //HomeCtrl.$inject = ["$scope", "$interval", "$rootScope"];

    HomeCtrl = [
        "$scope",
        "$interval",
        "$rootScope",
        HomeCtrl
    ];

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
