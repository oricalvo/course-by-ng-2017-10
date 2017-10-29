const originalSetTimeout = window.setTimeout;

window.setTimeout = function() {
    console.log("XXX");

    const p = originalSetTimeout.apply(this, arguments);

    return p;
}