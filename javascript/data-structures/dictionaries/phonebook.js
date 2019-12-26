const Dictionary = require('./dictionary.js');

var pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());
