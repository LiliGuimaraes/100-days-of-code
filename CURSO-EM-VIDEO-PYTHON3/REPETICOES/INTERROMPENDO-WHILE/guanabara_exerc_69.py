qtd_maiores_idade = 0
qtd_homens = 0
qtd_mulheres_20anos = 0
count = 0

while True:
    idade = int(input("idade: "))
    sexo = " "
    while sexo not in 'FM':
        sexo = str(input("Sexo [M/F]: ")).strip().upper()[0]

    if idade > 18:
        qtd_maiores_idade = qtd_maiores_idade + 1
    if sexo == 'M':
        qtd_homens = qtd_homens + 1
    if sexo == 'F' and idade < 20:
        qtd_mulheres_20anos = qtd_mulheres_20anos + 1

    choise = " "
    while choise not in 'SN':
        choise = str(input("Quer continuar cadastrando [S/N]? ")).strip().upper()
    
    if choise == "N":
        break
    
print("{} tem mais do que 18 anos.".format(qtd_maiores_idade))
print("{} são homens.".format(qtd_homens))
print("{} são mulheres com mais de 20 anos.".format(qtd_mulheres_20anos))
