var ori = {
    id: 1,
    name: "Ori",
};

var roni = {
    id: 2,
    name: "Roni",
};

objectPool.add(ori);
objectPool.add(roni);

console.log(objectPool.size()); // 2

objectPool.add(ori);

console.log(objectPool.size()); // 2

var res = objectPool.get(); // ori | roni
res = objectPool.get(); // ori | roni

console.log(objectPool.get()); // null

