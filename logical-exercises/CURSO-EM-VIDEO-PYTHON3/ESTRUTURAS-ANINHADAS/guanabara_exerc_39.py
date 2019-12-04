import datetime

data_nascimento = int(input("Digite o ano de nascimento: "))
today = datetime.date.today()
current_year = today.year
calc_idade = current_year - data_nascimento
print(f'A sua idade é {calc_idade} anos ')


if(calc_idade < 18):
    tempo_alistamento = (18 - calc_idade) 
    print(
        f"Ele ainda vai se alistar ao serviço militar daqui a {tempo_alistamento} anos")
elif(calc_idade == 18):
    print("É a hora de se alistar")
else:
    print("Já passou do período de alistamento")
