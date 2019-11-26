import inspect

def contracts(number_drop,number):
    res = list(map(int, str(number)))
    finalResult = []
    for i in res:
        if(i != number_drop):
            finalResult.append(i)
        res = finalResult
    print res

contracts(5,5444)