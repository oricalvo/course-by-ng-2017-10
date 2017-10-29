class AppComponent {
    constructor($http) {
        $http.get("data/contacts2.json").then(res => {
            console.log(res);

            this.contacts = res.data;
        }).catch(err => {
            this.error = err.statusText;
        });
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
})