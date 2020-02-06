
function convertFunc(){
var Result;
var Input = document.getElementById('inputNumbers').value;
var inUnits = document.getElementById('inputUnits').value;
var outUnits = document.getElementById('outputUnits').value;
 switch (inUnits + outUnits) {
   case 'inches' + 'oinches':
   Result = Input + ' Inches';
  break;
   case 'inches' + 'ofeet':
   Result = Input*0.083333 + ' Feet';
  break;
   case 'inches' + 'oyards':
   Result = Input*0.027778 + ' Yards';
  break;
   case 'inches' + 'omiles':
   Result = Input*0.000015783 + ' Miles';
  break;
   case 'inches' + 'ocm':
   Result = Input/0.39370 + ' Centimeters';
  break;
   case 'inches' + 'ometers':
   Result = Input/39.370 + ' Meters';
  break;
   case 'inches' + 'okm':
   Result = Input/39370 + ' Kilometers';
  break;


   case 'feet' + 'oinches':
   Result = Input*12 + ' Inches';
  break;
   case 'feet' + 'ofeet':
   Result = Input + ' Feet';
  break;
   case 'feet' + 'oyards':
   Result = Input*0.33333 + ' Yards';
  break;
   case 'feet' + 'omiles':
   Result = Input*0.00018939 + ' Miles';
  break;
   case 'feet' + 'ocm':
   Result = Input/0.032808 + ' Centimeters';
  break;
   case 'feet' + 'ometers':
   Result = Input/3.2808 + ' Meters';
  break;
   case 'feet' + 'okm':
   Result = Input/3280.8 + ' Kilometers';
  break;


   case 'yards' + 'oinches':
   Result = Input*36 + ' Inches';
  break;
   case 'yards' + 'ofeet':
   Result = Input*3 + ' Feet';
  break;
   case 'yards' + 'oyards':
   Result = Input + ' Yards';
  break;
   case 'yards' + 'omiles':
   Result = Input*0.00056818 + ' Miles';
  break;
   case 'yards' + 'ocm':
   Result = Input/0.010936 + ' Centimeters';
  break;
   case 'yards' + 'ometers':
   Result = Input/1.0936 + ' Meters';
  break;
   case 'yards' + 'okm':
   Result = Input/1096.6 + ' Kilometers';
  break;


   case 'miles' + 'oinches':
   Result = Input*63360 + ' Inches';
  break;
   case 'miles' + 'ofeet':
   Result = Input*5280 + ' Feet';
  break;
   case 'miles' + 'oyards':
   Result = Input*1760 + ' Yards';
  break;
   case 'miles' + 'omiles':
   Result = Input + ' Miles';
  break;
   case 'miles' + 'ocm':
   Result = Input/0.0000062137 + ' Centimeters';
  break;
   case 'miles' + 'ometers':
   Result = Input/0.00062137 + ' Meters';
  break;
   case 'miles' + 'okm':
   Result = Input/0.62137 + ' Kilometers';
  break;


   case 'cm' + 'oinches':
   Result = Input*0.39370 + ' Inches';
  break;
   case 'cm' + 'ofeet':
   Result = Input*0.032808 + ' Feet';
  break;
   case 'cm' + 'oyards':
   Result = Input*0.010936 + ' Yards';
  break;
   case 'cm' + 'omiles':
   Result = Input*0.0000062137 + ' Miles';
  break;
   case 'cm' + 'ocm':
   Result = Input + ' Centimeters';
  break;
   case 'cm' + 'ometers':
   Result = Input/100 + ' Meters';
  break;
   case 'cm' + 'okm':
   Result = Input/100000 + ' Kilometers';
  break;


   case 'meters' + 'oinches':
   Result = Input*39.370 + ' Inches';
  break;
   case 'meters' + 'ofeet':
   Result = Input*3.2808 + ' Feet';
  break;
   case 'meters' + 'oyards':
   Result = Input*1.0936 + ' Yards';
  break;
   case 'meters' + 'omiles':
   Result = Input*0.00062137 + ' Miles';
  break;
   case 'meters' + 'ocm':
   Result = Input/0.01 + ' Centimeters';
  break;
   case 'meters' + 'ometers':
   Result = Input + ' Meters';
  break;
   case 'meters' + 'okm':
   Result = Input/1000 + ' Kilometers';
  break;


   case 'km' + 'oinches':
   Result = Input*39370 + ' Inches';
  break;
   case 'km' + 'ofeet':
   Result = Input*3280.8 + ' Feet';
  break;
   case 'km' + 'oyards':
   Result = Input*1093.6 + ' Yards';
  break;
   case 'km' + 'omiles':
   Result = Input*0.62137 + ' Miles';
  break;
   case 'km' + 'ocm':
   Result = Input*100000 + ' Centimeters';
  break;
   case 'km' + 'ometers':
   Result = Input*1000 + ' Meters';
  break;
   case 'km' + 'okm':
   Result = Input + ' Kilometers';
  break;
 }
  document.getElementById('outResult').innerHTML = Result;
}