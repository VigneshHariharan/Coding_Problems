s="}{(([])[])[]}[]}"
def isBalanced(s):
    dict = {
        "}" : "{",
        ")" : "(",
        "]" : "["
        }
    opn = "{[("
    close = "]})"
    temp = []
    for i in s:
        if i in opn:
            temp.append(i)
        elif i in close:
            if len(temp) == 0 or dict[i] != temp[len(temp)-1]:
                return "NO"
            else:
                temp.pop()
    if len(temp) == 0:
        return "YES"
print(isBalanced(s))