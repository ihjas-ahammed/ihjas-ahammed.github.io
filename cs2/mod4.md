

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


**16. Linear Regression**

*   **Concept:** (HKP Chapter 9, OS Chapter 5, CS 3.8)
    *   Models a *linear* relationship between a dependent (response) variable, *y*, and one or more independent (predictor) variables, *x*.
    *   Finds the "best-fit" line (or hyperplane in higher dimensions) that minimizes the sum of squared errors between the predicted and actual values.
*   **Simple Linear Regression:** One predictor variable.
    *   Model: *y = β0 + β1x + ε*
        *   β0: Intercept (value of y when x = 0).
        *   β1: Slope (change in y for a one-unit change in x).
        *    ε: Error term (accounts for the variability not explained by the linear relationship).
*   **Multiple Linear Regression:**  Multiple predictor variables.
    *   Model: *y = β0 + β1x1 + β2x2 + ... + βpxp + ε*
*   **Assumptions:**
    *   Linearity: A linear relationship exists between the independent and dependent variables.
    *   Independence of errors: Errors (residuals) are independent of each other.
    *   Homoscedasticity: The variance of the errors is constant across all levels of the independent variables.
    *   Normality: The errors are normally distributed.
*   **Model Evaluation:**
    *   R-squared (coefficient of determination): Proportion of variance in the dependent variable explained by the model.  Ranges from 0 to 1; higher values indicate a better fit.
    *   Adjusted R-squared:  Modifies R-squared to account for the number of predictors in the model.  Penalizes models with unnecessary predictors.
    *   p-values:  Assess the statistical significance of the coefficients.  A low p-value (typically < 0.05) suggests that the corresponding predictor is significantly related to the response.
    *   Residual plots:  Used to check the assumptions of linearity, constant variance, and normality of errors.

**Python Example (Linear Regression):**

```python
import numpy as np
import pandas as pd
import statsmodels.api as sm
from sklearn.model_selection import train_test_split

# Load data (assuming a CSV file with columns 'x' and 'y')
data = pd.read_csv('your_data.csv')
X = data['x']  # Predictor variable
y = data['y']  # Response variable

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Add a constant term to the predictor variable (for the intercept)
X_train = sm.add_constant(X_train)
X_test = sm.add_constant(X_test)

# Create and fit the model (Ordinary Least Squares)
model = sm.OLS(y_train, X_train)
results = model.fit()

# Print model summary
print(results.summary())

# Make predictions on the test set
y_pred = results.predict(X_test)

# Evaluate (using R-squared as an example)
print("R-squared:", results.rsquared) #using the training data
from sklearn.metrics import r2_score
print("Test R-squared", r2_score(y_test, y_pred))

# You can also examine residuals:
# residuals = y_test - y_pred
# (Plotting residuals can help assess model assumptions)
```

**17. k-Nearest Neighbors (k-NN)**

*   **Concept:** (HKP 9.5, OS Chapter 8, CS 9.4)
    *   A *lazy learner* (instance-based learning):  Doesn't build a model explicitly during training.  Instead, it stores the training data.
    *   Classification: For a new data point, find the k nearest training data points ("neighbors") and assign the most frequent class label among those neighbors.
    *   Regression: For a new data point, average the values of the k nearest neighbors.
*   **Key Components:**
    *   **k:** The number of neighbors to consider.  A tuning parameter.
    *   **Distance Metric:**  How to measure the "closeness" between data points (e.g., Euclidean distance, Manhattan distance, cosine similarity).
*   **Advantages:**
    *   Simple to implement.
    *   No training phase (for basic implementation).
    *   Can adapt to new data easily.
*   **Disadvantages:**
    *   Computationally expensive for large datasets (needs to calculate distances to all training points for each prediction).
    *   Sensitive to the choice of k and the distance metric.
    *   Sensitive to irrelevant features and the curse of dimensionality.
    *   Does not provide an explicit model (no coefficients to interpret).

**Python Example (k-NN):**  (Provided in previous response, includes classification. Regression is similar, using `KNeighborsRegressor`.)

**18. k-means Clustering**

