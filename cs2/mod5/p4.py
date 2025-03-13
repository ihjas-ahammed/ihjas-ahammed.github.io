# Exp 4: Binary Classification

from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# Load dataset
diabetes = load_diabetes()
df = pd.DataFrame(diabetes.data, columns=diabetes.feature_names)
print("Diabates from sklearn is used here")
df['target'] = diabetes.target

# Convert target to binary classification (above or below median)
median_target = df['target'].median()
df['target'] = (df['target'] >= median_target).astype(int)  # 1 if above median, else 0

# Split data
X = df.drop(columns=['target'])
Y = df['target']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42, stratify=Y)

# Train k-NN classifier
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, Y_train)
y_pred = knn.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(Y_test, y_pred)

print("Accuracy:", accuracy)