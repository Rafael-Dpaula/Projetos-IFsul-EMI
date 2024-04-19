A = int(input("Numero A"))
B = int(input("Numero B"))
if A<B:
    while A<B:
        A+=1
        print(A)
else:
    while B<A:
        B+=1
        print(B)
