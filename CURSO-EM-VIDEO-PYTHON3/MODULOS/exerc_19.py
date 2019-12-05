from random import shuffle
from random import choice

print('-' * 10)
print('Sorteio de alunos')
print('-' * 10)

lista = []
sort_alunos_1 = str(input('Escreva o nome do primeiro aluno \n'))
lista.append(sort_alunos_1)
sort_alunos_2 = str(input('Escreva o nome do segundo aluno \n'))
lista.append(sort_alunos_2)
sort_alunos_3 = str(input('Escreva o nome do terceiro aluno \n'))
lista.append(sort_alunos_3)
sort_alunos_4 = str(input('Escreva o nome do quarto aluno \n'))
lista.append(sort_alunos_4)


print(f'O nome do aluno selecionado é {choice(lista)}')
print(
    f'E a ordem de apresentação dos alunos neste dia éééééé {shuffle(lista)}')
