var expression="";
var symbol=false;
inputLength=9;
function fourfunction (operation) {
  if (operation == '+' && symbol==true) {
   expression+="+";
   document.getElementById('addition').innerHTML=expression;
   symbol=false;
   inputLength++;
 }
 if (operation=='x' && symbol==true) {
  expression+='*';
  document.getElementById('addition').innerHTML=expression;
  symbol=false;
 }
 if (operation == '/' && symbol=true) {
  expression+="/";
  document.getElementById('addition').innerHTML=expression;
  symbol=false;
 }
 if (operation=='-' && symbol=true) {
  expression+='-';
  document.getElementById('addition').innerHTML=expression;
  symbol=false;
 }
 if (operation== '%' && symbol==true) {
  document.getElementById('addition').innerHTML=expression;
 }
 if (operation=='.' && symbol=true) {
  expression+='.';
  document.getElementById('addition').innerHTML=expression;
  symbol=false;
 }
}
function numbers(operations) {
  if(operation=='0') {
    expression+='0';
    document.getElementById('addition').innerHTML=expression;
    symbol=true;
 }
 if (operation=='1') {
   expression+='1';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='2') {
   expression+='2';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='3') {
   expression+='3';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='4') {
   expression+='4';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='5') {
   expression+='5';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='6') {
   expression+='6
   document.getelementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='7') {
   expression+='7';
   document.getElementByid('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='8') {
   expression+='8';
   document.getelementById('addition').innerHTML=expression;
   symbol=true
 }
 if (operation=='9') {
   expression+='9';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='ans') {
   expression+='ans';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
}
function AC() {
  expression='';
  document.getElementById('addition').innerHTML=expression;
}
////come back here after checking all work
console.log (expression);

}
function numbers (operation) {
if (operation=='.') {
  expression+='.';
}
if (operation=='0') {
  expression+='0';
}
if (operation=='1') {
  expression+='1';
}
if (operation=='2') {
  expression+='2';
}
if (operation=='3') {
  expression+='3';
}
if (operation=='4') {
  expression+='4';
}
if (operation=='5') {
  expression+='5'
}
if (operation=='6') {
  expression+='6';
}
if (operation=='7') {
  expression+='7';
}
if (operation=='8') {
  expression+='8';
}
if (operation=='9') {
  expression+='9';
}
console.log (expression);
}
function equals (operation) {


  if (operation== '=') {
    if (eval(expression)==Infinity) {
      document.getElementById('addition').innerHTML="Error";
    }
    else{

  document.getElementById('addition').innerHTML=eval(expression):
    }

}

  try {
    eval(expression)
  }
  catch(err) {
    document.getElementById('adddition').innerHTML="Error";
  }
}
