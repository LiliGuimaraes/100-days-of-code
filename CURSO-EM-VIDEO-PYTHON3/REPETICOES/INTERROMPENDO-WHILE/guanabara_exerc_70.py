total = totmil = cont = menor = 0
barato = " "

while True:
    nome = " "
    nome = str(input("Nome do produto: ")).strip().upper()
    preco = float(input("Preco: "))
    total += preco

    if preco > 1000:
        totmil += 1

    if cont == 1 or preco < menor:
        menor = preco
        barato = produto

    choise = " "
    while choise not in "SN":
        choise = str(
            input("Quer cadastrar novos produtos [S/N]? ")).strip().upper()
    if choise == 'N':
        break
print("\n \n{:^40}".format(" Fim do programa"))
print("Total gasto: {:.2f}".format(total))
print("{} produtos desta compra custam mais de R$ 1.000,00".format(totmil))
print("{} é o valor do produto mais barato, que custa R${:.2f} ".format(barato, menor))
