class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    dump() {
        console.log(this.x);
        console.log(this.y);
    }
}

class PointEx extends Point {
    z: number;

    constructor(x: number, y: number, z: number) {
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

