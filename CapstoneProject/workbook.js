// window.onload = function() {
//     // load the dropdown list
//     let states = ["Alabama", "Alaska", "Arizona"];
//     let abbrev = ["AL", "AK", "AZ"];
//     const statesList = document.getElementById("statesList");
//     let length = states.length;
//     for (let i = 0; i < length; i++) {
//  // create the option element
//  let theOption = document.createElement("option");
//  // set the text and value of the option you created 
//  theOption.textContent = states[i];
//  theOption.value = abbrev[i];
//  // append the option as a child of (inside) the // select element 
//  statesList.appendChild(theOption);
//  }
//     // other stuff
//  };

//STEP 1 --> we need to download a dropdown list of 3 options when we load the page
window.onload = function init() {
   const chooseOption = document.getElementById("chooseOption");
   const parksByLocation = document.getElementById("parksByLocation");
   const parksByType = document.getElementById("parksByType");
   const statesFromArray = document.getElementById("statesFromArray");
   createNewListOfSelectAnOption ();   //the function for programmatically dropdown of 3 options is below (***)
   parksByLocation.style.display = "none";
   parksByType.style.display = "none";
   statesFromArray.style.display = "none";
   // selectParkOutOfState ();
   chooseOption.onchange = onChangeEvent;
   // parksByLocation.onchange = selectParkOutOfState;
}

//     function selectParkOutOfState () {
//         let parksArrayLoad = nationalParksArray.length;
//         const statesFromArray = document.getElementById("statesFromArray");
//         for (let i = 0; i < parksArrayLoad; i++) {
//             let theOption = document.createElement("option");
//             theOption.text = nationalParksArray[i].LocationName;
//             statesFromArray.appendChild(theOption);
//         }
//          }
//          statesFromArray.style.display = "block";
// }

//  STEP 2 (***)This helps us to download dropdown list of 3 options programmatically
function createNewListOfSelectAnOption () {
   let chooseAnOption = ["Choose your option...","By Location" , "By Type"];
   const chooseOption = document.getElementById("chooseOption");
   let length = chooseAnOption.length;
   for (let i = 0; i < length; i++) {
       let theOption = document.createElement("option");
       theOption.text = chooseAnOption[i];
       chooseOption.appendChild(theOption);
   }
}
//The end of dropdown 3 options(["Choose your option...","By Location" , "By Type"])
//the first list that appears on the screen after we download the page
//STEP 3 --> Describe what happens when you change 3 options
function onChangeEvent() {
   if (chooseOption.value == "By Location") {
   downloadStatesList ();
   parksByType.style.display = "none";
}
else if (chooseOption.value == "By Type") {
   downloadTypesList ();
   parksByLocation.style.display = "none";
}
else if (chooseOption.value == "Choose your option...") {
   parksByLocation.style.display = "none";
   parksByType.style.display = "none";
}
}


function downloadStatesList () {
   const parksByLocation = document.getElementById("parksByLocation");
       let length = locationsArray.length;
       for (let i = 0; i < length; i++) {
           let theOption = document.createElement("option");
           theOption.text = locationsArray[i];
           parksByLocation.appendChild(theOption);
       }
         parksByLocation.style.display = "block";

       }

   function downloadTypesList () {
       const parksByType = document.getElementById("parksByType");
           let length = parkTypesArray.length;
           for (let i = 0; i < length; i++) {
               let theOption = document.createElement("option");
               theOption.text = parkTypesArray[i];
               parksByType.appendChild(theOption);
           }
           parksByType.style.display = "block";
        }

function parksByLocationSelect (event) {
const chooseParkByState = document.getElementById("parksByLocation");
const loadParksBasedOnState = document.getElementById("parksFromArray");
var selectElement = event.target;
   var selectedState = selectElement.value;
   alert (selectedState);
   const length = nationalParksArray.length;
   for (let i = 0; i < length; i++) {
       if (nationalParksArray[i].State == selectedState) {
          let createOption = document.createElement("theOption");
          createOption.text = nationalParksArray[i].LocationName;
          loadParksBasedOnState.appendChild(createOption);
       }
   }
}






"use strict"


window.onload = function () {
populateMountain();
  // const mountainsList = document.getElementById("mountainsList");

}

function populateMountain() {
  const mountainsList = document.getElementById("mountainsList");

  for (let mountain of mountainsArray) {
    let newOption = document.createElement("option");

    newOption.text = mountain.name;
    newOption.value = mountain;
    mountainsList.appendChild(newOption);
  }
}

function pickMountain(mountain) {
  let selectedMountain = mountain;

  const mountainName = document.getElementById("mountainName");
  const mountainDesc = document.getElementById("mountainDesc");
  const mountainElevation = document.getElementById("mountainElevation");
  const mountainEffort = document.getElementById("mountainEffort");

  mountainName.innerHTML = "Mt Washington";
}


// "use strict" ///that helped me


// window.onload = function () {
// populateMountain();
  

// }

// function populateMountain() {
//   const mountainsList = document.getElementById("mountainsList");

//   for (let mountain of mountainsArray) {
//     let newOption = document.createElement("option");

//     newOption.textContent = mountain.name;
//     mountainsList.appendChild(newOption);
//   }
// }

// function pickMountain(event) {
//   let selectedMountain = event.target.value;

//   const mountainName = document.getElementById("mountainName");
//   const mountainDesc = document.getElementById("mountainDesc");
//   const mountainElevation = document.getElementById("mountainElevation");
//   const mountainEffort = document.getElementById("mountainEffort");

//     mountainName.innerHTML = selectedMountain.name;

  
// }