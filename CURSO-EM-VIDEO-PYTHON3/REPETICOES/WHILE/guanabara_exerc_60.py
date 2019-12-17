from math import factorial
print("*" * 30)
print("-- JOGO DO FATORIAL --")
print("*" * 30)

number = int(input("\nDigite um número que queira saber o seu fatorial:\n"))
# f = factorial(number)
# print("O valor de {}! é: {}".format(number, f))

c = number
f = 1
while c > 0:
    print("{}".format(c), end='')
    print(' x ' if c > 1 else ' = ', end="")
    f *= c
    c -= 1
print("{}".format(f))
