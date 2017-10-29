class QHelpers {
    constructor($q) {
        this.$q = $q;
    }

    delay(ms) {
        const defer = this.$q.defer();

        setTimeout(function() {
            defer.resolve();
        }, ms);

        return defer.promise;
    }
}

myApp.service("qHelpers", QHelpers);
