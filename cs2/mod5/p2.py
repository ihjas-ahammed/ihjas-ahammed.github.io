# Exp2: Graphical Analysis

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

data = {
    'id':[101,102,103,104,105,106,107,108,109,110],
    'name': ["John","Emma","David","Spohia","Michael","William","Olivia","Ava","Ethan","Lily"],
    'age':[28,32,41,25,38,42,29,26,38,39],
    'salary':[50000,60000,70000,40000,55000,65000,45000,38000,52000,58000],
    'department': ['Sales','Marketing','IT','Sales','IT','Marketing','IT','Sales','Marketing','IT'],
    'experience': [5,7,10,3,6,12,4,3,8,9]
}

df = pd.DataFrame(data)


plt.figure(10)
sns.histplot(data=df,x='salary',bins=10)
plt.title("Histogram for salary")
plt.show()

sns.boxplot(data=df,y="age",x="department")
plt.title("Boxplot for Age")
plt.xlabel("department")
plt.show()
plt.title("Bubble Chart")
sns.scatterplot(data=df,x='age',y='salary',hue='department',size='experience')
plt.show()


correlationMatrix = df[['age', 'salary','experience']].corr()
sns.heatmap(correlationMatrix,annot=True)
plt.title("Heat Map")
plt.show()

department_counts = df['department'].value_counts()
plt.pie(department_counts,labels=department_counts.index)
plt.title("Pie Chart")
plt.show()