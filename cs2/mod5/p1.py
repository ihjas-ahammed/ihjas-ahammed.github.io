import pandas as pd
data = {
    'id':[101,102,103,104,105,106,107,108,109,110],
    'name': ["John","Emma","David","Spohia","Michael","William","Olivia","Ava","Ethan","Lily"],
    'age':[28,32,41,25,38,42,29,26,38,39],
    'salary':[50000,60000,70000,40000,55000,65000,45000,38000,52000,58000],
    'department': ['Sales','Marketing','IT','Sales','IT','Marketing','IT','Sales','Marketing','IT'],
    'experience': [5,7,10,3,6,12,4,3,8,9]
}

df = pd.DataFrame(data)
print("Age")
print("mean: ",df['age'].mean())
print('median: ',df['age'].median())
print('mode: ',df['age'].mode()[0])
print("variance: ", df['age'].var())
print("standard deviation: ", df['age'].std())
print()

print()
print("Salary")
print("mean: ",df['salary'].mean())
print('median: ',df['salary'].median())
print("variance: ", df['salary'].var())
print("standard deviation: ", df['salary'].std())
print()
print("Experience In Years")
print("mean: ",df['experience'].mean())
print('median: ',df['experience'].median())
print("variance: ", df['experience'].var())
print("standard deviation: ", df['experience'].std())