velocidade_carro = int(input("Qual a velocidade do seu posante? \n"))
velocidade_max = 80
calc_multa = (velocidade_carro - velocidade_max) * 7
velocidade_diff = velocidade_carro - velocidade_max
if(velocidade_carro > 80):
    print(f"Vai com calma aí nesses {velocidade_carro} Km/h meu fi.\n Nessa velocidade você foi multado em R${calc_multa} reais, representando {velocidade_diff} Km/h além do permitido pela legislação")
else:
    print("Vai seguindo reto")
