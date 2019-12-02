palavras = ('e', 'eu', 'que', 'nada', 'sei', 'da', 'vida',
            'mas', 'suspeito', 'de', 'muita', 'coisa')
# Ensinamento do dia: não tem como percorrer uma lista dentro de uma tupla, e nem o inverso
# Fazer print dentro de for é feioso, use end=''
for palavra in palavras:
    print(f'\n Na palavra {palavra.upper()} temos as vogais: ', end=' ')
    for letra in palavra:
        if letra.lower() in 'aeiou':
            print(letra, end=' ')
