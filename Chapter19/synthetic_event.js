//create a new custom event  “start”
let startEvent = new Event("start");
//listen for the "start" event
document.addEventListener("start",function(event){console.log("hello world");console.log(event);},false);
//dispatch the “start” event
document.dispatchEvent(startEvent);

//another type click event
var clicked = function(){
    console.log("Document is clicked.")
}
document.addEventListener("click",clicked);
