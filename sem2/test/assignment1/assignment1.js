var basalMetabolicRateMetric;
var basalMetabolicRateImperial;
var unitSelection;

function basalMetabolicRateCalc(){

unitSelection = (document.getElementById("imperial-selection").checked) ? unitSelection = "imperial" : unitSelection = "metric";
var gender = document.getElementById("gender-selection").value;
var weight = document.getElementById("weight-selection").value;
var feet = document.getElementById("height-selection-feet").value * 12;
var inches = document.getElementById("height-selection-inches").value * 1;
var height = (feet + inches);
var age = document.getElementById("age-selection").value;


if (unitSelection == "imperial"){
 
    
    basalMetabolicRateImperial = (gender == "male") ? 66 + (6.2 * (weight*1)) + (12.7 * (height*1)) - (6.76 * (age * 1)) : 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    document.getElementById("bmr-results").innerHTML = basalMetabolicRateImperial.toFixed(2) + " kcal/day";
    }
else if (unitSelection == "metric"){
  
    basalMetabolicRateMetric = (gender == "male") ? 66.5 + (13.76 * weight) + (5.003 * height) - (6.755 * age) : 655 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    document.getElementById("bmr-results").innerHTML = basalMetabolicRateMetric.toFixed(2) + " kcal/day";
    }
    
    
}

function unitPreferenceDisplay(){
    unitSelection = (document.getElementById("imperial-selection").checked) ? unitSelection = "imperial" : unitSelection = "metric";

    if(unitSelection == "imperial"){
        document.getElementById("weight-selection-display").innerHTML = "Pounds: "
        document.getElementById("height-selection-display-one").innerHTML = " Feet: "
        document.getElementById("height-selection-display-two").innerHTML = " Inches: "
    }
    
    else if (unitSelection == "metric"){
        document.getElementById("weight-selection-display").innerHTML = "Kg/s: "
        document.getElementById("height-selection-display").innerHTML = "Centimeters: "
    }
}


var dailyCalorieIntake;
var activityLevel;
function dailyCalorieCalc(){
    

    if (unitSelection == "metric"){    
        

        if(document.getElementById("activity-level-selection-sedentary").checked){
            dailyCalorieIntake = basalMetabolicRateMetric * 1.2;
        }
        else if(document.getElementById("activity-level-selection-lightly-active").checked){
            dailyCalorieIntake = basalMetabolicRateMetric * 1.375;
        }
        else if(document.getElementById("activity-level-selection-moderately-active").checked){
            dailyCalorieIntake = basalMetabolicRateMetric * 1.55;
        }
        else if(document.getElementById("activity-level-selection-very-active").checked){
            dailyCalorieIntake = basalMetabolicRateMetric * 1.725;
        }
        else if(document.getElementById("activity-level-selection-extremely-active").checked){
            dailyCalorieIntake = basalMetabolicRateMetric * 1.9;
        }
    
    }
    else if (unitSelection =="imperial"){


        if(document.getElementById("activity-level-selection-sedentary").checked){
            dailyCalorieIntake = basalMetabolicRateImperial * 1.2;
        }
        else if(document.getElementById("activity-level-selection-lightly-active").checked){
            dailyCalorieIntake = basalMetabolicRateImperial * 1.375;
        }
        else if(document.getElementById("activity-level-selection-moderately-active").checked){
            dailyCalorieIntake = basalMetabolicRateImperial * 1.55;
        }
        else if(document.getElementById("activity-level-selection-very-active").checked){
            dailyCalorieIntake = basalMetabolicRateImperial * 1.725;
        }
        else if(document.getElementById("activity-level-selection-extremely-active").checked){
            dailyCalorieIntake = basalMetabolicRateImperial * 1.9;
        }



       
    }
    document.getElementById("dci-results").innerHTML = "Recommended Daily Calorie Intake: "+ dailyCalorieIntake.toFixed(2) + " kcal/day";   
}




//Event listener for backwards compatibility
var calculateBmrButton = document.getElementById("calculate-bmr");

if(calculateBmrButton.addEventListener){
    calculateBmrButton.addEventListener("click", basalMetabolicRateCalc, false);
    calculateBmrButton.addEventListener("click", dailyCalorieCalc, false);
}
else if (calculateBmrButton.attachEvent){
    calculateBmrButton.attachEvent("onclick", basalMetabolicRateCalc);
    calculateBmrButton.attachEvent("onclick", dailyCalorieCalc);
}
document.querySelector("#unit-selection").addEventListener("click", unitPreferenceDisplay);


document.getElementById("imperial-selection").addEventListener("click", unitPreferenceDisplay);
document.getElementById("metric-selection").addEventListener("click", unitPreferenceDisplay);


