Week 03 Notes 
	Objects
Methods: a function that is a property of an object.
For a method to access data inside of the object you use ‘this.’
‘This.’ is unbound and does not matter where method is declared
The greater flexibility of ‘this’ also give rise to more mistakes
Arrow functions don’t have their ‘own’ this.
When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
Functions and arrays are built in objects
Objects: self contained set of values and functions
If property value is a function = method
Object literal = all properties and methods wrapped in curly braces
Each property of an object is a key value pair separated by commas
The value of a method is the function.
Separate functions with commas as well. (they are properties still)
If key name does not follow conventional naming use  ‘ ‘.
Access the properties of objects with dot notation
If property does not exist it will return ‘undefined’
Objects can have computed property keys.
Property values can also be expressions
Use ‘in’ to see if a specific property exists. ( ‘property’ in object;)
Loop through and display key:values for(const key in superman){}
Use delete to get rid of properties from object
You can nest objects
Objects are copied by reference
You can pass an object literal as a parameter
parse() takes in JSON and returns js object
stringify() does the opposite
Methods do not work with JSON
RegExp is an object

	The Document Object Model (DOM)
Access elements of a web page from JS
DOM treats everything on web page as a node.
Document.body would access the body element
All nodes have a numerical code signifying what type they are
Node lists are not arrays
Document.images[0] will return the first image in node list
Node lists don’t have any other methods they use
You can turn a node list into an array using 
const imageArray = Array.form(document.images);
You can access elements by their ID, tagName, class
You can also use document.querySelector(‘#idName’)
Query selectors are good for selecting very specific items on page
getAttribute() returns value of attribute provided
wonderWomen.getAttribute(‘Class’); this returns class .hero
You can use setAttruibute to set the elements attribute

	Events
Events provide links between web page and user interactions
Event Listeners
Lets the program know when an event happens
.only one event handler for each element
Without a node reference the listener is added to the whole page
The Type property returns the type of event that occurred
The Target property returns a reference to the node that fired
There are various ways to find the position at which the event took place
There is a huge list of events just remember the most commonly used ones. 
Modifier Keys
Modifier keys will fire the keydown and keyup events but not the keypress events
Touchscreens have touch events

Be careful when using preventDefualt()


