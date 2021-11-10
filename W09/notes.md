Chapter 9 The Window Object
    every js environment has a global object and global scope are properties fo this object.
    BOM = browser object model -> collection of properties and methods that contain information about browser and screen
    in a browser environment global objects are window objects so.... x=6 can be called anywhere on the screen as window.x
    window.confirm("your message here") will show a popup box with your message and the options ok or cancel
    you can redirect pages by using the location property. this contains info about url
    a few of the window.location properties include: href, protocal, host, hostname, port, pathname search, hash, and orgin.
    the window.screen object also has a lot of handy properties like: height, width, avaiwidth/height, colorDepth, and more.
    window object contains a document object
    the document object deals with the page the current loaded page (ex: document.write)
    cookies are small files saved on users computer (document.cookie)
    window object also provides properties dealing with timing of functions
    setTimeout() lets you specifiy an amount of time before preforming and action
    setInterval() works like setTimout but on repeat.
    setTimout and setInterval can be used to do animations however --> there is now the window.requestAnimationFrame()
    
Chapter 14 HTML5 APIs
    data- attribute is a way to embed data in a web page
    Start with data-. Contain only lowercase letters, numbers, hyphens, dots, colons or underscores. Include an optional string value.
    you don't have to use the getItem or setItem with the HTML5 you can just asign it. 
    localStorage.name = 'Heisenberg'; 
    console.log(localStorage.name); 
    << "Heisenberg";
    geolocation can find the geographical position of the device
    position is an object --> function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`); 
    
}