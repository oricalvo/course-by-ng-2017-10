class FileContentController {
    constructor() {
    }

    get file() {
        return appStore.selected;
    }
}

myApp.component("appFileContent", {
    controller: FileContentController,
    templateUrl: "components/fileContent/fileContent.component.html",
});


