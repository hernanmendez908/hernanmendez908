
//Aplicacion para evaluar la fiebre de una persona
var temp;

//capturar los datos de entrada
temp=parseFloat(prompt("ingrese su temperatura en °C:"));

//proceso para evaluar la fiebre 
if (temp >=38) {
  document.write("la teperatura " +temp+ " °C indica fiebre");
} else {
    document.write("la teperatura " +temp+ " °C indica paciente sin fiebre"); 
}

