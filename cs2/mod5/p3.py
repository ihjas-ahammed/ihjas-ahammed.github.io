# Exp 3: Data Cleaning
import pandas as pd
import numpy as np
from sklearn.impute import SimpleImputer
import seaborn as sns
from scipy import stats

data = {
    'Name':['John','Emma','David','Sophia','Michael','William',np.nan,'Ava','Ethan','Lily'],
    'Age':[28,32,41,np.nan,38,42,29,26,150,39],
    'Salary':[50000,60000,8000000,40000,55000,65000,45000,38000,52000,58000],
    'City':['nyc','la','chi','nyc','la','chi','nyc','la','chi',np.nan]
}

df = pd.DataFrame(data)
print("Initial table: ")
print(df) # inital table
# replace null values on Age and Salary

mean_imputer = SimpleImputer(strategy='mean')
median_imputer = SimpleImputer(strategy='median')

df['Age'] = median_imputer.fit_transform(df[['Age']])
df['Salary'] = mean_imputer.fit_transform(df[['Salary']])

df['City'].fillna(df['City'].mode()[0],inplace=True)

# rewrite city names into standard format

df['City'] = df['City'].replace({
    'nyc':'New York',
    'la':'Los Angeles',
    'chi':'Chicago'
})

df =df.dropna()

# use z_score to remove outliers

z_score = np.abs(stats.zscore(df[['Age','Salary']]))
df_cleaned = df[(z_score < 2).all(axis=1)]

print("Final Table: ")
print(df_cleaned) # final table