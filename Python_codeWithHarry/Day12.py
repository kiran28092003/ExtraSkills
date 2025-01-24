fruit = "Mango"
mangoLen = len(fruit)
print(mangoLen)
print(fruit[0:4]) # including 0 but not 4
print(fruit[1:4]) # including 1 but not 4
print(fruit[:5])
print(fruit[0:-3])
print(fruit[:len(fruit)-3])
print(fruit[-1:len(fruit) - 3])
print(fruit[-3:-1])

# Quick Quiz:
nm = "Harry"
print(nm[-4:-2])
#  H   a   r   r   y
#  0   1   2   3   4   (Forward indexing)
# -5  -4  -3  -2  -1   (Backward indexing)
