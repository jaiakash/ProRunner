canvas  = document.querySelector("canvas");
ctx = canvas.getContext("2d");

ctx.fillStyle = 'red';

player_up_bool = true;

draw_player();

function draw_player() {
    if(player_up_bool) ctx.fillRect(0, 5, 50, 50);
    else ctx.fillRect(0, 65, 50, 50);
    ctx.strokeStyle = "black";
    ctx.moveTo(0, 0);
    ctx.lineTo(600, 0);
    ctx.moveTo(0, 120);
    ctx.lineTo(600, 120);
    ctx.stroke();
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        ctx.clearRect(0, 0, canvas.width,canvas.height);
        player_up_bool = !player_up_bool;
        draw_player();
    }
}

rectX = 550;
randomY = (Math.random()<0.5) ? 5:65;

gameLoop();

function gameLoop(timeStamp) {
    // Update game objects in the loop
    rectX--;
    draw();

    window.requestAnimationFrame(gameLoop);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    ctx.fillRect(rectX, randomY, 50, 50);
    draw_player();
}
