values = []
maior = 0
menor = 0

for digit in range(0, 5):
    values.append(int(input(f'Digite um valor na posição {digit}: ')))
    # Lógica: eu não tenho valor nenhum. Você fala um número, no caso, 
    # Qual é maior valor desta lista? Só pode ser 7, é o único
    if digit == 0: 
        maior = menor = values[digit]
    else:
        if values[digit] > maior:
            maior = values[digit]
        if values[digit] < menor:
            menor = values[digit]
print("*" * 30)
print("Os valores da LISTA são: ", values)
print(f"O maior valor digitado foi {maior} nas posições", end=" ")
for position, valor in enumerate(values):
    if valor == maior:
        print(f"{position} ... ", end=" ")
print()

print(f"O menor valor digitado foi {menor} nas posições", end=" ")
for position, valor in enumerate(values):
    if valor == menor:
        print(f"{position} ... ", end=" ")
print()

