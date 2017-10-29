class LoadingComponent {
    constructor(appStore) {
        this.appStore = appStore;
    }

    get state() {
        return this.appStore.state;
    }
}

myApp.component("appLoading", {
    controller: LoadingComponent,
    templateUrl: "components/loading.component.html",
})