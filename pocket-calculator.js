var expression="";
function fourfunction(operation) {
  if (operation == '+') {
   expression+="+";
}
if (operation=='x') {
  expression+="*";
}
if (operation == ('/') {
  expression+="/";
}
if (operation=='-') {
  expression+='-';
}

console.log(expression);

}
function numbers(operation) {
  if (operation=='.') {
    expression+='.';
}
if (operation=='0') {
  expression+='0';
}
if (operation=='1') {
  expression+='1';
}
