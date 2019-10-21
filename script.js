
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name = pilotName]");
   let copilotName = document.querySelector("input[name = copilotName]");
   let fuelLevel = document.querySelector("input[name = fuelLevel]");
   let cargoMass = document.querySelector("input[name = cargoMass]");
   let pilotMessage = "";
   let copilotMessage = "";
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         document.getElementById("missionTarget").innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[4].name}</li>
            <li>Diameter: ${json[4].diameter}</li>
            <li>Star: ${json[4].star}</li>
            <li>Distance from Earth: ${json[4].distance}</li>
            <li>Number of Moons: ${json[4].moons}</li>
         </ol>
         <img src="${json[4].image}">;`
         // console.log(json[1]);
      } 
      )});  
   form.addEventListener("submit", function(event){
      if (pilotName.value === ""){
         alert("the Pilot field is empty!");
         event.preventDefault();
      }
      if (copilotName.value === ""){
         alert("the copilot field is empty!");
         event.preventDefault();
      }
      if (fuelLevel.value === ""){
         alert("the fuel level field is empty!");
         event.preventDefault();
      }
      if (cargoMass.value === ""){
         alert("the cargo field is empty!");
         event.preventDefault();
      }
      if (!isNaN(pilotName.value)){
         alert("pilot needs to be a string!");
         document.getElementById("launchStatusCheck").style.visibility = "visible"; 
c
         event.preventDefault();
      }
      if (!isNaN(copilotName.value)){
         alert("copilot needs to be a string!");
         document.getElementById("launchStatusCheck").style.visibility = "visible"; 
         document.getElementById("copilotStatus").innerHTML = "&#9679 Copilot is not ready!";
         event.preventDefault();
      }
      if (isNaN(fuelLevel.value)){
         alert("fuel level needs to be a number!");
         event.preventDefault();
      }
      if (isNaN(cargoMass.value)){
         alert("cargo mass needs to be a number!");
         event.preventDefault();
      }
      if (isNaN(pilotName.value)){
         pilotMessage = `&#9679 Pilot ${pilotName.value} is ready for launch!`;
         document.getElementById("launchStatusCheck").style.visibility = "visible"; 
         document.getElementById("pilotStatus").innerHTML = pilotMessage;
         event.preventDefault();
      }
      if (isNaN(copilotName.value)){
         copilotMessage = `&#9679 Copilot ${copilotName.value} is ready for launch!`;
         document.getElementById("launchStatusCheck").style.visibility = "visible"; 
         document.getElementById("copilotStatus").innerHTML = copilotMessage;
         event.preventDefault();
      }
      if (fuelLevel.value > 10000){
         document.getElementById("fuelStatus").innerHTML = `&#9679 Fuel levels are good.`;
         event.preventDefault();
      }
      if (fuelLevel.value < 10000){
         document.getElementById("fuelStatus").innerHTML = `<p style="color:red">&#9679 Fuel level not adequate for mission!</p>`;
         document.getElementById("launchStatus").innerHTML = `<p style="color:red">&#9679 Shuttle not ready for launch.</p>`;
         document.getElementById("launchStatusCheck").style.visibility = "visible"; 
         event.preventDefault();
      }
      if(cargoMass.value > 9999){
         document.getElementById("cargoStatus").innerHTML = `<p style="color:red">&#9679 Cargo mass too high for mission!</p>`;
         document.getElementById("launchStatus").innerHTML = `<p style="color:red">&#9679 Shuttle not ready for launch.</p>`;
         document.getElementById("launchStatusCheck").style.visibility = "visible"; 
         event.preventDefault();
      }
      if(cargoMass.value < 9999){
         document.getElementById("cargoStatus").innerHTML = `&#9679 Cargo levels are good.`;
         event.preventDefault();
      }
      if((isNaN(pilotName.value)) && (isNaN(copilotName.value)) && (cargoMass.value < 9999) && (fuelLevel.value > 9999)){
         document.getElementById("launchStatus").innerHTML = `<p style="color:green">&#9679 Shuttle ready for launch!</p>`;
         document.getElementById("pilotStatus").innerHTML = `&#9679 Pilot ready for launch.`;
         document.getElementById("copilotStatus").innerHTML = `&#9679 Copilot ready for launch.`;
         document.getElementById("fuelStatus").innerHTML = `&#9679 Fuel levels are good.`;
         document.getElementById("cargoStatus").innerHTML = `&#9679 Cargo levels are good.`;
         document.getElementById("launchStatusCheck").style.visibility = "visible"; 
         event.preventDefault();
      }
   });
});