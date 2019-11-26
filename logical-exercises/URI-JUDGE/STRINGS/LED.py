def LED(number_repeat, teste_one, teste_two, teste_three):
    res_teste_one = list(map(int, str(teste_one)))
    sum = 0
    for item_one in res_teste_one:
        if((item_one == 1)):
            sum += 2
        elif((item_one == 2)):
            sum += 5
        elif(item_one == 3):
            sum += 5
        elif (item_one == 4):
            sum += 4
        elif (item_one == 5):
            sum += 5
        elif (item_one == 6):
            sum += 6
        elif (item_one == 7):
            sum += 3
        elif (item_one == 8):
            sum += 7
        elif (item_one == 9):
            sum += 6
        else:
            sum += 6
    print("leds" + " " + str(sum))

    res_teste_two = list(map(int, str(teste_two)))
    sum_two = 0
    for item_two in res_teste_one:
        if((item_two == 1)):
            sum_two += 2
        elif((item_two == 2)):
            sum_two += 5
        elif(item_two == 3):
            sum_two += 5
        elif (item_two == 4):
            sum_two += 4
        elif (item_two == 5):
            sum_two += 5
        elif (item_two == 6):
            sum_two += 6
        elif (item_two == 7):
            sum_two += 3
        elif (item_two == 8):
            sum_two += 7
        elif (item_two == 9):
            sum_two += 6
        else:
            sum += 6
    print("leds" + " " + str(sum_two))

    res_teste_three = list(map(int, str(teste_three)))
    sum_three = 0
    for item_three in res_teste_three:
        if((item_three == 1)):
            sum_three += 2
        elif((item_three == 2)):
            sum_three += 5
        elif(item_three == 3):
            sum_three += 5
        elif (item_three == 4):
            sum_three += 4
        elif (item_three == 5):
            sum_three += 5
        elif (item_three == 6):
            sum_three += 6
        elif (item_three == 7):
            sum_three += 3
        elif (item_three == 8):
            sum_three += 7
        elif (item_three == 9):
            sum_three += 6
        else:
            sum += 6
    print("leds" + " " + str(sum_three))

# LED(3, 1234567890, 344, 234)


dic = {
    '0': '6',
    '1': '2',
    '2': '5',
    '3': '5',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '3',
    '8': '7',
    '9': '6'
}

i = 0
j = 0
number_of_cases = int(input())

while i < number_of_cases:
    sum = 0
    cases = int(input())
    print(cases)
    str_cases = str(cases)
    print type(cases)
    print type(str_cases)
    for j in range(len(str_cases)):
        sum += int(dic[str_cases[j]])
    print("%i leds" % sum)
    i += 1
