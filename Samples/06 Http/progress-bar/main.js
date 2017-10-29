myApp.run(function(appStore) {
    installMiddleware(appStore);

    appStore.load();
});

angular.bootstrap(document.querySelector("html"), [myApp.name]);