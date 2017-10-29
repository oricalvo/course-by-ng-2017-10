class AppComponent {
    constructor() {
        this.counter = 0;
    }

    run() {
        console.log("run");

        ++this.counter;
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
