
function convertFunc(){

var kinput = document.getElementById('kinput').value;
var ninput = document.getElementById('ninput').value;
var Rinput = document.getElementById('Rinput').value;
var Sinput = document.getElementById('Sinput').value;
var R = Math.pow (Rinput,2/3)

var Result = kinput/ninput*R*Sinput;

var x = document.createElement("INPUT");
x.setAttribute("type", "radio");

  document.getElementById('outResult').innerHTML = Result;
}