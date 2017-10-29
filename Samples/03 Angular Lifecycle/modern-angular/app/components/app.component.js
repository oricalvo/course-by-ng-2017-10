import {myApp} from "../app.module";

class AppComponent {
    constructor(appStore) {
        this.appStore = appStore;
    }

    get format() {
        return this.appStore.format;
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app/components/app.component.html",
});
