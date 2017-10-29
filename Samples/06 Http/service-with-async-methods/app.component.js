class AppComponent {
    constructor($http, appStore) {
        console.log("Before");

        this.appStore = appStore;

        this.appStore.loadAllContacts();

        console.log("After");
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
})