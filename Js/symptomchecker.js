document.getElementById("rotateBtn").addEventListener("click", function () {
  let frontsvg=document.getElementById("full-body");
  let backsvg=document.getElementById("full-body-back");
  let frontImage = document.getElementById("frontImage");
  let backImage = document.getElementById("backImage");

  if (frontImage.style.display === "none") {
    frontImage.style.display = "block";
    frontsvg.style.display = "block";
    frontsvg.style.visibility = "visible";
    backImage.style.display = "none";
    backsvg.style.display = "none";
    backSvg.style.visibility = "hidden";
  } else {
    frontImage.style.display = "none";
    backImage.style.display = "block";
    frontsvg.style.display = "none";
    frontsvg.style.visibility = "hidden";
    backsvg.style.display = "block";
    backsvg.style.visibility = "visible";
  }
});


var fronthead = document.getElementById("headSvg");
var frontneck = document.getElementById("neckSvg");
var frontchest= document.getElementById("chestSvg");
var frontabdomen= document.getElementById("AbdomenSvg");
var frontpelvis= document.getElementById("pelvisSvg");
var frontrightarm= document.getElementById("rightarmSvg");
var frontleftarm= document.getElementById("leftarmSvg");
var frontrightleg= document.getElementById("rightlegSvg");
var frontleftleg= document.getElementById("leftlegSvg");

//HEAD

fronthead.addEventListener("mouseover", showFrontHead);
fronthead.addEventListener("mouseout", hideFrontHead);

function showFrontHead() {
    fronthead.style.opacity = "0.5";  
    document.getElementById("headDiv").style.visibility="visible";
}
function hideFrontHead() {
    fronthead.style.opacity = "0"; 
    document.getElementById("headDiv").style.visibility="hidden";
}

//NECK


frontneck.addEventListener("mouseover", showFrontNeck);
frontneck.addEventListener("mouseout", hideFrontNeck);

function showFrontNeck() {
    frontneck.style.opacity = "0.5";   
    document.getElementById("neckDiv").style.visibility="visible"; 
}
function hideFrontNeck() {
    frontneck.style.opacity = "0";     
    document.getElementById("neckDiv").style.visibility="hidden";
}


//CHEST


frontchest.addEventListener("mouseover", showFrontChest);
frontchest.addEventListener("mouseout", hideFrontChest);

function showFrontChest() {
    frontchest.style.opacity = "0.5";  
    document.getElementById("chestDiv").style.visibility="visible";
}
function hideFrontChest() {
    frontchest.style.opacity = "0"; 
    document.getElementById("chestDiv").style.visibility="hidden";
}


//ABDOMEN


frontabdomen.addEventListener("mouseover", showFrontabdomen);
frontabdomen.addEventListener("mouseout", hideFrontabdomen);

function showFrontabdomen() {
    frontabdomen.style.opacity = "0.5";  
    document.getElementById("abdomenDiv").style.visibility="visible";
}
function hideFrontabdomen() {
    frontabdomen.style.opacity = "0"; 
    document.getElementById("abdomenDiv").style.visibility="hidden";
}


//PELVIS


frontpelvis.addEventListener("mouseover", showFrontpelvis);
frontpelvis.addEventListener("mouseout", hideFrontpelvis);

function showFrontpelvis() {
    frontpelvis.style.opacity = "0.5";  
    document.getElementById("pelvisDiv").style.visibility="visible";
}
function hideFrontpelvis() {
    frontpelvis.style.opacity = "0"; 
    document.getElementById("pelvisDiv").style.visibility="hidden";
}


//RIGHT LEG
frontrightleg.addEventListener("mouseover", showFrontrightleg);
frontrightleg.addEventListener("mouseout", hideFrontrightleg);

function showFrontrightleg() {
    frontrightleg.style.opacity = "0.5";  
    document.getElementById("legsDiv").style.visibility="visible";
}
function hideFrontrightleg() {
    frontrightleg.style.opacity = "0"; 
    document.getElementById("legsDiv").style.visibility="hidden";
}


//LEFT LEG
frontleftleg.addEventListener("mouseover", showFrontleftleg);
frontleftleg.addEventListener("mouseout", hideFrontleftleg);

function showFrontleftleg() {
    frontleftleg.style.opacity = "0.5";  
    document.getElementById("legsDiv").style.visibility="visible";
}
function hideFrontleftleg() {
    frontleftleg.style.opacity = "0"; 
    document.getElementById("legsDiv").style.visibility="hidden";
}


