//app para evaluar un numero entre 10 y 100
var n;

//capturando la entrada 
n=parseInt(prompt("Digite el numero entero"))


//evaluamos el proceso numerico
if (n>10 && n<100) {
    document.write("El numero: " + n + " Esta entre 10 y 100");
} else {
    document.write("El numero: " + n + " No esta entre 10 y 100"); 
}