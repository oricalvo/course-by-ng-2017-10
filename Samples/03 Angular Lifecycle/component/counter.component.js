class CounterController {
    constructor() {
        this.counter = 0;
    }

    inc() {
        this.counter++;
    }

    dec() {
        this.counter--;
    }
}

myApp.component("appCounter", {
    controller: CounterController,
    templateUrl: "counter.component.html",
});


