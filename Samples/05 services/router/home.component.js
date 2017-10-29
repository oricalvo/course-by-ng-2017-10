class HomeComponent {
    constructor($state, appStore) {
        this.$state = $state;

        this.appStore = appStore;
    }

    save() {
        this.$state.go("about",{id:123});
    }

    inc() {
        this.appStore.inc();
    }
}

myApp.component("appHome", {
    controller: HomeComponent,
    template: `<h1>Home</h1>
<button ng-click="$ctrl.save()">Save</button>
<button ng-click="$ctrl.inc()">Inc</button>`,
});
