# Exp 6: Linear Regression

from sklearn.metrics import mean_squared_error,r2_score
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

diabetes = load_diabetes()


df = pd.DataFrame(diabetes.data,columns=diabetes.feature_names)
print("Diabates database is used")

df['target'] = diabetes.target

X = df.drop(columns=['target'])
Y = df['target']

X_train,X_test,Y_train,Y_test =  train_test_split(X,Y,test_size=0.2,random_state=42)

print(X_train.shape)
print(X_test.shape)

model = LinearRegression()
model.fit(X_train, Y_train) #train

y_pred = model.predict(X_test)

m2e = mean_squared_error(Y_test,y_pred)
r2 = r2_score(Y_test,y_pred)

print(f"mean squared error: {m2e: .2f}")
print(f"r2 score: {r2: .2f}")

