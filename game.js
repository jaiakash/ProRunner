canvas  = document.querySelector("canvas");
ctx = canvas.getContext("2d");

ctx.fillStyle = 'red';

player_up_bool = true

ctx.fillRect(0, 5, 50, 50);
draw_lines();

function draw_lines() {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(500, 0);
    ctx.moveTo(0, 120);
    ctx.lineTo(500, 120);
    ctx.stroke();
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        ctx.clearRect(0, 0, canvas.width,canvas.height);

        if(player_up_bool) ctx.fillRect(0, 65, 50, 50);
        else ctx.fillRect(0, 5, 50, 50);

        player_up_bool = !player_up_bool;
        draw_lines();
    }
}