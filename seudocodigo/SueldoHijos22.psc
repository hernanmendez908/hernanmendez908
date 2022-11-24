Algoritmo SueldoHijos22
	Definir sueldo Como Real
	Definir Nombre Como Caracter
	Definir numHijos Como Entero;
	Escribir "ingrese el nombre del empleado";
	Leer Nombre
	Escribir "Ingrese el numero de hijos del empleado";
	Leer numHijos	
	Escribir "ingrese el sueldo del emplado";
	Leer sueldo
	
	bono<-sueldo*(numHijos*5/100);
	descuento<-sueldo*4/100;
	transporte<-sueldo*10/100;
	total<-sueldo+bono+transporte-descuento
	
	Escribir "El sueldo total devengado del empleado ", Nombre, " es de: ", total, " cop";
	Escribir "La bonificacion del empleado ",Nombre, " es de: ",bono, " cop";
	Escribir "El descuento para el empleado ",Nombre, " es de: ",descuento, " cop";
	Escribir "El axilio de transporte para el empleado ",Nombre, " es de: ",transporte, " cop";
	
FinAlgoritmo
