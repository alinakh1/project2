function welcomeToBooleans() {
    // Only change code below this line
  const a = 2;
  console.log(a);
    return false; // Change this line
    
    // Only change code above this line
  }
  welcomeToBooleans();




  window.onload = function init() {
    
    loadFirstListStates ();
    const statesFromArray = document.getElementById("statesFromArray");

    statesFromArray.onchange = loadSecondListParks;

}

function loadFirstListStates () {
    let locationLoad = locationsArray.length;
    const statesFromArray = document.getElementById("statesFromArray");
    for (let i = 0; i < locationLoad; i++) {
        let theOption = document.createElement("option");
        theOption.text = locationsArray[i];
        statesFromArray.appendChild(theOption);
    }
    statesFromArray.style.display = "block";
}
    
function loadSecondListParks()  {
     let parksArrayLoad = nationalParksArray.length;
    const parksByLocation = document.getElementById("parksByLocation");
    for (let i = 0; i < parksArrayLoad; i++) {
        let Option = document.createElement("option");
        Option.text = nationalParksArray[i].LocationName;
        parksByLocation.appendChild(Option);
        parksByLocation.style.display = "block";
    }
    nationalParksArray.filter(function (State) {
         if (locationsArray[i] === nationalParksArray[i].State) {
        
     parksByLocation.style.display = "block";   
    }
    else {
        parksByLocation.style.display = "none";
    }
    });
   
    
}