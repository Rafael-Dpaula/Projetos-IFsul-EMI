A = int(input("Numero A"))
B = int(input("Numero B"))

if A<B:
    for i in range(B,A, +1):
        print(i)
else:
    for i in range(A,B, -1):
        print(i)