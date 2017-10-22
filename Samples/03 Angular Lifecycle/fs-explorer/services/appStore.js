class AppStore {
    constructor() {
        const root = {
            name: "~",
            items: [
                {
                    name: "Program Files",
                    items: [
                        {
                            name: "Office",
                            items: [],
                            type: "dir",
                        },
                        {
                            name: "WebStorm",
                            items: [],
                            type: "dir",
                        },
                    ],
                    type: "dir",
                },
                {
                    name: "Windows",
                    items: [],
                    type: "dir",
                },
                {
                    name: "passwords.txt",
                    type: "file",
                    content: createContent("Passwords"),
                },
                {
                    name: "config.json",
                    type: "file",
                    content: createContent("Configuration"),
                },
            ]
        };

        this.root = root;
        this.directory = root;
        this.selected = null;
    }

    select(item) {
        this.selected = item;
    }
}

const appStore = new AppStore();

function createContent(token) {
    const arr = [];
    for(let i=0; i<1000; i++) {
        arr.push(token);
    }

    return arr.join(" ");
}