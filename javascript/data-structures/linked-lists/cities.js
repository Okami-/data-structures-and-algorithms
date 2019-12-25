const LList = require('./linked-list.js');

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Russellville");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
