window.onload = function() {
    // load the dropdown list
    let states = ["Alabama", "Alaska", "Arizona"];
    let abbrev = ["AL", "AK", "AZ"];
    const statesList = document.getElementById("statesList");
    let length = states.length;
    for (let i = 0; i < length; i++) {
 // create the option element
 let theOption = document.createElement("option");
 // set the text and value of the option you created 
 theOption.textContent = states[i];
 theOption.value = abbrev[i];
 // append the option as a child of (inside) the // select element 
 statesList.appendChild(theOption);
 }
    // other stuff
 };