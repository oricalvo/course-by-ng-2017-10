class DirectoryContentController {
    constructor() {
    }

    select(item) {
        this.onSelected({item: item});
        //appStore.select(item);
    }
}

myApp.component("appDirectoryContent", {
    controller: DirectoryContentController,
    templateUrl: "components/directoryContent/directoryContent.component.html",
    bindings: {
        dir: "<",
        onSelected: "&",
    }
});