*   **Concept:** (HKP 10.2.1, OS Chapter 8, CS 10.3.1)
    *   An *unsupervised* learning method.
    *   Partitions data into k clusters, where each data point belongs to the cluster with the nearest mean (centroid).
    *   Iterative algorithm that aims to minimize the within-cluster sum of squares (WCSS).
*   **Algorithm:**
    1.  Choose k initial cluster centroids (randomly or using a smarter initialization method like k-means++).
    2.  Assign each data point to the closest centroid (using Euclidean distance or another distance metric).
    3.  Recalculate the centroids of each cluster (by taking the mean of the points in the cluster).
    4.  Repeat steps 2 and 3 until convergence (cluster assignments no longer change or a maximum number of iterations is reached).
*   **Advantages:**
    *   Relatively simple and efficient.
    *   Scalable to large datasets.
*   **Disadvantages:**
    *   Requires specifying k in advance.
    *   Sensitive to initial centroid selection (can converge to local optima).
    *   Assumes clusters are spherical and equally sized, which is often not the case.
    *   Sensitive to outliers.

**Python Example (k-means):** (Provided in previous response)

**19. Naive Bayes**

*   **Concept:** (HKP 8.3, OS Chapter 4)
    *   A probabilistic classifier based on Bayes' theorem.
    *   "Naive" assumption:  Features are conditionally independent given the class label.  This simplifies the calculations.
*   **Bayes' Theorem:**
    P(C|X) = (P(X|C) * P(C)) / P(X)
    *   P(C|X): Posterior probability of class C given data X.
    *   P(X|C): Likelihood of the data X given class C.
    *   P(C): Prior probability of class C.
    *   P(X): Evidence (probability of the data).
*   **Naive Bayes Classifier:**
    1.  For a given data point X = (x1, x2, ..., xn), calculate P(X|Ci)P(Ci) for each class Ci
        .
    2.  Predict the class label with the highest probability.
    3.  Because of the conditional independence assumption:
        P(X|Ci) = P(x1|Ci) * P(x2|Ci) * ... * P(xn|Ci)
*   **Advantages:**
    *   Simple and fast.
    *   Works well with high-dimensional data.
    *   Performs well even when the independence assumption is violated.
*   **Disadvantages:**
    *   The independence assumption is often unrealistic.
    *   Can be affected by zero probabilities (use Laplace smoothing).

**Python Example**

```python

# (Using a simplified text example and scikit-learn)
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Sample email data
emails = [
    "Get a free iPhone now!",
    "Meeting reminder for tomorrow",
    "Win a lottery prize",
    "Project update and deadlines",
    "Claim your free gift card",
    "Team meeting agenda"
]
labels = [1, 0, 1, 0, 1, 0]  # 1: spam, 0: ham

# Preprocess text (tokenization and counting)
vectorizer = CountVectorizer()
X_email = vectorizer.fit_transform(emails)

# Split data
X_train_email, X_test_email, y_train_email, y_test_email = train_test_split(X_email, labels, test_size=0.3, random_state=42)

# Train Naive Bayes classifier
nb_classifier = MultinomialNB()
nb_classifier.fit(X_train_email, y_train_email)

# Predict and evaluate
y_pred_email = nb_classifier.predict(X_test_email)
accuracy_email = accuracy_score(y_test_email, y_pred_email)
print(f"Spam Filter (Naive Bayes) Accuracy: {accuracy_email}")
```

**20. Application of Naive Bayes - Spam Filtering**
     * Text Classification.
     * Convert the text into vectors.

**21. Singular Value Decomposition**

* Mathematical tool and is related to Principal component analysis and factor analysis.
* Is used in data compression, noise reduction, and dimensionality reduction.

**22. Applications of Supervised, Unsupervised and Reinforcement Learning**
   * Applications of supervised learning includes:
      * Text Categorization
      * Fraud detection
      * Image recognition
      * Medical Diagnosis
   * Applications of unsupervised learning includes:
       * Customer Segmentation
       * Anomaly detection
       * Data visualization
       * Gene expression data analysis
   * Applications of reinforcement learning includes:
      * Game Playing
      * Robotics

