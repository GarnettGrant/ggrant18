"use strict"
//Create dropdown node for selecting a province 
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

function checkProvinceSelect(){
    if (provinceSelectElement.selectedIndex.value === ""){
        provinceSelectElement.validity === false;
    } else if (provinceSelectElement.value != ""){
        provinceSelectElement.validity === true;
        provinceSelectElement.removeChild(defaultProvincePrompt);
    }
}

//Initiate required attributes in all required elements within the form
function initiateRequired(){
var fields = document.querySelectorAll("input");
var provinceSelectElement = document.getElementById("provinceInput");
    for (var i = 0; i < fields.length; i++){
        fields[i].required = "required";
    }
    provinceSelectElement.required = "required";
}

// Variables 
var fname = document.getElementById("fnameInput");
var lname = document.getElementById("lnameInput");
var address = document.getElementById("addressInput");
var city = document.getElementById("cityInput");
var postalCode = document.getElementById("postalCodeInput");
var province = document.getElementById("provinceInput");
var age = document.getElementById("ageInput");
var password = document.getElementById("passwordInput");
var confirmPassword = document.getElementById("confirmPasswordInput");
var email = document.getElementById("emailInput");
var isValid = true;
// Regular Expressions
var postalCodeRegEx = /^([A-Z]\d[A-Z])(\d[A-Z]\d)|([A-Z]\d[A-Z]) (\d[A-Z]\d)$/;
var emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passwordRegEx = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

function validateForm(){
    isValid = true;

    // Postal Code to match a0a0a0 format
    if (!(postalCodeRegEx.test(postalCode.value.toUpperCase()))){
        postalCode.setCustomValidity("Please input the correct format");
        isValid = false;
    } else{
        postalCode.setCustomValidity("");
    }
    
    //Age must be at least 18 years old
    age.min = 18;
    if (age.value < 18){
        age.setCustomValidity("Must be 18+");
        isValid = false;
    } else{
        age.setCustomValidity("");
    }

    //Email field must contain @ and . Characters
    if (!(emailRegEx.test(email.value))){
        email.setCustomValidity("Incorrect email format, plase try again");
        isValid = false;
    } else{
        email.setCustomValidity("");
    }

    //Confirm Password and Password fields identical input check
    if (password.value !== confirmPassword.value){
        password.setCustomValidity("Password do not match please try again");
        confirmPassword.setCustomValidity("Password do not match please try again");
        isValid = false;
    } else{
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
    if (!(passwordRegEx.test(password.value))){
        password.setCustomValidity("Password must be greater than 6 characters & must contain at least one digit and one upper-case character");
        isValid = false;
    } else{
        password.setCustomValidity("");
    }

    if (isValid){
        window.alert("Thanks for registering with our website, your customer record was created successfully.");
    }
   
}

function clearForm(){
    fname.value = "";
    lname.value = "";
    address.value = "";
    city.value = "";
    postalCode.value = "";
    province.value = "";
    formatProvinceSelect();
    age.value = "";
    password.value = "";
    confirmPassword.value = "";
    email.value = "";
    isValid = false;
}

function createEventListeners(){
    var registerButton = document.getElementById("registerBtn");
    registerButton.addEventListener("click", validateForm, false);
    
    var clearButton = document.getElementById("clearBtn");
    clearButton.addEventListener("click",clearForm, false);
}

function setupPage(){
    formatProvinceSelect();
    createEventListeners();
    initiateRequired();
}
window.addEventListener("load",setupPage,false);