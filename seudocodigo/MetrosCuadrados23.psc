Algoritmo MetrosCuadrados23
	Definir mt Como Entero
	Definir tr,ci,rp,vc Como Real
	Escribir "ingrese la cantidad de metros cuadrados";
	Leer mt
	
	tr<-mt*1000000
	ci<-(30*tr)/100
	rp<-(70*tr)/100
	vc<-tr/12
	Escribir "total del terreno es: ",tr;
	Escribir "el 30% de la cuota inivial es de: ", ci;
	Escribir "el 70% de la cuota faltante es de: ",rp;
	Escribir "las cuotas a pagar durante 12 meses es de: ", vc;
	
FinAlgoritmo
