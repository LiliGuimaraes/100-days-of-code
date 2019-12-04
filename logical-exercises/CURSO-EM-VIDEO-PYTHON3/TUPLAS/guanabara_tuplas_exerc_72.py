cont = (
    'zero','um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenone', 'vinte'
)

# crie um programa que tenha tupla totalmente preenchida com uma contagem por extenso,
# do zero até vinte

while True:
    number = int(input('Digite um número de 0 a 20: '))
    if 0 <= number <= 20:
        break
print(f'Voce digitou o número {cont[number]}')
