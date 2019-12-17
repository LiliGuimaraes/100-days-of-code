print("*" * 10)
print("JORNADA DA TARTARUGA")
print("*" * 10)

print('''
Duas tartarugas estavam juntas
e começaram a caminhar em linha reta em direção a um lago distante.
A primeira tartaruga é sempre mais veloz que a segunda.
''')

primeira_tartaruga_metros = int(
    input("Quantos metros percorreu a primeira tartaruga?\n"))
primeira_tartaruga_dias = int(
    input("Quantos dias ela demorou para percorrer esse percurso \n"))

distancia_percurso = primeira_tartaruga_dias * primeira_tartaruga_metros

print("A distancia total que as tartarugas deevem percorrer é {} metros. \n".format(
    distancia_percurso))

metros_segunda_tartaruga = int(
    input("Digite quantos metros percorreu a segunda tartaruga, a mais molenga? \n"))

tempo_segunda_tartaruga = distancia_percurso / metros_segunda_tartaruga
print(tempo_segunda_tartaruga)
diff = tempo_segunda_tartaruga - primeira_tartaruga_dias

print(
    "A primeira tartaturga teve que esperar {} dias na lagoa pela segunda tartaruga".format(diff))
