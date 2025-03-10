

**Module IV: Introduction to Machine Learning**

This module introduces the fundamental concepts and techniques of machine learning, a core component of data science. It covers supervised, unsupervised, and reinforcement learning, along with essential concepts like model training, evaluation, and dealing with overfitting.

**13. Machine Learning Algorithms : Supervised Learning– Classification, Regression, Unsupervised Learning – Clustering, Dimensionality Reduction , Reinforcement Learning**

*   **Machine Learning (ML):** A field of study that gives computers the ability to learn without being explicitly programmed. (HKP 1.5.2, CS 1.3.2)
    *   Goal: To build models from data that can make predictions or decisions.
    *   Key Idea: Algorithms "learn" patterns from data and generalize to new, unseen data.

*   **Types of Machine Learning:**

    *   **Supervised Learning:** (HKP Chapters 8 & 9, CS Chapter 9)
        *   Training data includes *labels* or *target values*.
        *   Goal: Learn a mapping from input features to output labels.
        *   **Classification:** Predicts a *categorical* (discrete) class label.
            *   Examples: Spam detection, image recognition, credit risk assessment.
            *   Algorithms: Logistic Regression, Decision Trees, Support Vector Machines (SVMs), Naive Bayes, k-Nearest Neighbors (k-NN), Neural Networks.
        *   **Regression:** Predicts a *continuous-valued* output.
            *   Examples: Predicting house prices, stock prices, temperature.
            *   Algorithms: Linear Regression, Polynomial Regression, Support Vector Regression.

    *   **Unsupervised Learning:** (HKP Chapters 10 & 11, CS Chapter 10)
        *   Training data does *not* include labels.
        *   Goal: Discover patterns, structures, or groupings in the data.
        *   **Clustering:** Group similar data objects into clusters.
            *   Examples: Customer segmentation, document analysis, anomaly detection.
            *   Algorithms: k-means, DBSCAN, hierarchical clustering.
        *   **Dimensionality Reduction:** Reduce the number of variables while preserving important information.
            *   Examples: Principal Component Analysis (PCA), feature selection, feature extraction.
        * **Density Estimation:** learn about underlying distribution in the data.
        * **Association Rule Mining:** finding relations and rules.

    *   **Reinforcement Learning:** (HKP, CS 10.5)
        *   An agent learns to make a sequence of decisions by interacting with an environment.
        *   Goal: Maximize a cumulative reward.
        *   Examples: Game playing, robotics, resource management.

**14. Test/Train Split, Model Training, Bias and Variance, Overfitting and Underfitting**

*   **Test/Train Split:** (HKP 8.5)
    *   Divide the available data into two sets:
        *   **Training Set:** Used to build (train) the model.  (Typically larger, e.g., 70-80% of the data).
        *   **Test Set:**  Used to *evaluate* the model's performance on *unseen* data. (Typically smaller, e.g., 20-30% of the data).
    *   Purpose: To get a realistic estimate of how well the model will generalize to new data.
    *   Methods:
        *   **Holdout Method:** Randomly split the data into training and test sets.
        *   **Cross-Validation:**  Partition the data into k folds.  Train on k-1 folds, test on the remaining fold. Repeat k times, using a different fold for testing each time.  Average the results.
        *   **Bootstrap:** Sample the data with replacement to create multiple training sets.

*   **Model Training:** (HKP, CS Chapters 8 & 9)
    *   The process of learning a model from the training data.
    *   Algorithms adjust model parameters to minimize a loss function (e.g., squared error, cross-entropy).
    *   Optimization methods (e.g., gradient descent) are used to find the best parameter values.

*   **Bias and Variance:** (HKP, OS)
    *   **Bias:** Error due to overly simplistic assumptions in the learning algorithm. High bias leads to *underfitting* (the model is too simple to capture the underlying patterns in the data).
    *   **Variance:** Error due to the model's sensitivity to fluctuations in the training data. High variance leads to *overfitting* (the model learns the training data too well, including noise, and doesn't generalize well to new data).
    *   **Bias-Variance Tradeoff:**  A fundamental concept in machine learning.  Simpler models tend to have high bias and low variance.  More complex models tend to have low bias and high variance. The goal is to find a model with the right balance.

* **Underfitting**
   * When model is not able to capture the relationship between input features and output.
* **Overfitting**
   * When a statistical model or machine learning fits exactly against its training data.
**15. Evaluation**

