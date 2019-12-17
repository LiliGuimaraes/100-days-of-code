sexo = str(input("Qual o seu sexo? [F/M]: \n")).strip().upper()[0]
while sexo not in "MmFf":
    sexo = str(
        input("Digite novamente o seu sexo [F/M]: \n")).strip().upper()[0]
print(" Sexo do tipo {}registrado com sucesso".format(sexo))
