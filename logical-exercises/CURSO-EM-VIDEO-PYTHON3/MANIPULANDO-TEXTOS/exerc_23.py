numero = str(input('Digite um número entre 0 e 9999: \n'))
print(type(numero))
milhares = numero[0:1]
centenas = numero[1:2]
dezenas = numero[2:3]
unidades = numero[3:4]
print(f'Milhares:{milhares}, Centenas: {centenas}, Dezenas: {dezenas}, Unidade: {unidades}')
