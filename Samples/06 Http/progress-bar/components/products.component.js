class ProductsComponent {
    constructor(appStore) {
        this.appStore = appStore;
    }

    get state() {
        return this.appStore.state;
    }

    refresh() {
        this.appStore.refreshProducts();
    }
}

myApp.component("appProducts", {
    controller: ProductsComponent,
    templateUrl: "components/products.component.html",
})