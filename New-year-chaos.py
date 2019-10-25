#!/bin/python3

import math
import os
import random
import re
import sys

# New year chaos problem in hackerrank
# Complete the minimumBribes function below.
def minimumBribes(q):
    n = len(q)
    dup = q.copy()
    no_of_swaps = 0
    for i in range(1,n):
        j = i - 1
        key = dup[i]
        while j>= 0 and key < dup[j]:
            dup[j],dup[j+1] = dup[j+1],dup[j]
            no_of_swaps += 1
            j-=1
        dup[j+1] = key

    for i,j in enumerate(q):
        if j - i -1 < 3 or j - i -1 < -3:
            pass
        else:
            print("Too chaotic")
            return
    print(no_of_swaps)


if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        n = int(input())
        q = list(map(int, input().rstrip().split()))
        (minimumBribes(q))
