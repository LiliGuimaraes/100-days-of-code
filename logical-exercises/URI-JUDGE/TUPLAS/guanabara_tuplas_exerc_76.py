
#  estruturas complexas, dicionário de dicionário
listagem = (
    'Castanha-do-Pará', 69.90,
    'Castanha-de-Caju', 59.90,
    'Amendoim', 9.90,
    'Damasco', 23.90
)
print("-" * 40)
print(f'{"LISTAGEM DE PREÇOS":^40}' )
print("-" * 40)

for pos in range(0, len(listagem)):
    # valores pares demonstram o nome do item
    # valores ímpares demonstram o preço do item
    if pos % 2 == 0:
        print(f'{listagem[pos]:.<30}', end='')
    else:
        print(f'R${listagem[pos]:>7.2f}')

print("-" * 40)

