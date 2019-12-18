soma = 0
count = 0
while True:
    n = int(input("digite um maldito numero (digite 999 para parar): "))
    if n == 999:
        break
    soma += n
    count += 1
print("Quantidade números: {}\nSoma: {}".format(count, soma))
