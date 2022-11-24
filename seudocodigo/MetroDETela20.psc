Algoritmo MetroDETela
	Definir n,presio,total,descuento Como Real
	Escribir "escriba el precio de la tela";
	Leer precio
	Escribir "Escriba el total de tela comprada";
	Leer n
	total<-precio*n
	si n<3 Entonces
		descuento<-total*.10
	SiNo
		descuento<-total*.20
	FinSi
	
	Escribir "El total a pagar por (mt) es: ", peso ,total-descuento
	Escribir "El descuento total por (mt) es: ", peso , descuento
	
FinAlgoritmo
