const clickParagraph = document.getElementById('click');
const dblclickParagraph = document.getElementById('dblclick');
const mouseParagraph = document.getElementById('mouse');
const onceParagraph = document.getElementById('once');
const brokenLink = document.getElementById('broken');

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );

onceParagraph.addEventListener('click', remove);

dblclickParagraph.addEventListener('dblclick', highlight);

clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );

addEventListener('keydown',highlight);

addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));
addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
            console.log('Action canceled!');
        }
    });

addEventListener('click', (event) => {
        if (event.shiftKey) {
            console.log('A Shifty Click!');
        }
    });
addEventListener('click', doSomething);

addEventListener('keydown',highlight);

brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

function highlight(event){
    event.target.classList.toggle('highlight');  
    mouseParagraph.addEventListener('mouseover', highlight);
    mouseParagraph.addEventListener('mouseout', highlight);
    mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );
}

function doSomething(event){
    //returns event type
    console.log(event.type);
    //returns the node that was targeted by event
    console.log(event.target);
    //returns exact postion that event took place on page
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}

function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}
    
    
