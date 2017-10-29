function installMiddleware(appStore) {
    const proto = appStore.constructor.prototype;
    for (const key of Object.getOwnPropertyNames(proto)) {
        const method = proto[key];

        if (key == "constructor" || key == "state" || key[0] == "_") {
            continue;
        }

        proto[key] = function () {
            const res = method.apply(this, arguments);

            if (res && res.then) {
                appStore.state.isLoading = true;

                res.then(() => {
                    appStore.state.isLoading = false;
                }).catch(err => {
                    appStore.state.isLoading = false;
                    appStore.state.error = err;
                });
            }

            return res;
        }
    }
}
