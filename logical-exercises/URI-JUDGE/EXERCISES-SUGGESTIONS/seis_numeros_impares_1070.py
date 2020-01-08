# Leia um valor inteiro X.
# Em seguida apresente os 6 valores ímpares consecutivos a partir de X,
# um valor por linha, inclusive o X ser for o caso.

x = int(input("Digite um número inteiro qualquer:\n"))

for i in range(1, 13):
    if x % 2 != 0:
        print("O próximo número ímpar é: ", x)
    x = x + 1


