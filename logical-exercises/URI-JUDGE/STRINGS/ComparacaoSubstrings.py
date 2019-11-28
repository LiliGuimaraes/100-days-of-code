first_string = str(raw_input('Digite a primeira palavra: ')).lower()
print(first_string)
second_string = str(raw_input('Digite a segunda palavra: ')).lower()
print(second_string)

first_list = []
second_list = []

for f in first_list:
    first_list.append(f)
print first_list


for s in second_list:
    second_list.append(s)
print second_list


difference = len(first_string)
print difference


for i in first_list:
    for x in second_list:
        if first_list[i] == second_list[x]:
            difference = difference - 1
print(difference)