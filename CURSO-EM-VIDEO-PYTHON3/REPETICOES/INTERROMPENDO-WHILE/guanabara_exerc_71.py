print("*" * 20)
print("--- Caixa Eletrônico ---")

valor = int(input("Qual valor você quer sacar? "))
count = 0

while valor > 0:
    notas_cinquenta = valor % 50
    print("Será entregue {} cédulas de $50,00".format(notas_cinquenta))
    notas_vinte = notas_cinquenta % 20
    notas_dez = notas_vinte % 10
    notas_um = notas_dez % 1
    print("Será entregue {} cédulas de $20,00".format(notas_vinte))
    print("Será entregue {} cédulas de $10,00".format(notas_dez))
    print("Será entregue {} cédulas de $1,00".format(notas_um))
    break
