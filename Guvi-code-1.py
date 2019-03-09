''' Sample Testcase 1:
Input : 5
1 2 3 2 1
Output : 
1 2 '''

num_list = [1, 2, 3, 2, 3, 4, 3]
repeated_list = []
def bubblesort(num):
    for i in range(len(num)-1, 0, -1):
        for j in range(i):
            if num[j] > num[j+1]:
                num[j], num[j+1] = num[j+1], num[j]
bubblesort(num_list)
for j in range(len(num_list)-1):
    if num_list[j] == num_list[j+1] and num_list[j] not in repeated_list:
        repeated_list.append(num_list[j])
print(repeated_list)
