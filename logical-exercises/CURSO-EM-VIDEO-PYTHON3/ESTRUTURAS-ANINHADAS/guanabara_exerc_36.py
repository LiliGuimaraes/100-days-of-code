valor_casa = float(input("Qual o valor da casa que você quer financiar?"))
valor_salario_cidadao = float(input("Qual é o seu salário, querido cidadão?"))
qtd_parcelas = int(
    input("Em quantas parcelas você quer financiar esse sonho da casa própria?"))

valor_final = valor_casa / qtd_parcelas
rule = valor_salario_cidadao / (30 * 100)
if(valor_final > rule):
    print('O valor das parcelas são maiores do que 30% seu salário. Renegocie este financiamento')
else:
    print("Vamos fechar negócio?")
