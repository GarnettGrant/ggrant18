/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: Garnett Grant
 *    Date:   Feb 21 2022

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArrayGarnettGrant = window.opener.photoOrderGarnettGrant;
var figFilenameGarnettGrant = "images/IMG_0" + photoOrderArrayGarnettGrant[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilenameGarnettGrant; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin(){
   window.close();
}

/* create event listener for close button */
function createEventListener(){
   var closeWindowDivGarnettGrant = document.getElementsByTagName("button")[0];
   if (closeWindowDivGarnettGrant.addEventListener){
      closeWindowDivGarnettGrant.addEventListener("click", closeWin, false);
   } else if (closeWindowDivGarnettGrant.attachEvent){
      closeWindowDivGarnettGrant.attachEvent("onclick", closeWin);
   }

   var addToFavouritesButtonGarnettGrant = document.getElementsByTagName("button")[1];
   if (addToFavouritesButtonGarnettGrant.addEventListener){
      addToFavouritesButtonGarnettGrant.addEventListener("click", addToFavourites, false);
   } else if (addToFavouritesButtonGarnettGrant.attachEvent){
      addToFavouritesButtonGarnettGran.attachEvent("onclick", addToFavourites);
   }
}

function addToFavourites(){
   window.opener.identifyFavourites(figFilenameGarnettGrant);
   closeWin();
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;