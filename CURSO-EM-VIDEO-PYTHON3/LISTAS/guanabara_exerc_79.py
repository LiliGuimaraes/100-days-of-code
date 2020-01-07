values = []
tempValues = []
digit = True
while digit:
    userDigit = int(input("Digite um número: "))
    if digit not in values:
        values.append(userDigit)
        prossegue = str(input("Novo número cadastrado. Deseja adicionar um novo número? [S/N]\n")).upper()
        if prossegue == 'S':
            userDigit = int(input("Digite um novo número: "))
            values.append(userDigit)
        else:
            print("Programa encerrado! Os valores na lista final, de forma ordenada são: ", values.sort())
    else:
        tempValues.append(userDigit)
        print("já tem esse número,fofa!")
        print("Esse é o TempValues", tempValues)

print()
print("Programa encerrado")
