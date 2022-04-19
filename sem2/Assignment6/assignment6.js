"use strict";

//Global Variables
var previousButton = document.getElementById("prevBtn");
var updateButton = document.getElementById("updtBtn");
var nextButton = document.getElementById("nxtBtn");
var pictureBox = document.getElementById("pictureBox");
var picOrderNum = 0;


const request = new XMLHttpRequest();
request.open('GET', 'assignment6.json', true);
request.onload = () =>{
	var result = JSON.parse(request.responseText);
	// console.log(result); //DEBUGGING 
	//Display First Image
	addImage(result[picOrderNum].imageFileName,result[picOrderNum].description);

	//Update Button
	updateButton.addEventListener("click",() => {
		picOrderNum = 0;
		addImage(result[picOrderNum].imageFileName,result[picOrderNum].description)
	}, false);

	//Next Button
	nextButton.addEventListener("click",() => {
		if(picOrderNum == 4){
			picOrderNum = 0;
		} else {
			picOrderNum++;
		}
		
		addImage(result[picOrderNum].imageFileName,result[picOrderNum].description);
		
	}, false);

	//Previous Button
	previousButton.addEventListener("click",() => {
		if(picOrderNum == 0){
			picOrderNum = 4;
		} else {
			picOrderNum--;
		}
		addImage(result[picOrderNum].imageFileName,result[picOrderNum].description);
	}, false);
}
request.send();


function addImage(fileName,fileDesc){
	pictureBox.innerHTML = "<img id='imgDisplay' src='" + fileName + "'" + "alt = '" + fileDesc + "'>";
	$("#pictureBox img").hide().fadeIn(1500);
}