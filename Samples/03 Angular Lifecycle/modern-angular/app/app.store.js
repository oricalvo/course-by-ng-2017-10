import {myApp} from "./app.module";

function appStoreFactory() {
    const appStore = {
        format: "HH:mm",

        reset: function() {
            this.format = "HH:mm:ss";
        }
    };

    return appStore;
}

myApp.factory("appStore", appStoreFactory);
