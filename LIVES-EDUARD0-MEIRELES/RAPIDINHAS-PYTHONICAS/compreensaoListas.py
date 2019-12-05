# Dúdivas: Criei uma função que leia um texto enorme
# E quebre ele em várias linhas, cada uma com 76 caracteres


def TextBreak(text):
    breakText = text[0:76]
    if(breakText):
        return print(breakText + "\n")
    else:
        null

# TextBreak("Lilian sua linda pelo amor de deus para de ser tao gostosa assim só que nao")


# Desta forma, usamos:
# 1-um arquivo .txt externo
# 2- reaproveitamos o código função através de funções
# 3- utilizamos tipagem para os dados de entrada na função
# 4- testamos usando o assert para verificar se de fato o loop está percorrendo até o index 76
# 5- e percorrermos todas os caracteres com um loop
# 6 - e samos um tal de 'List Compreenhension'
def dist_chars(text: str, n:int) -> list:
    return [text[i: i + n]
     for i in range(0, len(text), n)]

with open("clarisse.txt") as _file:
        resultado = dist_chars(_file.read(), 76)
        print(resultado)

assert len(resultado[0]) == 76