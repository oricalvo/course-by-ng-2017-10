class AppComponent {
    constructor($q) {
        this.status = "Running ...";

        delay(2500).then(()=> {
            this.status = "DONE";
        });

        // calc(8).then(res => {
        //     this.status = res;
        // }).catch(err => {
        //     this.status = err.message;
        // });

        function delay(interval) {
            const deferred = $q.defer();

            setTimeout(function() {
                deferred.resolve();
            }, interval);

            return deferred.promise;
        }

        function calc(num) {
            const deferred = $q.defer();

            setTimeout(function() {
                //deferred.resolve(num * 2);

                deferred.reject(new Error("Ooops"));
            }, 1500);

            return deferred.promise;
        }
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
})
