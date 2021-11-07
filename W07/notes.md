Functions can have properties and methods themselves.
ex) length property returns number of parameters.
The call() method can set the value of ‘this’ inside a function to an object that is provided as the first argument.
ex) functionName.call(objectName);
Any parameters will be listed after the value of ‘this’ separated by a coma.
Memoization: the result of a function can be saved in a cache and the next time that function is called the result will be pulled from the cache instead of taking the time to re-run the function.
A function can call itself
A function can define/redefine itself
Recursive Functions invokes itself.
A promise represents the future result of an asynchronous operation. 
A promise first calls an asynchronous operation it is then ‘pending’
One the operation is finished the promise is ‘settled’
Promises are made with constructor functions.
Promises take a function called an executor as an argument
const promise = new Promise( (resolve, reject) => {
   // initialization code goes here
   if (success) {
       resolve(value);
   } else {
       reject(error);
   }
});
Once a promise is settled you can use the ‘then’ method
This method is used to deal with the outcome
Takes two parameters(a fulfillment function, rejection function)
The data from the resolve() will be passed to the then()
catch() can specify what you want to happen if the operation fails

You can chain the ‘then’ methods of promises together.
Each promise begins the the previous is done
Async functions start with the word async
Functions can return functions
Assign to a variable
Generators are special functions that create iterators
Higher order functions accept functions as arguments or return one as a result (or both)
When not all the information needed is supplied to a function it is curried
function multiplier(x,y) {
   return x * y;
}
Ajax allows you to update a page without needing to refresh
redirects() this allow you to redirect to a different URL 
Json() method transforms json data to a js object
fetch(url)
.then( response => response.json() ); // transforms the JSON data into a JavaScript object
.then( data => console.log(Object.entries(data)) )
.catch( error => console.log('There was an error: ', error))
A constructor function can create a new request object
