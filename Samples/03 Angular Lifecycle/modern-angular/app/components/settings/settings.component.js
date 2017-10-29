import {myApp} from "../../app.module";

class SettingsComponent {
    constructor(appStore) {
        this.appStore = appStore;
    }

    get state() {
        return this.appStore;
    }

    reset() {
        this.appStore.reset();
    }
}

myApp.component("appSettings", {
    controller: SettingsComponent,
    templateUrl: "app/components/settings/settings.component.html",
    bindings: {
    }
});
