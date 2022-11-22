"use strict";

// * Sets
// ? A Set is a collection of unique values.
// ? Each value can only occur once in a Set.
// ? A Set can hold any value of any data type.

const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto"]);
console.log(orderSet);

const nameSpell = new Set("Frank");
console.log(nameSpell);

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

orderSet.add("Bread");
orderSet.add("Bread");
orderSet.delete("Bread");

// orderSet.clear();
console.log(orderSet);
