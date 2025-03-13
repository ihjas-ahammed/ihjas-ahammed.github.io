# Exp 8: Spam Filtering

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

data = {
  "emails": [
    "Get a free iPhone now!",
    "Meeting reminder for tomorrow",
    "Win a lottery prize",
    "Project update and deadlines",
    "Claim your free gift card",
    "Team meeting agenda"
  ],
  "labels": [1, 0, 1, 0, 1, 0]
}

df = pd.DataFrame(data)
print(df)

# Preprocess text (tokenization and counting)
vectorizer = CountVectorizer()
X_email = vectorizer.fit_transform(df["emails"])

# Split data
X_train_email, X_test_email, y_train_email, y_test_email = train_test_split(X_email, labels, test_size=0.3, random_state=42)

# Train Naive Bayes classifier
nb_classifier = MultinomialNB()
nb_classifier.fit(X_train_email, y_train_email)

# Predict and evaluate
y_pred_email = nb_classifier.predict(X_test_email)
accuracy_email = accuracy_score(y_test_email, y_pred_email)
print("Accuracy: ", accuracy_email)