Week10
Client-side form validation
it is always better and faster to catch invalid data client-side
you should always preform both client-side and server-side validation
form validatoin: when your form has requirements to be submitted
validation done in the browser is client-side
validation done on server is server-side 
why validate?
    we want the right data in the right format
    protect users data
    protect ourselfs
there is built-in form validation (this has better performance than js but not as customizable)
js validation: very customizable but you have to write everything
built-in validation is done by using validation attributes on form elemnets
    ex: required, minlentgth, maxlength, type, pattern

Using Fetch
fetch API accesses amdn manipulates HTTP pipline
provides global fetch() method that fetches resources asynchronously across networks
Promise returned from fetch() won’t reject on HTTP error status
    ex: fetch('http://example.com/movies.json')
     .then(response => response.json())
     .then(data => console.log(data));

the simpilest fetch() takes one argument, the resource you want to fetch
the response object is a representation of the entire http response
we use json() method to extract the JSON body from response
this method returns a second promise that resolves without parsing

fetch() method can accept a second parameter -- an init object that allows you to control number of different settings
uploading JSON data --> use fetch() to POST JSON data
uploading a file --> HTML <input type="file" /> input element, FormData() and fetch()
uploading multiple files -->  HTML <input type="file" multiple /> input element, FormData() and fetch()
