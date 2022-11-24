//diseñe un algoritmo que muestre un menu donde las opciones sean 
//1_suma
//2-resta
//3_multiplicacion
//4-divicion

var op;
var n1, n2,resultado;

op=parseInt(prompt("Escoja una opcion del menu"));

switch (op) {
        case 1:
             n1=parseInt(prompt("Digite el primer numero: "));
             n2=parseInt(prompt("Digite el segundo numero: "));
             resultado=n1+n2;
             document.write("La Suma de: "+n1+" + "+n2+" es: "+resultado);
        break;
        case 2:
            n1=parseInt(prompt("Digite el primer numero: "));
             n2=parseInt(prompt("Digite el segundo numero: "));
             resultado=n1-n2;
             document.write("La Resta de: "+n1+" - "+n2+" es: "+resultado);
        break;
        case 3:
            n1=parseInt(prompt("Digite el primer numero: "));
             n2=parseInt(prompt("Digite el segundo numero: "));
             resultado=n1*n2;
             document.write("La Multiplicacion de: "+n1+" * "+n2+" es: "+resultado);
        break;
        case 4:
            n1=parseFloat(prompt("Digite el primer numero: "));
             n2=parseFloat(prompt("Digite el segundo numero: "));
             resultado=n1/n2;
             document.write("La Division de: "+n1+" / "+n2+" es: "+resultado);
        break;

    default:
        document.write("Seleccione una opcion valida del menu")
        break;
}



