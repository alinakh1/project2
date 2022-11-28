// function populateNationalParksByState(){
//     const parksList = document.getElementById("parksList");
//     let lengthParks = nationalParksArray.length;
//     for (let i = 0; i < lengthParks; i++) {
//         // if (nationalParksArray[i].State == Select) {
            
//         // }
//         let theOptionPark = document.createElement("option");
//         theOptionPark.textContent = nationalParksArray[i].LocationName;
//         parksList.appendChild(theOptionPark);
//     }
// }
// function populateNationalParksByType(){




//////Added from populateNationalParksByState
// const parksList = document.getElementById("parksList");
//     let lengthParks = nationalParksArray.length;
//     let lengthLocations = locationsArray.length;
//     for (let i = 0; i < lengthParks; i++) {
//         if (nationalParksArray[i].State == lengthLocations) {
//             // document.getElementById("parkList").style.visibility = "visible";
//             let theOptionPark = document.createElement("option");
//             theOptionPark.textContent = nationalParksArray[i].LocationName;
//             parksList.appendChild(theOptionPark);
//         }
//         else {
//             document.getElementBy("parkList").style.visibility = "hidden";
//         }
       
//     }





//     const parksList = document.getElementById("parksList");

//     let lengthForParks = nationalParksArray.length;
//     for (let j = 0; j < lengthForParks; j++) {
//         let theOptionParks = document.createElement("option");
//         theOptionParks.text = nationalParksArray[j].LocationName;
//         parksList.appendChild(theOption);
//     }
//     parksList.style.display = "block";
// }


for (let i = 0; i < locationsArrayLength; i++){
    if (locationsArrayLength == parksArrayLength.State) {
     let theOptionParks = new Option(nationalParksArray[i].LocationName);
        parkList.appendChild(theOptionParks);
    }   
    }

    // for (let j = 0; j < parksArrayLength; j++){
//     if (locationsArrayLength.value == parksArrayLength[j].State){
//        let theOptionParks = new Option(nationalParksArray[j].LocationName);
//     parkList.appendChild(theOptionParks); 
//     }
   
    
//     }


example 

 // const parksList = document.getElementById("parksList");
    // let lengthParks = nationalParksArray.length;
    // let lengthLocations = locationsArray.length;
    // for (let i = 0; i < lengthParks; i++) {
    //     if (nationalParksArray[i].State == lengthLocations) {
    //         // document.getElementById("parkList").style.visibility = "visible";
    //         let theOptionPark = document.createElement("option");
    //         theOptionPark.textContent = nationalParksArray[i].LocationName;
    //         parksList.appendChild(theOptionPark);
    //     }
    //     else {
    //         document.getElementBy("parkList").style.visibility = "hidden";
    //     }

    // }


    window.onload = function populateStates() {
        // load the dropdown list
        const statesList = document.getElementById("statesList");
        let length = locationsArray.length;
        for (let i = 0; i < length; i++) {
            let theOption = document.createElement("option");
            theOption.text = locationsArray[i];
            statesList.appendChild(theOption);
        }
        const parkList = document.getElementById("parksList");
        parkList.style.display = "none";
    
        statesList.onchange = populateNationalParksByState;
    };
    
    
    
    function populateNationalParksByState() {
        const parkList = document.getElementById("parksList");
        // parkList.style.display = "block";
    
    let parksArrayLength =  nationalParksArray.length;
    let length = locationsArray.length;
    
    
    }
























    window.onload = function populateStates() {
        // load the dropdown list
        const statesList = document.getElementById("statesList");
        let length = locationsArray.length;
        for (let i = 0; i < length; i++) {
            let theOption = document.createElement("option");
            theOption.text = locationsArray[i];
            statesList.appendChild(theOption);
        }
        const parkList = document.getElementById("parksList");
        parkList.style.display = "none";
    
        statesList.onchange = populateNationalParksByState;
    };
    
    // function populateNationalParksByState(){
    //         const parksList = document.getElementById("parksList");
    //         let lengthParks = nationalParksArray.length;
    //         for (let i = 0; i < lengthParks; i++) {
    //             let theOptionPark = document.createElement("option");
    //             theOptionPark.textContent = nationalParksArray[i].LocationName;
    //             parksList.appendChild(theOptionPark);
    //         }
    //     }


