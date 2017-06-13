(function() {
  'use strict';
  toggleLights("stopButton","stopLight","stop");
  toggleLights("slowButton","slowLight","slow");
  toggleLights("goButton","goLight","go");

  logButtonContent("stopButton");
  logButtonContent("slowButton");
  logButtonContent("goButton");


function toggleLights(ButtonElement,light,action){
    var ButtonElements = document.getElementById(ButtonElement);
    var lights = document.getElementById(light);
    ButtonElements.addEventListener("click", function(){
    lights.classList.toggle(action);
    });
}
function logButtonContent(ButtonElement){
     var ButtonElements = document.getElementById(ButtonElement);
       ButtonElements.addEventListener("mouseenter", function( event ) {
       console.log("Entered ",event.target.innerHTML," button")
       });
       ButtonElements.addEventListener("mouseleave", function( event ) {
       console.log("Left ",event.target.innerHTML," button")
       });
}


})();
