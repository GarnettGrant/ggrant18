/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: Garnett Grant
 *    Date:  Feb 21

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderGarnettGrant = [1,2,3,4,5];
var figureCountGarnettGrant = 3;
var autoAdvanceGarnettGrant = setInterval(rightAdvance, 5000);


/*add src values to img elements based on order specified in photoOrder array*/
function populateFigures(){
   var filenameGarnettGrant;
   var currentFigGarnettGrant;

   if (figureCountGarnettGrant === 3){
      for (var i = 1; i < 4; i++) {
         filenameGarnettGrant = "images/IMG_0" + photoOrderGarnettGrant[i] + "sm.jpg";
         currentFigGarnettGrant = document.getElementsByTagName("img")[i-1];
         currentFigGarnettGrant.src = filenameGarnettGrant;
         
      }
   } else {
      for (var i = 0; i < 5; i++){
         filenameGarnettGrant = "images/IMG_0" + photoOrderGarnettGrant[i] +"sm.jpg";
         currentFigGarnettGrant = document.getElementsByTagName("img")[i];
         currentFigGarnettGrant.src = filenameGarnettGrant;
      }
   }
   
}


/* stop automatic image switching and call rightAdvance() function */
function rightArrow(){
   clearInterval(autoAdvanceGarnettGrant);
   rightAdvance();
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrderGarnettGrant[i] + 1) === 6) {
         photoOrderGarnettGrant[i] = 1;
      } else {
         photoOrderGarnettGrant[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
clearInterval(autoAdvanceGarnettGrant);

   for (var i = 0; i < 5; i++) {
      if ((photoOrderGarnettGrant[i] - 1) === 0) {
         photoOrderGarnettGrant[i] = 5;
      } else {
         photoOrderGarnettGrant[i] -= 1;
      }
      populateFigures();
   }
}

/*switch to 5-image layout */
function previewFive(){
   var articleElGarnettGrant = document.getElementsByTagName("article")[0];

   var lastFigureGarnettGrant = document.createElement("figure");
   lastFigureGarnettGrant.id = "fig5";
   lastFigureGarnettGrant.style.zIndex = "5";
   lastFigureGarnettGrant.style.position = "absolute";
   lastFigureGarnettGrant.style.right = "45px";
   lastFigureGarnettGrant.style.top = "67px";

   var lastImageGarnettGrant = document.createElement("img");
   lastImageGarnettGrant.width = "240";
   lastImageGarnettGrant.height = "135";

   lastFigureGarnettGrant.appendChild(lastImageGarnettGrant);
   //articleElGarnettGrant.appendChild(lastFigureGarnettGrant);

   articleElGarnettGrant.insertBefore(lastFigureGarnettGrant, document.getElementById("rightarrow"));


   //clone figure element for fifth image and edit to be first
   var firstFigureGarnettGrant = lastFigureGarnettGrant.cloneNode(true);
   firstFigureGarnettGrant.id = "fig1";
   firstFigureGarnettGrant.style.right = "";
   firstFigureGarnettGrant.style.left = "45px";

   //articleElGarnettGrant.appendChild(firstFigureGarnettGrant);
   articleElGarnettGrant.insertBefore(firstFigureGarnettGrant, document.getElementById("fig2"));

   figureCountGarnettGrant = 5;

   //add appropriate src values to two new img elements

   document.getElementsByTagName("img")[0].src = "images/IMG_0"+ photoOrderGarnettGrant[0] + "sm.jpg";
   document.getElementsByTagName("img")[4].src = "images/IMG_0"+ photoOrderGarnettGrant[4] + "sm.jpg";

   //change button to hide extra images
   var numberButtonGarnettGrant = document.querySelector("#fiveButton p");
   numberButtonGarnettGrant.innerHTML = "Show fewer images";
   if (numberButtonGarnettGrant.addEventListener){
      numberButtonGarnettGrant.removeEventListener("click",previewFive, false);
      numberButtonGarnettGrant.addEventListener("click",previewThree, false);
   } else if (numberButtonGarnettGrant.attachEvent){
      numberButtonGarnettGrant.detachEvent("onclick",previewFive);
      numberButtonGarnettGrant.attachEvent("onclick",previewThree);
   }
}

/* switch to 3-image layout */
function previewThree(){
   var articleElGarnettGrant = document.getElementsByTagName("article")[0];
   var numberButtonGarnettGrant = document.querySelector("#fiveButton p");

   articleElGarnettGrant.removeChild(document.getElementById("fig1"));
   articleElGarnettGrant.removeChild(document.getElementById("fig5"));
   figureCountGarnettGrant = 3;
   numberButtonGarnettGrant.innerHTML = "Show more images";
   if (numberButtonGarnettGrant.addEventListener) {
      numberButtonGarnettGrant.removeEventListener("click", previewThree, false);
      numberButtonGarnettGrant.addEventListener("click", previewFive, false);
   } else if (numberButtonGarnettGrant.attachEvent) {
      numberButtonGarnettGrant.detachEvent("onclick", previewThree);
      numberButtonGarnettGrant.attachEvent("onclick", previewFive);
   }
}

var zoomWindowGarnettGrant;
/* open center figure in separate window */
function zoomFig() {
   var propertyWidthGarnettGrant = 960;
   var propertyHeightGarnettGrant = 600;
   var winLeftGarnettGrant = ((screen.width - propertyWidthGarnettGrant) / 2);
   var winTopGarnettGrant = ((screen.height - propertyHeightGarnettGrant) / 2);
   var winOptionsGarnettGrant = "width=960, height=600";
   winOptionsGarnettGrant += ",left=" + winLeftGarnettGrant;
   winOptionsGarnettGrant += ",top=" + winTopGarnettGrant;
   zoomWindowGarnettGrant = window.open("zoom.htm", "zoomwin", winOptionsGarnettGrant);

   zoomWindowGarnettGrant.focus();
}
var favFooterElTableGarnettGrant;
/* create favourites area and attach to DOM */
function generateFavourites(){
   var articleElGarnettGrant = document.getElementsByTagName("article")[0];
   var favFooterElGarnettGrant = document.createElement("footer");
   
   articleElGarnettGrant.appendChild(favFooterElGarnettGrant);
   favFooterElGarnettGrant.id = "favsFooter";

   var favFooterElh2GarnettGrant = document.createElement("h2");
   favFooterElGarnettGrant.appendChild(favFooterElh2GarnettGrant);

   favFooterElh2GarnettGrant.innerHTML = "Favourites:"

   favFooterElTableGarnettGrant = document.createElement("table");

   favFooterElGarnettGrant.appendChild(favFooterElTableGarnettGrant);
}

var favsArrayGarnettGrant = [];
/* adds the selected picture to the favourties section */

function identifyFavourites(favPhoto){
   
   if (favsArrayGarnettGrant.length < 5){
      if (favsArrayGarnettGrant.includes(zoomWindowGarnettGrant.favPhoto)){
         alert("Already favourite photo, please choose a different photo");
      } else {
         favsArrayGarnettGrant.push(zoomWindowGarnettGrant.favPhoto); 
         displayFavourites(favPhoto)
      }
   } else {
      alert("Maximum favourites added, please remove to add another");
   }
  
}

/* displays favourite photos */
function displayFavourites(favPhoto){
   
   for (var i = 0; i < favsArrayGarnettGrant.length; i++){
      
      var newColumnGarnettGrant = document.createElement("td");
      var newImgGarnettGrant = document.createElement("img");
      newImgGarnettGrant.style = "display: inline-block; padding: 5px;";
      newImgGarnettGrant.width = "160";
      newImgGarnettGrant.height = "90";
      newImgGarnettGrant.src = favPhoto;
    
      favsArrayGarnettGrant.includes(zoomWindowGarnettGrant.favPhoto);
      newColumnGarnettGrant.appendChild(newImgGarnettGrant);
      favFooterElTableGarnettGrant.appendChild(newColumnGarnettGrant);

      

      /* unfavourite buttonn under each photo */
      var unFavouriteBtn = document.createElement("button");
      unFavouriteBtn.innerHTML = "Remove";
      unFavouriteBtn.value = 1;
      unFavouriteBtn.style = "margin: 5px;";
      if (unFavouriteBtn.addEventListener){
         unFavouriteBtn.addEventListener("click", removeFavourites, false);
      } else if (unFavouriteBtn.attachEvent){
         unFavouriteBtn.attachEvent("onclick", removeFavourites);
      }
      newColumnGarnettGrant.appendChild(unFavouriteBtn);
      favFooterElTableGarnettGrant.appendChild(unFavouriteBtn);

   }
}

function removeFavourites(){
   
 
   
}

function printCopyrightInformation(){
   var copyright = document.createElement("footer");
   copyright.innerHTML = "&copysr; Copyright Garnett Grant | COMP 125 | SEC 07 | 2022 | CENTENNIAL COLLEGE";
   // copyright.style="color:white; top:-400px;";
   copyright.id = "copyrightFooter";
   favFooterElTableGarnettGrant.appendChild(copyright);
   document.querySelector("#copyrightFooter").style = "color:white; top:200px; margin:10px; text-align:center;";
}

/*create event listeners for left arrow, right arrow, and center figure element*/
function createEventListeners(){
   var leftarrowGarnettGrant = document.getElementById("leftarrow");
   if (leftarrowGarnettGrant.addEventListener){
      leftarrowGarnettGrant.addEventListener("click",leftArrow, false);
   } else if (leftarrowGarnettGrant.attachEvent){
      leftarrowGarnettGrant.attachEvent("onclick",leftArrow);
   }

   var rightarrowGarnettGrant = document.getElementById("rightarrow");
   if (rightarrowGarnettGrant.addEventListener) {
      rightarrowGarnettGrant.addEventListener("click",rightArrow, false);
   } else if (rightarrowGarnettGrant.attachEvent){
      rightarrowGarnettGrant.attachEvent("onclick",rightArrow);
   }

   var mainFigGarnettGrant = document.getElementsByTagName("img")[1];
   if(mainFigGarnettGrant.addEventListener){
      mainFigGarnettGrant.addEventListener("click",zoomFig, false);
   } else if (mainFigGarnettGrant.attachEvent){
      mainFigGarnettGrant.attachEvent("onclick",zoomFig);
   }

   var showAllButtonGarnettGrant = document.querySelector("#fiveButton p");
   if (showAllButtonGarnettGrant.addEventListener){
      showAllButtonGarnettGrant.addEventListener("click", previewFive, false);
   } else if (showAllButtonGarnettGrant.attachEvent){
      showAllButtonGarnettGrant.attachEvent("onclick",previewFive);
   }

}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
   generateFavourites();
   printCopyrightInformation()
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}