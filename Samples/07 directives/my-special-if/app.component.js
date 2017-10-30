class AppComponent {
    constructor() {
        this.show = true;
    }

    toggle() {
        this.show = !this.show;
    }

    run() {
        console.log("run");
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
