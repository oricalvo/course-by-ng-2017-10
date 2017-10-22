class AppController {
    constructor($scope) {
        this._title = "Hello Angular";
        this.counter = 0;

        // $scope.$watch("$ctrl.title", (newValue, oldValue) => {
        //     console.log("CHANGED: " + oldValue + " --> " + newValue);
        // });

        // $scope.$watch("$ctrl.counter", (newValue, oldValue) => {
        //     console.log("CHANGED: " + oldValue + " --> " + newValue);
        //
        //     this.change();
        // });
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;

        this.counter++;
    }

    change() {
        this.title += "X";
    }

    stam() {
    }
}

myApp.controller("AppCtrl", AppController);


