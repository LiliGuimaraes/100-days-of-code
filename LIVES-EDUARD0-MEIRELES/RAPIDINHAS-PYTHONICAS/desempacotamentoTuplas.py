t = ('Anna','Vilemberg',25)

# 1 - Desempacotando a tupla em variáveis
nome, sobrenome, idade = t
print(nome)

#  2 - Desempacotamento de variáveis compostas
t2 = (('Eduardo','Mendes'), 25)
nome, sobrenome, idade = t
print(sobrenome)

# 3 - E se eu declarar uma lista
#  e através dela agregar dois valores num único
# como o nome do pai e da minha mae na variavel pais?

l1 = ['Lilian',25,'Márcia','Márcio']
nome, idade,*_pais = l1
print(idade)
print(pais)