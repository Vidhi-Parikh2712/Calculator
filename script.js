function clearScreen() 
{
  document.getElementById("result").value = "";
}
 

 function display(value) 
 {
  document.getElementById("result").value += value;
 }

 function calculate() 
 {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
 }

 function del()
 {
   let temp = document.getElementById("result").value;
   return document.getElementById("result").value = temp.length - 1;
 }