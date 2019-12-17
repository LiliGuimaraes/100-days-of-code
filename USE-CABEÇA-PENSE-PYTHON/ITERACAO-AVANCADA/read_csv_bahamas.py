from datetime import datetime
import pprint

# 1 forma
# import csv

# with open('buzzes.csv') as raw_data:
#     for line in csv.DictReader(raw_data):
#         print(line)

# Sem usar CSV READER, crie seu próprio código para ler o csv
# A saída deve conter letras iniciais maiúsculas para o campo DESTINATION
# horário em formato 24h


def convert2ampm(time24: str) -> str:
    return datetime.strptime(time24, '%H:%M').strftime('%I:%M%p')


# abro o csv
with open('buzzes.csv') as data:
    # ignore o cabecalho dessa planilha
    ignore = data.readline()
    # crio um novo dicionario para armazenar as informacoes lidas

    flights = {}
    # leio cada linha, dividindo linha na virgula,
    # retornando chave/valor num novo dicionário, para armazenar valores
    for line in data:
        k, v = line.strip().split(',')
        flights[k] = v
    pprint.pprint(flights)
    print()

    # retornar um dicionário,
    # em que a chave será o destino em letras iniciais maiúsculas
    # e o valor será uma lista de horários por destino
    # armazenas num outro dicionário temporário
    flights2 = {}
    for k, v in flights.items():
        flights2[convert2ampm(k)] = v.title()
    pprint.pprint("Os valores do novo dict:", flights2)
