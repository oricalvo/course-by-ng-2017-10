function Contact(name, email) {
    function dump() {
        console.log(name + ", " + email);
    }

    function reset() {
        email = "";
    }

    return {
        dump: dump,
        reset: reset,
    };
}

var ori = Contact("Ori", "ori@gmail.com");
var roni = Contact("Roni", "roni@gmail.com");

console.log(ori.reset == roni.reset);
console.log(ori.dump == roni.dump);
