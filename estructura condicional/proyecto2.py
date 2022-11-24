#App Que Al Ingresar El Valor De Compra
#Si El Valor De La Compra Es Mayor A 100.000
#Entonces Calcule El Descuento(7%) Y Total De La Compra
valor_compra=float(input("Digite el valor de la compra"))
if valor_compra>100000:
    descuento=valor_compra*0.07
    total=valor_compra-descuento
    print("subtotal: ", valor_compra)
    print("descuento: ", descuento)
    print("total de compra:", total)
else:
    descuento=valor_compra*0.0
    total=valor_compra-descuento
    print("subtotal: ", valor_compra)
    print("descuento: ", descuento)
    print("total de compra:", total)