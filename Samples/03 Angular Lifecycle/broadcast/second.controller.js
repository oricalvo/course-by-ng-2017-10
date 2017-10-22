class SecondController {
    constructor($scope) {
        this.counter = 0;

        $scope.$on("reset", () => {
            this.counter = 0;
        });
    }


    inc() {
        ++this.counter;
    }
}

myApp.controller("SecondCtrl", SecondController);


