class AppController {
    constructor() {
    }

    get state() {
        return appStore;
    }

    onItemSelected(item) {
        appStore.select(item);
    }
}

myApp.component("appRoot", {
    controller: AppController,
    templateUrl: "components/app/app.component.html",
});


