class AppController {
    constructor($scope, $rootScope) {
        this.$rootScope = $rootScope;
        this.title = "Hello Angular";
    }

    reset() {
        this.$rootScope.$broadcast("reset");
    }
}

myApp.component("appRoot", {
    controller: AppController,
    templateUrl: "app.component.html",
});