//LEFT ARM
frontleftarm.addEventListener("mouseover", showFrontleftarm);
frontleftarm.addEventListener("mouseout", hideFrontleftarm);

function showFrontleftarm() {
    frontleftarm.style.opacity = "0.5";  
    document.getElementById("armsDiv").style.visibility="visible";
}
function hideFrontleftarm() {
    frontleftarm.style.opacity = "0"; 
    document.getElementById("armsDiv").style.visibility="hidden";
}

//RIGHT ARM
frontrightarm.addEventListener("mouseover", showFrontrightarm);
frontrightarm.addEventListener("mouseout", hideFrontrightarm);

function showFrontrightarm() {
    frontrightarm.style.opacity = "0.5";  
    document.getElementById("armsDiv").style.visibility="visible";
}
function hideFrontrightarm() {
    frontrightarm.style.opacity = "0"; 
    document.getElementById("armsDiv").style.visibility="hidden";
}




var backhead = document.getElementById("backheadsvg");
var backneck = document.getElementById("backnecksvg");
var backback = document.getElementById("backbacksvg");
var backbutcock = document.getElementById("backbutcocksvg");
console.log(backbutcock);
var backrightarm= document.getElementById("backrightarmsvg");
var backleftarm= document.getElementById("backleftarmsvg");
var backrightleg= document.getElementById("backrightlegsvg");
var backleftleg= document.getElementById("backleftlegsvg");

//HEAD

backhead.addEventListener("mouseover", showbackHead);
backhead.addEventListener("mouseout", hidebackHead);

function showbackHead() {
    backhead.style.opacity = "0.5";  
    document.getElementById("headDiv").style.visibility="visible";
}
function hidebackHead() {
    backhead.style.opacity = "0"; 
    document.getElementById("headDiv").style.visibility="hidden";
}


//NECK


backneck.addEventListener("mouseover", showbackNeck);
backneck.addEventListener("mouseout", hidebackNeck);

function showbackNeck() {
    backneck.style.opacity = "0.5";   
    document.getElementById("neckDiv").style.visibility="visible"; 
}
function hidebackNeck() {
    backneck.style.opacity = "0";     
    document.getElementById("neckDiv").style.visibility="hidden";
}

//BACK


backback.addEventListener("mouseover", showbackback);
backback.addEventListener("mouseout", hidebackback);

function showbackback() {
    backback.style.opacity = "0.5";   
    document.getElementById("backDiv").style.visibility="visible"; 
}
function hidebackback() {
    backback.style.opacity = "0";     
    document.getElementById("backDiv").style.visibility="hidden";
}

//BUTCOCK

backbutcock.addEventListener("mouseover", showbackbutcock);
backbutcock.addEventListener("mouseout", hidebackbutcock);

function showbackbutcock() {
    backbutcock.style.opacity = "0.5";   
    document.getElementById("butcockDiv").style.visibility="visible"; 
}
function hidebackbutcock() {
    backbutcock.style.opacity = "0";     
    document.getElementById("butcockDiv").style.visibility="hidden";
}


//RIGHT ARM
backrightarm.addEventListener("mouseover", showbackrightarm);
backrightarm.addEventListener("mouseout", hidebackrightarm);

function showbackrightarm() {
    backrightarm.style.opacity = "0.5";   
    document.getElementById("armsDiv").style.visibility="visible"; 
}
function hidebackrightarm() {
    backrightarm.style.opacity = "0";     
    document.getElementById("armsDiv").style.visibility="hidden";
}


//LEFT ARM
backleftarm.addEventListener("mouseover", showbackleftarm);
backleftarm.addEventListener("mouseout", hidebackleftarm);

function showbackleftarm() {
    backleftarm.style.opacity = "0.5";   
    document.getElementById("armsDiv").style.visibility="visible"; 
}
function hidebackleftarm() {
    backleftarm.style.opacity = "0";     
    document.getElementById("armsDiv").style.visibility="hidden";
}

//LEFT LEG
backleftleg.addEventListener("mouseover", showbackleftleg);
backleftleg.addEventListener("mouseout", hidebackleftleg);

function showbackleftleg() {
    backleftleg.style.opacity = "0.5";  
    document.getElementById("legsDiv").style.visibility="visible";
}
function hidebackleftleg() {
    backleftleg.style.opacity = "0"; 
    document.getElementById("legsDiv").style.visibility="hidden";
}

//RIGHT LEG
backrightleg.addEventListener("mouseover", showbackrightleg);
backrightleg.addEventListener("mouseout", hidebackrightleg);

