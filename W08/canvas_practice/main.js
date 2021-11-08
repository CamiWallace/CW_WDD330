window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");

    //resize canvas to same size as load window
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //takes four parameters first two are the position and the 
    //second two are the size of shape
    context.fillRect(10,10,50,50);
    context.strokeRect(70,10,50,50);

    context.strokeStyle = "blue";
    context.strokeRect(200,200,100,100);
    context.strokeStyle = "red";
    context.strokeRect(300,300,100,100);
    context.strokeStyle = "yellow";
    context.strokeRect(200,300,100,100);
    context.strokeStyle = "purple";
    context.strokeRect(300,200,100,100);

    context.beginPath();
    //where drawing starts
    context.moveTo(600,600);
    context.lineTo(700,600);
    context.lineTo(700,650);
    context.closePath();
    context.stroke();

    //simple drawing on canvas
    let painting = false;
    function startPosition(){
        painting = true;
    }
    function endPosition(){
        painting = false;
        //reset the start so we don't start in the same spot every time
        context.beginPath();
    }
    function draw(e){
        if(!painting){
            return;
        }

        context.lineWidth = 5;
        context.lineCap = "round";
        context.strokeStyle = "green";

        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);


});

