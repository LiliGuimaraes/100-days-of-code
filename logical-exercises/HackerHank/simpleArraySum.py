arr = [1, 2, 3, 4, 10, 11]

def simpleArraySum(ar):
    soma = 0
    for elem in range(len(ar)):
        soma += ar[elem]
    return print(soma)
simpleArraySum(arr)