class ErrorComponent {
    constructor($http, appStore) {
        this.appStore = appStore;
    }

    get state() {
        return this.appStore.state;
    }

    close() {
        this.appStore.resetError();
    }
}

myApp.component("appError", {
    controller: ErrorComponent,
    templateUrl: "components/error.component.html",
})