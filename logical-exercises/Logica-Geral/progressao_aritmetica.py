first_number = int(input("Digite o primeiro número: \n"))
razao = int(input("Digite a razão da Progressão Aritmética: \n"))

decima_position = first_number + (10 - 1) * razao

# for c in range(first_number, decima_position + razao, razao):
#     print("{}".format(c), end="-> ")

# Segunda forma de criar uma PA em Python
cont = 1
total = 0
mais = 10

while mais != 0:
    total += mais
    while cont <= mais:
        print("{}".format(first_number), end="-> ")
        first_number += razao
        cont += 1
    print('PAUSA')
    mais = int(input("Quantos números você quer mostrar a mais?\n"))
print("Finalizamos o programa com {} termos".format(total)))
