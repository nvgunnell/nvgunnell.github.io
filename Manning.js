
function convertFunc(){

var ninput = document.getElementById('ninput').value;
var Rinput = document.getElementById('Rinput').value;
var Sinput = document.getElementById('Sinput').value;
var R = Math.pow (Rinput,2/3);
var S = Math.pow (Sinput, 1/2);
var ke = 1.486
var ksi = 1.0

var Result;

var english = document.getElementById("english");
var si = document.getElementById("si");



    if (english.checked==true){
    Result = ke/ninput*R*S + english.value;
    }else if(si.checked==true){
    Result = ksi/ninput*R*S + si.value;
  }
   else{
        alert ("Unit type not selected!");
        }

    if (ninput <0.01 || ninput >0.06)
        alert("n value not in range!")

    if (ninput <0 || Rinput <0 || Sinput<0){
        alert("Values cannot be negative!")
        }else{
        }
  document.getElementById('outResult').innerHTML = 'Flow velocity = ' + Result;
}