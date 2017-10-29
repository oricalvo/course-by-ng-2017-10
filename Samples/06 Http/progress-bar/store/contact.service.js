class ContactService {
    constructor($http, appState, qHelpers) {
        this.$http = $http;
        this.appState = appState;
        this.timestamp = 0;
        this.qHelpers = qHelpers;
    }

    load() {
        return this.qHelpers.delay(1500).then(()=> {
            return this._getAll().then(contacts => {
                this.appState.contacts = contacts;
            });
        });
    }

    _getAll() {
        return this.$http.get("data/contacts.json")
            .then(res => {
                this.timestamp++;

                for(const c of res.data) {
                    c.name += this.timestamp;
                }

                return res.data;
            })
            .catch(err => {
                throw new Error(err.statusText);
            });
    }
}

myApp.service("contactService", ContactService);
