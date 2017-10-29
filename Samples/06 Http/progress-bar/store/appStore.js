class AppStore {
    constructor($q, appState, contactService, productService) {
        this.$q = $q;
        this.appState = appState;
        this.contactService = contactService;
        this.productService = productService;
    }

    get state() {
        return this.appState;
    }

    load() {
        return this.$q.all([
            this.contactService.load(),
            this.productService.load(),
        ]);
    }

    refreshContacts() {
        return this.contactService.load();
    }

    refreshProducts() {
        return this.productService.load();
    }

    resetError() {
        this.state.error = null;
    }
}

myApp.service("appStore", AppStore);