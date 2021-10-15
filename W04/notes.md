Week 4 Notes
Forms: (there were not a lot of notes for this chapter I mostly worked with the code examples)
A way of interacting with a web page <form>
Used to need a backend language like PHP or ruby
Each form control has an initial value that can be specified in HTML
When using check boxes make sure that they all have the same name
Checkboxes have a checked property 
You can use for loops to see what boxes were checked
hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
Radio buttons also need the same name
Only one radio button can be checked at a time
Set type =’file’ to upload files
Form validation/making sure field is completed
Object-Oriented Programming in JS:
Objects have properties and methods
Three main parts of OOP
Encapsulation:inner workings hidden inside object
Polymorphism:same process, different objects
Inheritance:taking features from one object and adding some new features (improve on existing functionality)
Classes are used to define a blueprint for an object
Objects are created of instances of that class
Blueprint = class / home = instance
Constructor Functions: a function that defines properties and methods of an object
const Dice = function(sides=6){
   this.sides = sides;
   this.roll = function() {
       return Math.floor(this.sides * Math.random() + 1)
 keyword :this = object to be returned by function.
Creating an instance = const redDice = new Dice;
Or if you need parameters : const whiteDice = new Dice(4);
const literalObject = {}; will create a new object
All objects have a constructor property,
Objects methods are public by default
Prototype Property: useful to add properties and methods to a class
All classes and constructor functions have a prototype property
Prototype property returns and object
Inheritance chain???
A class can inherit from another class using extends keyword
class NinjaTurtle extends Turtle
This points to an object calling a method
For-of instead of foreach
Modular Javascript:
self-contained piece of code that provides funtions and methods
code in a module should have a single purpose
a module has its own global scope(global variables can only be used by module)
this in top level of module is undefined rather then golbal object
no HTML style comments in modules
need to use import and export with modules and to let html know in the scrypt tag
dont use more than one defualt export
