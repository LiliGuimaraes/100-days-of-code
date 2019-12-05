from random import randint
from time import sleep

print("-" * 15)
print("Esse é o JO\n")
sleep(1)
print("Esse é o KEN\n")
sleep(1)
print("Esse é o PÔHH !! \n")


options = ('PEDRA', 'PAPEL', 'TESOURA')
computador = randint(0, 2)
print(f"O computador escolheu {options[computador]}")

print('''
Suas opções são:
[0] PEDRA
[1] PAPEL
[2] TESOURA
''')

perguntar = int(input("Digite a sua jogada \n"))

if computador == 0:
    if perguntar == 0:
        print("Empate!")
    elif perguntar == 1:
        print("Jogador perdeu")
    elif perguntar == 2:
        print("Computador venceu")
    else:
        print("Operacao invalida")

elif computador == 1:
    if perguntar == 0:
        print("Computador perdeu")
    elif perguntar == 1:
        print("Empate!")
    elif perguntar == 2:
        print("Jogador venceu")
    else:
        print("Operacao invalida")
elif computador == 2:
    if perguntar == 0:
        print("Jogador venceu")
    elif perguntar == 1:
        print("Computador venceu")
    elif perguntar == 2:
        print("Empate!")
    else:
        print("Operacao invalida")
else:
    print("Operacao invalida")
