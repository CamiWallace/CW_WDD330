TESTING AND DEBUGGING:
The three main types of errors: sytem errors, programmer errors, and user errors.
exeptions are errors with return values that the program can use to deal with the error.
exeptions also produce stack traces a sequence of functions or methods to point to where the error occured.
warnings occur if the error is not big enough to cause a crash
linting tools can test the quality of js code.
breakpoints: these halt the process of the code and allow us to view the value of different variables at that point in the program
alerts are always handy in debuging as well is the console.
make to remove debugging code prior to deployment
error objects can also be used as constructors to create custom error objects:
you can also throw exceptions with the throw statement(it is best practice to throw an error object)
you can also use expection handling like try catch blocks(the book 'clean code' sugest against try catch blocks stating that they are ugly)
TESTS!!!!
write test as you go! helps keep code from becoming brittle as it progresses.
Test-Drieven Development is writting the test before the code.