function showbackrightleg() {
    backrightleg.style.opacity = "0.5";  
    document.getElementById("legsDiv").style.visibility="visible";
}
function hidebackrightleg() {
    backrightleg.style.opacity = "0"; 
    document.getElementById("legsDiv").style.visibility="hidden";
}




// SYMPTOPM MAIN FUNCTION WORKING

function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "block";
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementById("myDropdown");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
          }
      }
  }
}


var selectedSymptoms = [];

function updateSymptoms(checkbox) {
  var symptom = checkbox.value;
  if (checkbox.checked) {
      selectedSymptoms.push(symptom);
  } else {
      var index = selectedSymptoms.indexOf(symptom);
      if (index !== -1) {
          selectedSymptoms.splice(index, 1);
      }
  }
}
var symptomsForDiagnosis = 
{
  "Influenza (Flu)": ["Fever", "Cough", "Chills", "Body aches", "Fatigue"],
  "Common cold": ["Runny Nose", "Sore Throat", "Sneezing", "Headache", "Cough"],
  "Asthma": ["Cough", "Shortness of Breath", "Wheezing", "Sleeping Disorder", "Chest Pain"],
  "Diabetes": ["Fatigue", "Increased Thirst", "Frequent Urination", "Extreme Hunger", "Vision Problems"],
  "Hypertension (High Blood Pressure)": ["Headache", "Chest Pain", "Vision Problems", "Shortness of Breath", "Dizziness"],
  "Migraine": ["Headache", "Dizziness", "Vomiting", "Vision Problems", "Sensitivity to light and sound"],
  "Gastroesophageal Reflux Disease": ["Cough", "Heartburn", "Difficulty swallowing", "Regurgitation of food or sour liquid", "Chest Pain"],
  "Pneumonia": ["Fever", "Cough", "Shortness of Breath", "Chest Pain", "Fatigue"],
  "Urinary Tract Infection (UTI)": ["Pain or burning sensation during urination", "Frequent urination", "Strong-smelling urine", "Pelvic pain (in women)"],  
  "Anxiety Disorders": ["Sleeping Disorder", "Excessive worry or fear", "Difficulty concentrating", "Restlessness or irritability", "Body aches"]
};

function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function diagnose() {
  var selectedSymptoms = [];
  var checkboxes = document.querySelectorAll('#myDropdown input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
          selectedSymptoms.push(checkbox.value);
      }
  });

  var probableDiagnoses = [];
  
  for (var diagnosis in symptomsForDiagnosis) {
      var matchingSymptoms = symptomsForDiagnosis[diagnosis];
      var matchingCount = 0;
      
      for (var i = 0; i < selectedSymptoms.length; i++) {
          if (matchingSymptoms.includes(selectedSymptoms[i])) {
              matchingCount++;
          }
      }
      
      var matchingPercentage = (matchingCount / matchingSymptoms.length) * 100;
      
      if (matchingPercentage >0) {
          probableDiagnoses.push({ diagnosis: diagnosis, strength: matchingPercentage.toFixed(2) + "%" });
      }
  }
  return probableDiagnoses;
  if (probableDiagnoses.length > 0) {
      console.log("Probable Diagnoses:");
      probableDiagnoses.forEach(function(diagnosis) {
          console.log("Diagnosis:", diagnosis.diagnosis, "| Strength:", diagnosis.strength);
      });
  } else {
      console.log("No probable diagnoses found.");
  }
}


function showreport(){

  document.getElementById('diagnose-report').innerHTML= "";
  var b =diagnose(selectedSymptoms);
  b.forEach(function(diagnosis)
 {
    document.getElementById('diagnose-report').innerHTML= document.getElementById('diagnose-report').innerHTML+ "<br>"+ diagnosis.diagnosis+ "--"+" Strength:"+ diagnosis.strength + "<br>";

});
  if(b.length==0)
  {
    document.getElementById('diagnose-report').innerHTML="No probable diagnoses found.";
    
  }

}


function sortDropdownAlphabetically() {
    var dropdownContent = document.getElementById("myDropdown");
    var labels = Array.from(dropdownContent.getElementsByTagName("label"));
    
    labels.sort(function(a, b) {
        var textA = a.textContent.trim().toLowerCase();
        var textB = b.textContent.trim().toLowerCase();
        return textA.localeCompare(textB);
    });
    
    // Clear the current dropdown content
    dropdownContent.innerHTML = "";
    
    // Re-append the sorted labels
    labels.forEach(function(label) {
        dropdownContent.appendChild(label);
    });
}

// Call the function to sort the dropdown alphabetically
sortDropdownAlphabetically();
