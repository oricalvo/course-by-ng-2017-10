class AppStore {
    constructor(contactService) {
        this.contacts = null;
        this.error = null;

        this.contactService = contactService;
    }

    loadAllContacts() {
        this.contactService.getAll().then(contacts => {
            this.contacts = contacts;
        }).catch(err => {
            this.error = err;
        });
    }
}

myApp.service("appStore", AppStore);
