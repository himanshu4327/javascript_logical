// In JavaScript, a Set is a built-in data structure that represents a collection of unique values. 
// It can store various types of values such as numbers, strings, objects, or even a combination of these, and ensures that each value appears only once within the set. This uniqueness property makes it useful for scenarios where you need to keep a distinct list of values.

//In JavaScript, the return type of a Set is always object. This is because, like arrays and other built-in objects, a Set is a reference type, and when you check its type using the typeof operator, it will return "object".

//This checks whether mySet is an instance of the Set constructor, which is a more precise way to determine if a variable is a Set.



// Here's how you can create and use a Set in JavaScript:


// Creating a Set
const mySet = new Set([1, 2, 3, 4, 4]);

// Adding an element
mySet.add(5);

// Removing an element
mySet.delete(3);

// Checking for existence
const exists = mySet.has(2); // true
const doesNotExist = mySet.has(6); // false

// Iterating over a Set
mySet.forEach((value) => {
  console.log(value);
});

for (const item of mySet) {
  console.log(item);
}

const setArray = Array.from(mySet);

// Getting the size of a Set
const setSize = mySet.size;

// Clearing a Set
mySet.clear();


// In JavaScript, the comma operator , allows you to evaluate multiple expressions and return the value of the last expression. It's typically used in situations where you need to perform multiple operations in a single statement. Here's how the comma operator works with an example:

let a = 1, b = 2;

let result = (a++, b++, a + b);

console.log(result); // Outputs: 5

x= 10;
y= 40;
x= (y+20,y)
console.log(x)

// let x= 20;let y=30;
// [x,y] = [y,x]
// console.log(x,y)