var ObjectPool = (function() {
    "use strict";

    var nextId = 1000;
    var MAGIC_FIELD = "$$$$id$$$$";

    function ObjectPool() {
        this.map = {};
        this.count = 0;
    }

    ObjectPool.prototype.add = function add(obj) {
        var id = obj[MAGIC_FIELD];
        if (id) {
            if (this.map[id]) {
                return;
            }
        }
        else {
            id = obj[MAGIC_FIELD] = nextId++;
        }

        this.map[id] = obj;

        ++this.count;
    }

    ObjectPool.prototype.get = function get() {
        for (var id in this.map) {
            var obj = this.map[id];

            delete this.map[id];
            --this.count;

            return obj;
        }

        return null;
    }

    ObjectPool.prototype.size = function size() {
        return this.count;
    }

    return ObjectPool;
})();

