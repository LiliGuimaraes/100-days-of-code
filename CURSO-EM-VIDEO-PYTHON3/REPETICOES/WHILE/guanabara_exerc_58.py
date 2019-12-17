from random import randint

print("*" * 10)
print("JOGO DO ADIVINHA")
print("*" * 10)
print("\n")

num_random = randint(0, 10)

acertou = False
count = 0
while not acertou:
    jogador = int(input("Digite uma aposta: \n"))
    count += 1
    if num_random == jogador:
        acertou = True
    else:
        if jogador < num_random:
            print("MAIS.. Tente mais uma vez")
        elif jogador > num_random:
            print("MENOS ... Tente mais uma vez")
print("Parabéns, você acertou!\nO número que eu pensei foi o {}.\nForam necessárias {} tentativas para você acertar o que o gênio estava pensando.".format(num_random, count))
