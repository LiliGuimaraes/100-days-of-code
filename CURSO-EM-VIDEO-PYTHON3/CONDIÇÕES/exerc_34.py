salario = float(input("Qual o seu salário?\n"))
round(salario,2)
print(type(salario))
print(salario)
if(salario <= 1.250):
    porcentagem_dez_porcento = round((salario * 0.10) / 100,2)
    salario_final = salario + porcentagem_dez_porcento
    print(f"Você teve um aumento de 10%, e seu salário foi para R$ {salario_final}")
else:
    porcentagem_quinze_porcento = round(((salario * 0.15) / 100),2)
    print(porcentagem_quinze_porcento)
    salario_final = salario + porcentagem_quinze_porcento
    print(f"Você teve um aumento de 15%, e seu salário foi para RS {round(salario_final,2)}")