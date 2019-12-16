current_idade = int(input("Qual sua idade você começou a trabalhar? \n"))
anos_trabalhados = int(input("Quantos anos de trabalho você tem? \n"))
suposta_idade = current_idade + anos_trabalhados
print("A sua idade é: ", suposta_idade)

# Primeira forma de fazer o calculo
# perfil_trabalhador = current_idade + anos_trabalhados
# print("Esta persona tem perfil: ", perfil_trabalhador)

# if(perfil_trabalhador < 100):
#     idade_min = 100 - perfil_trabalhador
#     print("Segundo o seu perfil: " , idade_min)
# else:
#     print("Pode se aposentar")


another_form_calc = (100 - suposta_idade) / 2
idade_minima = suposta_idade + another_form_calc
print("A idade mínima para você se aposentar é: ",idade_minima)