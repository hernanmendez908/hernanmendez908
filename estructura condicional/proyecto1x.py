"""evaluar la edad ingresada
0>= y <2, eres un baby
2>= y <12, eres un niño
12>= y <17, eres un adolecente
18>= y <40, eres un adulto joven
40>= y <60, eres un adulto madura
>=60, eres un adulto mayor
"""
edad=int(input("ingrese la edad: "))
if edad >=0 and edad <2:
    print("eres un baby")
elif edad >=2 and edad <12:
    print("eres un niño(a)")
elif edad >=12 and edad <18:
    print("eres un adolecente")
elif edad >=18 and edad <40:
    print("eres un adulto joven")
elif edad >=40 and edad <60:
    print("eres un adulto maduro")
elif edad >=60:
    print("eres un adulto mayor")
else:
    print("esto no es una edad..por favor verifique")
