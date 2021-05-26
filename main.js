var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var NASAimg=["nasaimg1.jpg","nasaimg2.jpg"];
var randomNumber=Math.floor(Math.random()*2);
var roverWidth=100;
var roverHeight=90;
var roverX=10;
var roverY=10;
var bgImg=NASAimg[randomNumber];
var roverImg="rover.png";

function add(){
    var bgImgT=new Image();
    bgImg.onload=uploadBackground;
    bgImgT.src=bgImg;
    var roverImgT=new Image();
    roverImg.onload=uploadBackground;
    roverImgT.src=roverImg;
}

function uploadBackground(){
    ctx.drawImage(bgImgT, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    var keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="38"){
        up();
        console.log("up");
    }
    if (keyPressed=="40"){
        down();
        console.log("down");
    }
    if (keyPressed=="37"){
        left();
        console.log("left");
    }
    if (keyPressed=="39"){
        right();
        console.log("right");
    }
}

function up(){
    if (roverY>=0){
        var roverY=roverY-10;
        console.log("When UP pressed, rover's x coordinate = "+roverX+" and rover's y coordinate = "+roverY+".");
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (roverY<=500){
        var roverY=roverY+10;
        console.log("When DOWN pressed, rover's x coordinate = "+roverX+" and rover's y coordinate = "+roverY+".");
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (roverY>=0){
        var roverY=roverY-10;
        console.log("When LEFT pressed, rover's x coordinate = "+roverX+" and rover's y coordinate = "+roverY+".");
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (roverY<=700){
        var roverY=roverY+10;
        console.log("When RIGHT pressed, rover's x coordinate = "+roverX+" and rover's y coordinate = "+roverY+".");
        uploadBackground();
        uploadRover();
    }
}

function uploadRover(){
    ctx.drawImage(roverImgT, roverX, roverY, roverWidth, roverHeight);
}