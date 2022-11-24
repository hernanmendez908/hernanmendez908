//definimos variables
var peso,estatura,imc
//capturamos entradas
peso=parseFloat(prompt("digite el peso en kg: "));
estatura=parseFloat(prompt("digite la estatura en mts: "));
//proceso__capturamos
imc=peso/(estatura*estatura);
//proceso y salida
if (imc <18.5) {
    document.write("BAJO PESO");
}else if(imc >=18.5 && imc <=24.9){ 
    document.write("PESO NORMAL");
}else if(imc >=25 && imc <=29.9){
    document.write("SOBREPESO");
 }else if(imc >=30 && imc <=34.9){
    document.write("OBECIDAD I");
 }else if(imc >=35 && imc <=39.9){
    document.write("OBECIDAD II");
 }else if(imc >=40 && imc <=49.9){
    document.write("OBECIDAD III");
 }else if(imc >=50){
    document.write("OBECIDAD IV");
 }else {
    Document.write("Escriba los valores numericos esperados...");
 }