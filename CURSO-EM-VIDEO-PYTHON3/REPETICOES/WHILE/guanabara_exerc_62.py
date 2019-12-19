print("*" * 30)
print("-- PROGRESSÃO ARITMÉTICA COMPLEXA --")
print("*" * 30)

number = int(input("Digite um número: \n"))
razao = int(input("Digite a razão da PA: \n"))

# variavel do item
termo = number
# variavel contadora
temp = 1
total = 0
request = 10

while request != 0:
    total += request
    while temp <= total:
        print("{} -> ".format(termo), end="")
        termo += razao
        temp += 1
    print("PAUSA")
    request = int(input("Quantos termos você quer mostrar a mais? \n"))
print("FIM")
