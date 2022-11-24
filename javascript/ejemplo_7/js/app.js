//funcion que suma 2 numeros 
function sumar() {
    var x,y,suma
     x=document.getElementById("n1").value
     y=document.getElementById("n2").value
     
     suma=parseInt(x)+parseInt(y)
 
     document.getElementById("resultado_suma").innerHTML = "la suma es: "+suma
   }
   //funcion que resta 2 numeros
 function restar() {
    var x,y,resta
     x=document.getElementById("n1").value
     y=document.getElementById("n2").value
     
     resta=parseInt(x)-parseInt(y)
 
     document.getElementById("resultado_resta").innerHTML = "la resta es: "+resta
   
 }
 //funcion que multiplica 2 numeros
 function multiplicar() {
    var x,y,multiplica
     x=document.getElementById("n1").value
     y=document.getElementById("n2").value
     
     multiplica=parseInt(x)*parseInt(y)
 
     document.getElementById("resultado_multiplicacion").innerHTML = "la multiplicacion es: "+multiplica
   
 }
 //funcion que divide 2 numeros
 function dividir() {
    var x,y,division
     x=document.getElementById("n1").value
     y=document.getElementById("n2").value
     
     division=parseFloat(x)/parseFloat(y)
 
     document.getElementById("resultado_division").innerHTML = "la division es: "+division
   
 }
 