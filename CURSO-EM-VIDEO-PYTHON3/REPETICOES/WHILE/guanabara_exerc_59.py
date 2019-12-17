number_1 = int(input("Digite um numero: \n"))
number_2 = int(input("Digite um segundo numero: \n"))

print('''
[1] - SOMAR
[2] - MULTIPLICAR
[3] - NOVOS NÚMEROS
[4] - SAIR
''')
escolha = int(input("Escolha a operação que deseja:\n"))

while escolha == 3:
    number_1 = int(input("Digite um novo numero: \n"))
    number_2 = int(input("Digite um novo segundo numero: \n"))
    print('''
[1] - SOMAR
[2] - MULTIPLICAR
[3] - NOVOS NÚMEROS
[4] - SAIR
''')
    escolha = int(input("Escolha novamente a operação que deseja: \n"))

if escolha == 1:
    soma = number_1 + number_2
    print("A soma é: {}".format(soma))
elif escolha == 2:
    multiplicacao = number_1 * number_2
    print("A multiplicação é: {}".format(multiplicacao))

