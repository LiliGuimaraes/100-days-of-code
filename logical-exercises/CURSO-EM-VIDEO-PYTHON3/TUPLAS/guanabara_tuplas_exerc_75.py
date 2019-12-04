numero = (int(input('Digite o primeiro número: ')),
          int(input('Digite o segundo número: ')),
          int(input('Digite o terceiro número: ')),
          int(input('Digite o quarto número: ')))

print(f'aqui esta a sua tula com os numeros digitados: {numero}')

# Quantas vezes apareceu o valor 9?
print(f"O número 9 apareceu {numero.count(9)} vezes.")
# Em qual posicao foi digitado o primeiro valor 3?

if 3 in numero:
    print(f"O número 3 apareceu na {numero.index(3)}ª posição")
else:
    print("O valor 3 não foi digitado em nenhuma posição.")
# Quais foram os números pares?
for num in numero:
    if num % 2 == 0:
        print(f'os números pares nesta tupla são: {num}', end='')
