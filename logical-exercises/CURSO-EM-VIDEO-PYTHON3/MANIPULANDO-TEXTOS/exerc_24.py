cidade = str(input('Digite o nome de uma cidade: \n'))
cidade.strip()
cidade.lower()
if(cidade[:5] == 'santo'):
    print(f'A cidade {cidade} começa com o prefixo SANTO')
else:
    print(f'A cidade {cidade} não inicia com o prefixo SANTO ')