*   **Evaluation Metrics:** (HKP 8.5.1, OS Chapter 8)
    *   **Accuracy:**  (TP + TN) / (P + N)  (overall correctness)
    *   **Error Rate:** (FP + FN) / (P + N)  (overall incorrectness)
    *   **Sensitivity (Recall, True Positive Rate):** TP / P (proportion of actual positives correctly identified)
    *   **Specificity:** TN / N  (proportion of actual negatives correctly identified)
    *   **Precision:** TP / (TP + FP) (proportion of predicted positives that are actually positive)
    *   **F-measure (F1-score):** Harmonic mean of precision and recall: 2 * (Precision * Recall) / (Precision + Recall)
    *   **Area Under the ROC Curve (AUC):**  A measure of a classifier's ability to distinguish between classes.  Plots True Positive Rate (TPR) vs. False Positive Rate (FPR) at various threshold settings.
    *   **Mean Squared Error (MSE):**  Average squared difference between predicted and actual values (for regression).
    *   **Root Mean Squared Error (RMSE):**  Square root of MSE.
    *   **Mean Absolute Error (MAE):**  Average absolute difference between predicted and actual values.

*   **Model Selection:** Choosing the "best" model among a set of candidate models, often based on performance on a validation set or using cross-validation.
*   **Statistical Tests of Significance:** Used to determine if differences in model performance are statistically significant (e.g., t-test).

**Python Examples (using scikit-learn, NumPy, pandas):**

```python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.cluster import KMeans

# Example 1: Linear Regression (Supervised Learning)
# Generate some sample data
np.random.seed(0)
X = np.random.rand(100, 1) * 10  # 100 data points, 1 feature
y = 2 * X + 1 + np.random.randn(100, 1) # Linear relationship + noise

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a linear regression model
model = LinearRegression()

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
print("Mean Squared Error:", mean_squared_error(y_test, y_pred))
print("R-squared:", r2_score(y_test, y_pred))



# Example 2: k-NN Classification (Supervised Learning)
# Generate sample data for two classes
np.random.seed(0)
X = np.concatenate([np.random.randn(50, 2) + [2,2],
                   np.random.randn(50, 2) + [-2,-2]])
y = np.concatenate([np.zeros(50), np.ones(50)]) # Class labels (0 and 1)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create a k-NN classifier (k=3)
knn = KNeighborsClassifier(n_neighbors=3)

# Train the classifier
knn.fit(X_train, y_train)

# Make predictions
y_pred = knn.predict(X_test)

# Evaluate the classifier
print("Accuracy:", accuracy_score(y_test, y_pred))
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
print("Classification Report:\n", classification_report(y_test, y_pred))


# Example 3: k-means Clustering (Unsupervised Learning)
# Generate sample data (no labels needed)
X = np.concatenate([np.random.randn(50, 2) + [2,2],
                    np.random.randn(50, 2) + [-2,-2],
                    np.random.randn(50, 2) + [2,-2]])
# Create a k-means model (k=3)
kmeans = KMeans(n_clusters=3, random_state=0, n_init=10)

# Fit the model to the data (no labels provided!)
kmeans.fit(X)

# Get cluster assignments
labels = kmeans.labels_

# You can visualize the clusters, but you don't have "true" labels to compare against.
# (Visualization code would go here using matplotlib, as shown in previous examples.)
print("Cluster assignments:", labels) #example output
#calculate evaluations
#inertia, also known as sum of squared distances
print(kmeans.inertia_)
from sklearn.metrics import silhouette_score
score = silhouette_score(X, kmeans.labels_, metric='euclidean')
print(score)

```

Key points in these examples:

*   **Data Splitting:** `train_test_split` is crucial for evaluating model generalization.
*   **Model Creation:**  `LinearRegression()`, `KNeighborsClassifier(n_neighbors=3)`,  `KMeans(n_clusters=3)` create instances of the respective models.
*   **Model Training:** The `.fit()` method is used to train the models on the training data.
*   **Prediction:** The `.predict()` method is used to make predictions on new data.
*   **Evaluation:** Various metrics are used to assess model performance.  Note that for k-means (unsupervised), we don't have accuracy in the same sense. Instead.
*   **Libraries:** These examples use:
    *   `numpy` for numerical operations.
    *   `pandas` (though not heavily used here, it's essential for data manipulation).
    *   `sklearn.model_selection`: For splitting data.
    *   `sklearn.linear_model`: For linear regression.
    *   `sklearn.neighbors`: For k-NN.
    *   `sklearn.cluster`: For k-means.
    *  `sklearn.metrics`: For evaluation metrics.
