from random import randint

print("*" * 20)
print("--- Jogo do Par ou Impar----")

count = 0
temp = True

while temp:
    user = int(input("Digite um valor? \n"))
    computador = randint(1, 10)
    soma = computador + user
    choise = ' '
    while choise not in 'PI':
        choise = str(input("Par ou Ímpar? [P/I] ")).strip().upper()[0]
    print("Você jogou {} e o computador {}.\nTotal de {}".format(user, computador, soma))
    
    if choise == 'P':
        if soma % 2 == 0:
            print("---< Você Ganhou >---")
            count += 1
        else:
            print("---< Você perdeu >---")
            break
    
    elif choise == 'I':
        if soma % 2 != 0:
            print("---< Você Ganhou >---")          
            count += 1
        else:
            print("--- < Você perdeu > ---")
            break
    user = str(input("Vamos jogar novamente? Digite um novo valor [S/N]? \n"))
