const Queue = require('./queue.js');
function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function dequeue() {
    var entry = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < this.dataStore[entry].code) {
            entry = i;
        }
    }
    return this.dataStore.splice(entry,1);
}

function changeString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
    }
    return retStr;
}

var ed = new Queue();

var p = new Patient("Smith",5);
ed.enqueue(p);

p = new Patient("Jones",4);
ed.enqueue(p);

p = new Patient("Fehrenbach",6);
ed.enqueue(p);

p = new Patient("Brown", 1);
ed.enqueue(p);

p = new Patient("Ingram",1);
ed.enqueue(p);

console.log(ed.changeString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen: ")
console.log(ed.changeString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen: ");
console.log(ed.changeString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen: ");
console.log(ed.changeString());
