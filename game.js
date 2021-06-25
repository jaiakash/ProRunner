canvas  = document.querySelector("canvas");
ctx = canvas.getContext("2d");

ctx.fillStyle = 'red';

player_up_bool = true;

score=0;
speed=1;
draw_player();
highScore();

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

function gameLoop() {
    rectX-=speed;

    score+=0.01;

    highScore();
    document.getElementById("board").innerHTML = "Score : "+score.toFixed(1);
    //create a new block, if old one is lost
    if(rectX<0){
        speed+=0.5;
        rectX = 550;
        randomY = (Math.random()<0.5) ? 5:65;
    }

    collision_detector();
    draw();

    window.requestAnimationFrame(gameLoop);
}

function highScore(){
    hs = localStorage.getItem("HighScore");
    if(hs==null)prev_hs=0;
    else prev_hs=parseInt(hs);

    if(score>prev_hs)localStorage.setItem("HighScore", score+"");

    console.log(localStorage.getItem("HighScore"));

    document.getElementById("high").innerHTML = "High Score : "+localStorage.getItem("HighScore");
}

function collision_detector(){
    if(player_up_bool)pos=5;
    else pos=65;

    //Game Ended
    if(rectX<50 && randomY==pos){
        alert("Game Ended, Your Final Score is "+score.toFixed(1));
        location.reload();
        rectX=0;
        score=0;
        document.querySelector("Scoreboard").innerHTML = "Score : "+score;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    ctx.fillRect(rectX, randomY, 50, 50);
    draw_player();
}
