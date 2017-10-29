class AppComponent {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }

    dump() {
        console.log(this.contacts);
    }

    clean() {
        this.contacts = [];
    }

    refresh() {
        this.contacts = [
            {id:1, name: "Udi"},
            {id:2, name: "Beni"},
        ];
    }

    changeName(contact) {
        contact.name = "YYY";
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});