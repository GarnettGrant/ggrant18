"use strict";
//Global variables
var cookieSpeed = 5000;
var cookieSpeedInterval;

/* 1. Create the Canvas */
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

/* Include Images */
// Background Image
var bgReady = false;
var bgImage = new Image();
// var cookieMonsterReady = false;
// var cookieMonsterImage = new Image();
var cookieMonstersCookieReady = false;
var cookieMonstersCookieImage = new Image();
bgImage.onload = function(){
    bgReady = true;
    // cookieMonsterReady = true;
    cookieMonstersCookieReady = true;
};
bgImage.src = "images/background.png";
// cookieMonsterImage.src = "images/defaultCookieMonster.png";
cookieMonstersCookieImage.src ="images/cookie.png";

/* Game Objects */
var cookieMonstersCookie = {
    x: 0,
    y: 0
};
var cookiesEaten = 0;


/* Handle Player Mouse Controls*/
var body = document.getElementsByTagName("body")[0];

function  getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y
  
    return {
      x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
      y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
    }
  }
var mouseClickX; 
var mouseClickY; 



canvas.addEventListener("click",function(e){
    // mouseClickX = e.x;
    // mouseClickY = e.y;
    var pos = getMousePos(canvas, e);
    mouseClickX = pos.x;
    mouseClickY = pos.y;
    // console.log(`${mouseClickX} ${mouseClickY}`); //DEBUGGING REMOVE
    // console.log(`${e.x} ${e.y}`); //DEBUGGING REMOVE
},false);


/* New Game */
//Reset the game when the player eats a cookie
var reset = function () {
    cookieMonstersCookie.x = canvas.width / 2;
    cookieMonstersCookie.y = canvas.height / 2;

    //Throw the cookie somewhere on the screen
    cookieMonstersCookie.x = 32 + (Math.random() * (canvas.width - 64));
    cookieMonstersCookie.y = 32 + (Math.random() * (canvas.height - 64));

    // cookieMonstersCookie.x = 0;
    // cookieMonstersCookie.y = 0; 

    // console.log(`${cookieMonstersCookie.x} ${cookieMonstersCookie.y}`); //DEBUGGING REMOVE
}

function startCookieMove(){
    cookieSpeedInterval = setInterval(reset,cookieSpeed);
}

function stopCookieMove(){
    clearInterval(cookieSpeedInterval)
}

function resetScore(){
    cookiesEaten = 0;
}

function resetCookieSpeed(){
    stopCookieMove();
    cookieSpeed = 5000;
}
/* Update Objects */
//Update game objects
var cursorToUpdate = document.getElementsByTagName("canvas")[0];
var update = function (){

    //Are they touching?
    
    if (
        mouseClickX <= (cookieMonstersCookie.x + 32)
        && cookieMonstersCookie.x <= (mouseClickX + 32)
        && mouseClickY <= (cookieMonstersCookie.y + 32)
        && cookieMonstersCookie.y <= (mouseClickY + 32)
    ){
        // console.log("Cookie touched by cookie monster") //DEBUGGING REMOVE
        cursorToUpdate.style.cursor = 'url("images/CookieMonsterFed.cur"), auto';
        cookieMonstersCookieImage.src = "images/cookieBiten.png";
        setTimeout(function (){
            cursorToUpdate.style.cursor = 'url("images/defaultCookieMonster.cur"), auto';
            cookieMonstersCookieImage.src = "images/cookie.png";
        }, 500);
        if (cookieSpeed > 500){
            cookieSpeed -=500;
        }
        stopCookieMove();
        startCookieMove();
        ++cookiesEaten;
        reset();
    }
};

/* Render Objects */
// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (cookieMonstersCookieReady) {
		ctx.drawImage(cookieMonstersCookieImage, cookieMonstersCookie.x, cookieMonstersCookie.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "bold 24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
    // ctx.marginBottom = "30px";
	ctx.fillText("Cookies eaten: " + cookiesEaten, 5, 5);

    var cookiesEatenDisplay = document.getElementById("cookiesEatenDisplay");

    cookiesEatenDisplay.innerHTML = ("Cookies Eaten: " + cookiesEaten);
};

/* The main game loop */
// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

/* A note about looping */
// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

/* Start the game! */
// Let's play this game!
var then = Date.now();
reset();
main();

startCookieMove();

/*Reset buttons*/
var resetScoreBtn = document.getElementById("rstScore");
var resetSpeedBtn = document.getElementById("rstSpd");

resetScoreBtn.addEventListener("click",resetScore,false);
resetSpeedBtn.addEventListener("click",resetCookieSpeed, false);

