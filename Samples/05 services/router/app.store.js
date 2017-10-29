myApp.factory("appStore", function() {
    const appStore = {
        counter: 0,

        editingRecord: {
            userName: "XXX",
        },

        inc: function() {
            ++this.counter;
        }
    };

    return appStore;
});
