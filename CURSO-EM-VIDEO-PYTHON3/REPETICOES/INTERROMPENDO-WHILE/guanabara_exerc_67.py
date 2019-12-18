print("*" * 20)
print("Jogo da Tabuada" * 20)
print("*" * 20)


while True:
    user = int(input("Tabuada de número: "))
    for n in range(1, 11):
        print(f"{user} x {n} = {user * n}")
print("Programa encerrado")
