base = int(input("digitar a base do retangulo"))
altura = int(input("digitar a altura do retangulo"))

area = base * altura
perimetro = base*2 + altura*2

def ispar(v):
    if v%2 == 0:
        return "é par"
    else:
        return "é impar"

print("area",area,ispar(area))

print("perimetro",perimetro,ispar(perimetro))