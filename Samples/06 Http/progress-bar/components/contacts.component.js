class ContactsComponent {
    constructor(appStore) {
        this.appStore = appStore;
    }

    get state() {
        return this.appStore.state;
    }

    refresh() {
        this.appStore.refreshContacts();
    }
}

myApp.component("appContacts", {
    controller: ContactsComponent,
    templateUrl: "components/contacts.component.html",
})