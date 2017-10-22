class AppController {
    constructor($scope, $rootScope) {
        this.$rootScope = $rootScope;
        this.title = "Hello Angular";
    }

    reset() {
        this.$rootScope.$broadcast("reset");
    }
}

myApp.controller("AppCtrl", AppController);


