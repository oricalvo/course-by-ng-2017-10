var ori = {
    id: 1,
    name: "Ori",
};

var roni = {
    id: 2,
    name: "Roni",
};

var pool1 = new ObjectPool();
var pool2 = new ObjectPool();

pool1.add(ori);
pool2.add(roni);

console.log(ori);
console.log(roni);
