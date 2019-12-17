
soma_idade = 0
media_idade = 0
maior_idade_homem = 0
nome_mais_velho = ''
count_mulheres = 0
for p in range(1, 3):
    print("----- {} ª PESSOA -----".format(p))
    nome = str(input("Nome: ")).strip()
    idade = int(input("Idade: "))
    sexo = str(input("Sexo [M/F]: ")).strip()
    soma_idade += idade
    if p == 1 and sexo in 'Mm':
        maior_idade_homem = idade
        nome_mais_velho = nome
    if sexo in "Mm" and idade > maior_idade_homem:
        maior_idade_homem = idade
        nome_mais_velho = nome
    if sexo in 'Fm' and idade < 20:
        count_mulheres += 1


media_idade = soma_idade / 2
print("A média de idade do grupo é de {} .".format(media_idade))
print("O homem mais velho tem {} anos e se chama {} .".format(
    maior_idade_homem, nome_mais_velho))
print("Ao todo são {} mulheres com menos de 20 anos .".format(count_mulheres))
