
function doSomething(obj) {
    obj.xxx = 123;
}

function main() {
    var obj = {
        xxx: 456,
    };

    doSomething(obj);
}

