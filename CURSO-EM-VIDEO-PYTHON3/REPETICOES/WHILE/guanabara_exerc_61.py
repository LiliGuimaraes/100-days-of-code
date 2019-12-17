print("*" * 30)
print("-- PROGRESSÃO ARITMÉTICA --")
print("*" * 30)

number = int(input("Digite um número: \n"))
razao = int(input("Digite a razão da PA: \n"))

# variavel do item
termo = number
# variavel contadora
temp = 1
while temp <= 10:
    print("{} -> ".format(termo), end="")
    termo += razao
    temp += 1
print("FIM")
