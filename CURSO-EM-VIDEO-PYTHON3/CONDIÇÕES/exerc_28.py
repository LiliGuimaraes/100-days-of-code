import random

pc_guess = random.randint(0,5)
user_guess = int(input('Pensei num número entre 0 e 5. Adivinhe qual foi! \n'))

if(pc_guess ==  user_guess):
    print(f"Você acertou. Pensamos juntos no número {pc_guess}")
else:
    print(f"Pensamos em números diferentes. Eu pensei no número {pc_guess} e você no {user_guess}")