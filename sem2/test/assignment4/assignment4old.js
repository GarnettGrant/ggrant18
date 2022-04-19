"use strict";

var fieldValidityStatus = true;
var fields = document.querySelectorAll("input")
var fieldsArr = Array.prototype.slice.call(fields);
// var provinceSelectElement = document.getElementById("provinceInput");
var provinceSelectElement = document.getElementById("provinceInput");

function formRequired(){
    var provinceSelectElement = document.getElementById("provinceInput");
    for (var i = 0; i < fields.length; i++){
        console.log("testing")
        fields[i].required = "required";
    }
    provinceSelectElement.required = "required";
    provinceSelectElement.valueMissing = true; 
}


// Regex
var postalCodeRegEx = new RegExp("([A-Z]\d[A-Z]) (\d[A-Z]\d)|([A-Z]\d[A-Z])(\d[A-Z]\d)")

var postalCodeRegEx2 = /([A-Z]\d[A-Z])(\d[A-Z]\d)|([A-Z]\d[A-Z])(\d[A-Z]\d)/;



var passwordRegEx = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

var defaultProvincePrompt = document.createElement("option");
var provinceSelectElement = document.getElementById("provinceInput");
var provinceSelectElementOptions = document.querySelectorAll("option");
function formatProvinceSelect(){
    
    defaultProvincePrompt.innerText = "Select a Province";
    defaultProvincePrompt.value = "";
    defaultProvincePrompt.setAttribute = "disabled selected value";
    provinceSelectElement.insertBefore(defaultProvincePrompt,provinceSelectElementOptions[0]);
    provinceSelectElement.selectedIndex = 0;

    if (provinceSelectElement.length == 7){
        provinceSelectElement.addEventListener("change",checkProvinceSelect, false);
    } else{
        provinceSelectElement.removeEventListener("change",checkProvinceSelect, false);
    }
    
}

function validatePostalCode(){
    var postalCodeUserInput = document.getElementById("postalCodeInput");

    if (postalCodeRegEx2.test(postalCodeUserInput.value)){
        postalCodeUserInput.validity = true;
    } else {
        postalCodeUserInput.setCustomValidity("Please use ### - ### FORMAT");
    }
    

}

function checkProvinceSelect(){
    if (provinceSelectElement.selectedIndex.value === "default"){
        provinceSelectElement.validity === false;
    } else if (provinceSelectElement.value != "default"){
        provinceSelectElement.validity === true;
        provinceSelectElement.removeChild(defaultProvincePrompt);
    }
}


function validateAge(){
    var ageInput = document.getElementById("ageInput");

    ageInput.min = 18;
    ageInput.max = 120;
    
}


var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
function validateEmail(){
    var email = document.getElementById("emailInput");
    // var nameEnd = email.search("@");
    // nameText = email.substring(0,nameEnd);

    // email.match(emailRegex)
    // email.RegExp(emailRegex)
    // (emailRegex.test(email.value))
  
    if (emailRegex.test(email.value)){
        email.valid = true;
    } else{
        email.valid = false;
    }
}

function validateFormFunctions(){
    validateAge();
    validateEmail();
    validatePostalCode();
}

function setupPage(){
    formRequired();
    formatProvinceSelect();
    createEventListeners();
    
}

function createEventListeners(){
    var registerButton = document.getElementById("registerBtn");

    registerButton.addEventListener("click", validateFormFunctions, false);
}

window.addEventListener("load",setupPage,false);