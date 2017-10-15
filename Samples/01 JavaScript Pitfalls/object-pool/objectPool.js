var objectPool = (function() {
    "use strict";

    var MAGIC_FIELD = "$$$$id$$$$";
    var map = {};
    var count = 0;
    var nextId = 1000;

    function add(obj) {
        var id = obj[MAGIC_FIELD];
        if(id) {
            if(map[id]) {
                return;
            }
        }
        else {
            id = obj[MAGIC_FIELD] = nextId++;
        }

        map[id] = obj;

        ++count;
    }

    function get() {
        for(var id in map) {
            var obj = map[id];

            delete map[id];
            --count;

            return obj;
        }

        return null;
    }

    function size() {
        return count;
    }

    return {
        add: add,
        get: get,
        size: size,
    }
})();
