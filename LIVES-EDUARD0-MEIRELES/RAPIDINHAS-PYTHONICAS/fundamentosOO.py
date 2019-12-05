# CLASSE - o molde, o molde do Mickey
# INSTANCIA
# OBJETOS  - o que o molde gera, o boneco do Mickey

class Personagem:
    # Criamos um molde para nosso rato, ou seja, um personagem
    # Que coisas o molde (classe) rato precisa ter? Seram seus objetos
    # SELF = É como se o objeto falasse de si mesmo. E mais alguma coisa
    def __init__(self, cor, nome,dono):
        # o molde-classe MOUSE criou um OBJETO da cor preta
        self.cor = cor
        self.nome = nome
        self.dono = dono
        #  retorno "eu-mesmo" de uma forma visualmente gráfica
    def __repr__(self):
        return f'Personagem: {(self.nome)},{(self.cor)},{(self.dono)}'

pateta = Personagem('Mickey','preto','Walt Disney')
print(pateta)