minutos = float(input("Quantos minutos foi a sua ligação? \n"))
valor_final = float(input("Qual o valor cobrado por esta ligação? \n"))

tarifa_normal =  minutos / valor_final
tarifa_reduzida = tarifa_normal / 2
print("Desta forma, a tarifa de base usada para calcular o valor final foi de R${:.2f}".format(tarifa_normal))
print("Se fosse na tarifa reduzida, o valor da conta seria: {:.2f} ".format(tarifa_reduzida))