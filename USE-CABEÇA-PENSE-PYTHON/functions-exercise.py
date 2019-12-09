# First Form
def search4vowels():
    vowels = set('aeiou')
    word = input('Forneça uma palavra para procurar vogais:')
    found = vowels.intersection(set(word))
    return found
print(search4vowels())

# Second Better Form

def search4vowels_one():
    vowels = set('aeiou')
    phrase = input('Forneça uma frase para procurar as vogais: \n')
    return vowels.intersection(set(phrase))
print(search4vowels_one())

#  Third Better Tester Form
''' By this form:
- reduzimos o tamanho da função
- reduzimos o armazenamento na memória de valores em variáveis, subtraindo vowels, found
- tipificamos os valores de entrada nos argumentos, e no dado de saída
'''
def search4letters(phrase:str, letter:str) -> set:
    return set(letter).intersection(set(phrase))
print(search4letters('juliane é uma pessoa bonita','xwyt'))
