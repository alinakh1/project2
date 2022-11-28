
"use strict";

const mountainsList = document.getElementById("mountainsList");
const mountainData = document.getElementById("mountainData");
const mountainCard = document.getElementById("mountainCard");
const mountainCardImg = document.getElementById("mountainCardImg");
let option = new Option("Select a mountain", );
mountainsList.appendChild(option);


window.onload = function init() {
    loadMountainList();
    mountainsList.onchange = showMountainData;
}

function loadMountainList() {
    for (let mountain of mountainsArray) {
        let option = new Option(mountain.name, mountain.name);
        mountainsList.appendChild(option);
    }
}

async function getSunsetForMountain(lat, lng){
    let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data;
}

function showMountainData() {
    for (let mountain of mountainsArray) {
        if (mountainsList.value == "select") {
          mountainCard.style.display = "none";

        }
        else if (mountain.name == mountainsList.value) {
          mountainData.innerHTML = "<span id='uppercase' class='fw-bold'>Description: </span>" + mountain.desc + "<br><span id='uppercase' class='fw-bold'>Elevation: </span>" + mountain.elevation + "<br><span id='uppercase' class='fw-bold'>Coordinates: </span>" + mountain.coords.lat + ", " + mountain.coords.lng;
          const uppercase = document.querySelector("#uppercase");
          uppercase.style.textTransform = "uppercase";
          mountainCardImg.src = "images/" + mountain.img;
            mountainCard.style.display = "block";
            break;
        }
    }
}


