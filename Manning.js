
function convertFunc(){

var kinput = document.getElementById('kinput').value;
var ninput = document.getElementById('ninput').value;
var Rinput = document.getElementById('Rinput').value;
var Sinput = document.getElementById('Sinput').value;
var R = Math.pow (Rinput,0.66666666666666666666666666)

var Result = kinput/ninput*R*Sinput;


  document.getElementById('outResult').innerHTML = Result;
}