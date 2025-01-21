/* 
Activity 1: Implement a pure function for data transformation
Objective: Create a pure function in JavaScript that transforms an array of user objects.
Details:
- The function should take an array of user objects (each with properties like id, name, and age) and return a new array.
- In the new array, each object should have the user’s name in uppercase and a new property isAdult, which is true if the user is 18 or older.
- The original array must not be mutated.

Example input:
[
  { id: 1, name: 'Alice', age: 22 },
  { id: 2, name: 'Bob', age: 17 },
];
Expected output:
[
  { id: 1, name: 'ALICE', isAdult: true },
  { id: 2, name: 'BOB', isAdult: false },
];
*/
// const users = [
//   { id: 1, name: 'Alice', age: 22 },
//   { id: 2, name: 'Bob', age: 17 },
// ];
// function transformUserObjects(users) {
//   return users.map((user) => {
//     return {
//       id: user.id,
//       name: user.name.toUpperCase(),
//       isAdult: user.age >= 18,
//     };
//   });
// }
// console.log(transformUserObjects(users));

/*
Activity 2: Create a curried function for string manipulation
Objective: Write a curried function that performs a series of string manipulations.
Details:
- The function should curry multiple string operations, such as adding a prefix and suffix and making the string uppercase.
- Each operation should be a separate function that is curried into the main function.
- The final function should take a string and return the transformed string based on the curried operations.

Example usage:
const transformString = addPrefix('Hello, ')(addSuffix('!'))(toUpperCase());
console.log(transformString('world')); // Expected Output: "HELLO, WORLD!"

Practical example: Currying for data processing
const processUserData = curry((processFn, data) => processFn(data));

function aggregateData(data) {
  // Aggregation logic here
}

const users = fetchUsers(); // Assume this fetches user data
const processedUsers = processUserData(aggregateData, users);

Currying and partial application
Use currying and partial application: These techniques make your functions more versatile and reduce redundancy.

Example:
const add = (a) => (b) => a + b; // Curried add function
const addTen = add(10); // Partial application
console.log(addTen(5)); // Outputs: 15
*/
// const addPrefix = (prefix) => (str) => prefix + str;
// const addSuffix = (suffix) => (str) => str + suffix;
// const toUpperCase = () => (str) => str.toUpperCase();

// const transformString = addPrefix('Hello, ')(addSuffix('!'))(toUpperCase());
// console.log(transformString('world')); // Expected Output: "HELLO, WORLD!"

// const addPrefix = (prefix) => (string) => prefix + string;
// const addSuffix = (suffix) => (string) => string + suffix;
// const toUpperCase = () => (string) => string.toUpperCase();
// const transformString = addPrefix('Hello, ')(addSuffix('!'))(toUpperCase());
// console.log(transformString('world')); // Expected Output: "HELLO, WORLD!"

/*
Activity 3: Implement a recursive function for directory traversal
Objective: Create a recursive function to simulate directory traversal.
Details:
Assume you have a nested object structure representing a directory with files and subdirectories.
The function should recursively traverse this structure and print out the names of all files and directories.
You can structure the directory object as you like, but it should include multiple levels of nesting.
Example directory structure:
const directory = {
name: 'root',
  type: 'folder',
  children: [
    { name: 'file1.txt', type: 'file' },
    {
      name: 'subfolder',
      type: 'folder',
      children: [
        // more files or folders
      ],
    },
    // ... more files and folders
  ],
};
Expected behaviour: The function, when called with the directory object, should print the names of all files and folders within, indicating their nesting levels.
*/
// const directory = {
//   name: 'root',
//   type: 'folder',
//   children: [
//     { name: 'file1.txt', type: 'file' },
//     {
//       name: 'subfolder',
//       type: 'folder',
//       children: [
//         { name: 'file2.txt', type: 'file' },
//         {
//           name: 'subsubfolder',
//           type: 'folder',
//           children: [
//             { name: 'file3.txt', type: 'file' },
//           ],
//         },
//       ],
//     },
//   ],
// };
// function traverseDirectory(directory, level = 0) {
//   console.log(' '.repeat(level) + directory.name);
//   if (directory.children) {
//     directory.children.forEach((child) => {
//       traverseDirectory(child, level + 2);
//     });
//   }
// }
// traverseDirectory(directory);
