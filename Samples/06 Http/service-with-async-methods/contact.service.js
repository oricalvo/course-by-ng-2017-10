class ContactService {
    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get("data/contacts2.json")
            .then(res => res.data)
            .catch(err => {
                throw new Error(err.statusText);
            });
    }
}

myApp.service("contactService", ContactService);
