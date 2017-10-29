class ContactComponent {
    constructor() {
        console.log("ContactCompnent.ctor");

    }

    $onInit() {
        console.log(this.contact);
    }

    $onChanges() {
        console.log("$onChanges");

        this.fullName = "XXX";
    }

    $onDestroy() {
        console.log("ContactCompnent.dtor");
    }
}

myApp.component("appContact", {
    controller: ContactComponent,
    templateUrl: "contact.component.html",
    bindings: {
        "contact": "<",
    }
});