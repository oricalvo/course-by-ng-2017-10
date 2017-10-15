var Contact = (function() {
    "use strict";

    function Contact(name, email) {
        this.name = name;
        this.email = email;
    }

    Contact.prototype.dump = function() {
        console.log(this.name + ", " + this.email);
    }

    return Contact;
})();
