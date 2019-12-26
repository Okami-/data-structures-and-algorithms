const Dictionary = require('./dictionary.js');

var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());