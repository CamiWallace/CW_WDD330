W01 Notes 
LocalStorage: 
Good resource: https://blog.logrocket.com/localstorage-javascript-complete-guide/
This is part of the Web Storage API which contains both localStorage and sessionStorage
localStorage will continue to store data after the browser is closed sessionStorage will not. 
How local storage works is by saving key, value pairs in a browser. 
There are 5 methods that accompany localStorage:
setItem() : adds the key/value pair to storage
getItem(): get your stuff out of storage using key
removeItem(): removes items from storage using key
clear(): clear the localStorage
key(): give a number to get a key from localStorage
Questions
It mentioned that the data is stored on a small SQL or SOQL page on the browser?
If that is how it is stored, is it cleared when you clear your cash?
How do you access the data stored on the browser?
Best practice for displaying the data returned from localStorage, or can you treat it the same as a map. 
What datatype is the data returned?
  


Followed along with example from book:
<!DOCTYPE html>
<html>
    <head>
        <title>Story Writer</title>
        <script>
            function loadStory(){
                var storyName = document.getElementById("title").value
                var storyHTML = localStorage.getItem(storyName)
                document.getElementById("story_editor").value = storyHTML
            }
             function saveStory(){
                var storyName = document.getElementById("title").value
                var storyHTML = document.getElementById("story_editor").value
                window.localStorage.setItem(storyName, storyHTML)
 
            } 
            function displayStory(){
                var storyHTML = document.getElementById("story_editor").value
                var storyTitle = document.getElementById("title").value
                document.getElementById("display").innerHTML = storyTitle + ": " + storyHTML 
 
            }
        </script>
        <style>
            body{
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
            }
            textarea{
                width: 80vw;
                height: 50vw;
                background-color: rgb(205, 245, 231);
                justify-self: center;
                align-self: center;
                margin: 3%;
                
            }
            .buttons{
                align-self: center;
            }
            header{
                text-align: center;
            }
 
        </style>
    </head>
    <body>
        <header>
            <h1>Story Editor</h1><hr>
        </header>
        <div class="titleInput">
            <label for="title">Story Name: </label>
            <input type="text" id="title" name="title"><br> 
        </div>        
        <section class="buttons">
            <button onclick="loadStory()" id="edit" type="button">Edit</button>
            <button onclick="saveStory()" id="save" type="button">Save</button>
            <button onclick="displayStory()" id="btn_display" type="button">Display</button>
        </section>
        <textarea id="story_editor" placeholder="Start your story here."></textarea>
        <div id="display"></div>
 
    </body>
</html>


