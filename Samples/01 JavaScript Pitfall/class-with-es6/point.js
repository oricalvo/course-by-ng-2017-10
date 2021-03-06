class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    dump() {
        console.log(this.x);
        console.log(this.y);
    }
}

class PointEx extends Point {
    constructor(x, y, z) {
        super(x, y);

        this.z = z;
    }

    dump() {
        super.dump();

        console.log(this.z);
    }
}

var pt = new PointEx(5, 10, 20);
pt.dump();

