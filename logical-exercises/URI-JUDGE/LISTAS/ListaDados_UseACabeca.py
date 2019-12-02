phrase = "Don't panic!"
plist = list(phrase)

# Transforme a frase em "on tap"
lettersInNewPhrase = ['o', 'n', 't', 'a', 'p']
new_phrase = []
trashList = []

for i in range(4):
    plist.pop()
plist.pop(0)
plist.remove("'")
plist.extend([plist.pop(),plist.pop()])
plist.insert(2,plist.pop(3))
print(plist)

