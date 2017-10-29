class ErrorComponent {
    constructor($http, appStore) {
        this.appStore = appStore;
    }
}

myApp.component("appError", {
    controller: ErrorComponent,
    templateUrl: "error.component.html",
})