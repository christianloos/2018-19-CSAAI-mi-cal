var num1;
var num2;
var op;

function main()
{
   var uno = document.getElementById('uno');
   var dos = document.getElementById('dos');
   var tres = document.getElementById('tres');
   var cuatro = document.getElementById('cuatro');
   var cinco = document.getElementById('cinco');
   var seis = document.getElementById('seis');
   var siete = document.getElementById('siete');
   var ocho = document.getElementById('ocho');
   var nueve = document.getElementById('nueve');
   var cero = document.getElementById('cero');

   var suma = document.getElementById('suma');
   var resta = document.getElementById('resta');
   var mult = document.getElementById('mult');
   var div = document.getElementById('div');

   var igual = document.getElementById('igual');
   var reset = document.getElementById('reset');

   var result = document.getElementById('display');
}


   uno.onclick = () => {
      result.textContent = result.textContent + "1";
   }
   dos.onclick = () => {
      result.textContent = result.textContent + "2";
   }
   tres.onclick = () => {
      result.textContent = result.textContent + "3";
   }
   cuatro.onclick = () => {
      result.textContent = result.textContent + "4";
   }
   cinco.onclick = () => {
      result.textContent = result.textContent + "5";
   }
   seis.onclick = () => {
      result.textContent = result.textContent + "6";
   }
   siete.onclick = () => {
      result.textContent = result.textContent + "7";
   }
   ocho.onclick = () => {
      result.textContent = result.textContent + "8";
   }
   nueve.onclick = () =>{
      result.textContent = result.textContent + "9";
   }
   cero.onclick = () => {
      result.textContent = result.textContent + "0";
   }


   suma.onclick = () => {
      num1 = result.textContent;
      op = "+";
      clear();
   }
   resta.onclick = () => {
      num1 = result.textContent;
      op = "-";
      clear();
   }
   mult.onclick = () => {
      num1 = result.textContent;
      op = "*";
      clear();
   }
   div.onclick = () => {
      num1 = result.textContent;
      op = "/";
      clear();
   }

   igual.onclick = () => {
      num2 = result.textContent;
      calc();
   }

   reset.onclick = () => {
    resetear();
   }


   function clear(){
     result.textContent = "";
   }
   function resetear(){
      result.textContent= "";
      num1 = 0;
      num2 = 0;
      op = "";
   }

   function calc(){
      var res = 0;
      switch (op){
         case "+":
         res = parseFloat(num1) + parseFloat(num2);
         break;

         case "-":
         res = parseFloat(num1) - parseFloat(num2);
         break;

         case "*":
         res = parseFloat(num1) * parseFloat(num2);
         break;

         case "/":
         res = parseFloat(num1) / parseFloat(num2);
         break;
      }
      resetear(); //hay que resetear manualmente
      result.textContent = res;
      display.innerHTML = res;

   }
