 
import random

i = 0
while i<10:
    maquina = random.randrange(1,20,1)
    jogador = int(input("escolha um numero de 1 a 20 "))
    print("maquina jogou: ",maquina)
    print("jogador jogou: ",jogador)
    if(jogador >= maquina):
        print("jogador venceu esta jogada")
    else:
        print("jogador perdeu esta jogada")
    i+=1
