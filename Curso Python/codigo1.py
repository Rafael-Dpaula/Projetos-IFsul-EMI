#ler dois lados de um qudrado, calculando a área e o perimetro. Apresentando os resultados, informando se o valor resultante é par ou impar

base = int(input("digitar a base do retangulo"))
altura = int(input("digitar a altura do retangulo"))

area = base * altura
perimetro = base*2 + altura*2

print("a área é: ",area)
if area%2 == 0:
        print("área é par")
else:
        print("área é ímpar")

print("o perimetro é: ",perimetro)
if(perimetro%2 == 0):
    print("o perimetro é par")

else:
    print("o perimetro é impar")

