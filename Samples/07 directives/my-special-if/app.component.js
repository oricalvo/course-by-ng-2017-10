class AppComponent {
    constructor() {
        this.showButton = true;
    }

    run() {
        console.log("run");
    }

    toggle() {
        this.showButton = !this.showButton;
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});

myApp.controller("HomeCtrl", function($scope) {
    console.log("HomeCtrl created");

    $scope.$on("$destroy", function() {
        console.log("HomeCtrl.$destroy");
    });

    $scope.run = function() {
        console.log("123");
    }
});
