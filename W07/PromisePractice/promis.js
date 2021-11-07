//callback
//calls a function after a specified amount of time.
//try not to nest to many of these
//callbacks are not always asychronas
//await is cleaner sytax for working with promises


const posts = [
    {title: 'Post One', body: 'This is post  one'},
    {title: 'Post Two', body: 'This is post two'}
];

//mimicking fetching from a server which can take a few seconds
function getPosts(){
    //setTimeout takes in a callback function
    setTimeout(() => {
        let output ='';
        //loop through the posts
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);//delay by two seconds
}

//we now want the createPost function to return a promise
//prmise takes in a callback
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

createPost({title: 'Posts Three', body: 'This is post three.'})
    .then(getPosts)
    .catch(err => console.log(err));
    
