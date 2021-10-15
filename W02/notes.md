Week 2 notes:
What is block scope?
Block scope means that the declared variable only exists within that block. 
Var is no longer widely used.
Variables only being available for the block it is within is called “Local Scope”
Naming conventions are case sensitive
Javascript will automatically add semicolons but this can cause issues so do it yourself
camelCase is used when dealing with milti name naming conventions
You make changes to primitive variables directly
Changes to non-primitive variables is done by reference
You can create string objects?
new String(“hello”) =object not a primitive data type.

In order to use apostrophes in strings the string must be in double quotes
You can also use a backslash before the apostrophe or for a tab or new line
Built in methods and properties
Only objects have properties and methods
Unless you use a wrapper on a primitive data type
To access these properties or methods use dot notation.
Some of theses include: .toUpperCase, toLowerCase, charAt, indexOf, lastIndexOf, includes, startsWith, endsWith, and so on.

What is a Template  Literal?
These are strings that use a backtick (`) to delineate the string.
You can use both types of quotes in the string
They allow interpolation of JS code (you can put variables in ${ }

Symbols are a new primitive type, they are used to create unique values
Numbers also have a constructor function
If a number starters with 0x it is probably a hexadecimal number
Exponential Notation
1e6 == 1 * 10 to the power of 6
2E3 == 2 * 10 to the power of 3

You can also use Number methods
You can also use all arithmetic variables
NaN this is an error for “Not a Number”
Number.isFinite() will return true  if it is not a NaN or infinity
What is “Type Coercion”?
When JS tries to change the data type to work with an operand but this can cause errors.

JS is a weakly typed language so be specific when defining variables. 
Number() will convert strings to numbers
String() converts numbers to strings/ so does .toString()
You can also parse strings into numbers
Empty strings and zeros can be considered falsy.
Dont use ^ to notate bitwise exponents use **
What is the difference between soft and hard equality?
Soft equality (==) this does not take into account the data type
Hard equality (===) test for equality and data types
Funny thing (NaN === NaN) will return false??








You can create an array by const myArray = [ ]; or const myArray = new Array();
To add a value to an array myArray[0] = bob; or you can add multiple values when initializing the array.
To remove a specific value from the array delete myArray[5];
Deconstructing Arrays?
You can take values from the array and present them as individual values. 

Array properties and methods
.pop(), .shift(), .push(), .length, .splice(), .sort() and so on.

You can merge arrays using concat();
You can use .join() to turn your array into a string separated by commas or other symbols
You can find the first occurrence of a value in an array if you use indexOf();
You can also use .includes() but this will only return a boolean if it exists.
Multidimensional Arrays = array of arrays
Sets = list that only contains unique values. 
Converting sets to arrays
Const myArray = [...mySet];

Memory leaks = program retains values that can no longer be accessed by memory. 
Maps store data in key, value pairs. 
You can store objects in maps
To create a map const romanNumerals = new Map();

Ternary operators (condition ?)
n%2 === 0 ? console.log(‘even number’) : console.log(‘odd number’);

Use nested loops to sort through nested arrays and maps
To loop through maps you use the .keys() or .values() methods depending on what you are trying to do.
Create a function
Function hello(){ console.log(“hello”); }
const goodbye = function(){
   console.log('Goodbye World!');
};

You can declare a function using a constructor(not recommended)
Invoking a function functionName(); 
Keep your code DRY (dont repeat yourself)
Must use the parentheses after function name to invoke it
Rounding errors can occur from computer using base 2 in the background.
Arrow functions?
const square = x => x*x;
Square is the name of the function, x is parameter and body comes after arrow.
ex) const hello = () => alert('Hello World!');

You can invoke a function before it has been defined with Function Hoisting
When you use the var keyword to declare variables they to are hoisted to the top of the current scope.
You can use functions as parameters for other functions.
Callbacks?
This is a function that is passes as an argument to another function
forEach() can loop through arrays and invoice callback functions using each value as an argument
.map() can also iterate through an array.(often used for database data)
reduce() iterates through an array and combines the values.
Filter() returns a new array that contains the original value that came back true once passed through callback.
