class ProductService {
    constructor($http, $q, appState) {
        this.firstTime = true;
        this.$http = $http;
        this.$q = $q;
        this.appState = appState;
    }

    load() {
        if(!this.firstTime) {
            return this.$q.reject(new Error("Second time"));
        }

        this.firstTime = false;

        return this._getAll().then(products => {
            this.appState.products = products;
        });
    }

    _getAll() {
        return this.$http.get("data/products.json")
            .then(res => res.data)
            .catch(err => {
                throw new Error(err.statusText);
            });
    }
}

myApp.service("productService", ProductService);
