# Crie uma tupla com os 10 primeiros colocadas no Brasileirao.
# Mostre os 5 primeiros
# Os ultimos 4 colocadas
# Times em ordem alfabética
# Qual posicão está o chapecoense


times = (
    'Corinthians','Palmeiras',
    'Cruzeiro', 'São Paulo','Botafogo',
    'Curitiba','Ponte Preta', 'Flamengo',
    'Botagofo','Chapecoense','Grêmio', 'Galão','Vasco'
)



print(f'Os 5 primeiros colocados no Brasileirão são: {times[0:5]}')
print(f'Os últimos 4 colocados são: {times[-4:]}')
print(f'Os times de ordem alfabética: {sorted(times)}')
print(f'A posição do Chapecoense é: {times.index("Chapecoense")}')