here i will put more unsuccesfull scripts:


// function populateNationalParksByType () {
//     const parksByType = document.getElementById("parksByType");
//  const parksByLocation = document.getElementById("parksByLocation");
        
//     if (chooseOption.value == "By Type") {
//     let length = parkTypesArray.length;
//     for (let i = 0; i < length; i++) {  
//         let theOption = document.createElement("option");
//         theOption.text = parkTypesArray[i];
//         parksByType.appendChild(theOption);
//     }

//     parksByType.style.display = "block"; 
      
//       //also call a function which will display national parks based on value == state 
//     }
//     // else if (chooseOption.value == "Choose your option...") {
//     //     parksByLocation.style.display = "none";
//     // }
//     else if (chooseOption.value == "Location") {
//         let length = locationsArray.length;
//         for (let i = 0; i < length; i++) {  
//             let theOption = document.createElement("option");
//             theOption.text = locationsArray[i];
//             parksByLocation.appendChild(theOption);
//         }
//           parksByLocation.style.display = "block";
    
// }
// }




// function populateNationalParksByState () {
//     const parksByLocation = document.getElementById("parksByLocation");

//     let length = locationsArray.length;
//     for (let i = 0; i < length; i++) {
//         let theOption = document.createElement("option");
//         theOption.text = locationsArray[i];
//         parksByLocation.appendChild(theOption);
//     }
//     // const parksByType = document.getElementById("parksList");
//     // parksByType.style.display = "none";
// }






// function populateNationalParksByType () {

// }






// function populateStates() {
//     // load the dropdown list
//     const statesList = document.getElementById("statesList");
//     let length = locationsArray.length;
//     for (let i = 0; i < length; i++) {
//         let theOption = document.createElement("option");
//         theOption.text = locationsArray[i];
//         statesList.appendChild(theOption);
//     }
//     const parkList = document.getElementById("parksList");
//     parkList.style.display = "none";

//     statesList.onchange = populateNationalParksByState;
// };





// function populateNationalParksByState() {
//     const parkList = document.getElementById("parksList");
//     // parkList.style.display = "block";

// let parksArrayLength =  nationalParksArray.length;
// let length = locationsArray.length;


// }





  


// function populateNationalParksByState();


// const parkList = document.getElementById("parksList");

// let parksArrayLength =  nationalParksArray.length;

// // let locationsArrayLength = locationsArray.length;

// for (let i = 0; i < parksArrayLength; i++){
//  let theOptionParks = new Option(nationalParksArray[i].LocationName);
//     parkList.appendChild(theOptionParks);
// } 








//STEP 1 --> we need to download a dropdown list of 3 options when we load the page
window.onload = function init() {
    const chooseOption = document.getElementById("chooseOption");
    const parksByLocation = document.getElementById("parksByLocation");
    const parksByType = document.getElementById("parksByType");
    const statesFromArray = document.getElementById("statesFromArray");
    createNewListOfSelectAnOption ();   //the function for programmatically dropdown of 3 options is below (***)
    parksByLocation.style.display = "none";
    parksByType.style.display = "none";
    selectParkOutOfState ();
    chooseOption.onchange = onChangeEvent;
    // parksByLocation.onchange = selectParkOutOfState;
    function selectParkOutOfState () {
        let parksArrayLoad = nationalParksArray.length;
        const statesFromArray = document.getElementById("statesFromArray");
        for (let i = 0; i < parksArrayLoad; i++) {
            let theOption = document.createElement("option");
            theOption.text = nationalParksArray[i].LocationName;
            statesFromArray.appendChild(theOption);
        }
         }
         statesFromArray.style.display = "block";
}
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
    //      function changeStateAndPark() {
    //         if (locationsArray[i] == nationalParksArray[i].State) {
    //         selectParkOutOfState ();
    //         parksByType.style.display = "none";
    //         selectParkOutOfState ();
    //     }
    // }