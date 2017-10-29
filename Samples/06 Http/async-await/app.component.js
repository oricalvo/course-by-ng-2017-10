class AppComponent {
    constructor($q) {
        const me = this;

        console.log("BEFORE");
        run();
        console.log("AFTER");

        async function run() {
            me.status = "Running ...";
            await delay(2500);
            me.status = "DONE";

            console.log("After DONE");
        }

        function delay(interval) {
            const deferred = $q.defer();

            setTimeout(function() {
                deferred.resolve();
            }, interval);

            return deferred.promise;
        }
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
})
