''' EXERCÍCIO
O Banco Alfa Beta S/A está oferendo a seus clientes uma taxa de juros compostos de 1,5% ao mês
para aplicações no prazo de no mínimo 3 meses e
valores superiores a $ 1 milhão.
Um determinado cliente, resolveu aplicar $ 1.200.000,00
nesta modalidade de aplicação financeira pelo prazo de 6 meses.
Assinale a alternativa correta que corresponde
ao valor aproximado dos juros que o banco pagará ao cliente.
'''

'''
A = P(1 + r/n)^nt
Onde: 
A = Valor Futuro
P = Valor Presente
r = taxa de juros anual nominal
n = número de vezes que o juro é capitalizado por ano
t = número de anos
'''

import math

print("O programa calcula os juros compostos.", "\n")

p_usuario = input("Valor presente (capital inicial): ")
r_usuario = input("Taxa de juros anual nominal (ao mes): ")
n_usuario = input("Quantidade de vezes que o juros é capitalizado por ano: ")
t_usuario = input("Número de anos: ")

if (p_usuario.isdigit() and r_usuario.isdigit() 
    and n_usuario.isdigit() and t_usuario.isdigit()):

    p = float(p_usuario)
    r = float(r_usuario) / 100
    n = float(n_usuario)
    t = float(t_usuario)

    a = p * (1 + r / n) ** (t * n)

    print()

    mensagem =  "Total investido: %.2f      \n"
    mensagem += "Total de juros: %.3f       \n"
    mensagem += "Composição do ano: %.1f    \n"
    mensagem += "Total de anos: %d          \n"
    mensagem += "Total ganho em juros: %.2f \n"
    print(mensagem % (p, r, n, t, a))

else:
    print("Um ou mais valores informados são inválidos.")

montante = C * ((1 + i) ** tempo)
          