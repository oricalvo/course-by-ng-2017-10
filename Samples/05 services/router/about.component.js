class AboutComponent {
    constructor($stateParams, appStore) {
        console.log("id", $stateParams.id);

        this.appStore = appStore;

        this.userName = "";
    }

    get counter() {
        return this.appStore.counter;
    }

    get state() {
        return this.appStore.editingRecord;
    }
}

myApp.component("appAbout", {
    controller: AboutComponent,
    template: `<h1>About</h1>
<div>{{$ctrl.counter}}</div>
<input ng-model="$ctrl.state.userName">
<div>Hello {{$ctrl.state.userName}}</div>`,
});
