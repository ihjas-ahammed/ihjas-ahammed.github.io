# Data Preprocessing

We're diving into *data preprocessing*, that crucial step before you can do any cool analysis. It's all about handling missing values, noisy data (stuff with errors), and those pesky *outliers* (values that are way out there, deviating a *lot* from the center). We also integrate (combine), transform (fix formats, units), and reduce data (getting just what we need).

Why bother? Because real-world data is a mess! It's:

*   **Incomplete:** Missing stuff.
*   **Noisy:** Full of errors and outliers.
*   **Inconsistent:** Duplicates, different formats... you name it.
*   **Redundant:** Contains unnecessary, repeated attributes.

### Advantages of Preprocessing (Why We Do This!)

*   **Improved Quality:** Better data, better results!
*   **Enhanced Model Performance:** Your models will thank you.
*   **Reduce Complexity:** Less data, faster processing.
*   **Facilitate Model Interpretability:** Makes it easier to understand what's going on and get better predictions.

## Data Cleaning

This is where we transform raw data into a usable format. We:

*   **Handle Missing Values:** Fill 'em in or get rid of 'em (carefully!).
*   **Correct Errors:** Fix those typos and mistakes.
*   **Remove Duplicates:** Get rid of the repeats.
*   **Type Conversion:** Make sure everything is the right data type.

We pick the right technique based on what the data looks like. The goal? *Accurate, consistent, and reliable* data for analysis.

### Dealing with missing values
* **Ignore the tuple** Not good, it will cause data loss.
* **Fill Manually** time consuming.
* **Global Constant** All missing values are replaced with a constant. But can be misleading.
* **Use mean or median.**
* **Predict most probale value** Effective, but complex

### Noisy Data

* Definition: random error or variance.

### Dealing with Noisy Data

*   **Binning:** Sorting into bins.
*   **Regression:** Fit to a curve.
*   **Clustering:** Find the outliers.
* **Combine human-computer power.**

### Data cleaning as a process

1. **Detect discrepancy:** Detect problem using domain knowledge.

   *   Metadata
   *   Overloading
   *   Rules
   *   Tools
2.  **Transform Data:** Correct detected problems
    * ETL
    *  Scripts

## Noise Identification

*   **Visualizations:** Use graphs (like boxplots!) to see anomalies.
*   **Z-Score:** How far is a value from the mean? Big Z-score = potential outlier!

### Outlier Detection Methods:

*   **Statistical Methods:** Z-score, Standard Deviation.  If it's more than 3 standard deviations away, it's probably an outlier.
*   **Interquartile Range (IQR):** Box plots!  Anything outside the "whiskers" (Q1 - 1.5\*IQR or Q3 + 1.5\*IQR) is an outlier.  It's *robust* (not easily fooled by extreme values).
*   **Isolation Forest:**  This fancy algorithm isolates outliers – they're easier to "separate" from the rest.
*   **DBSCAN:**  Finds points in low-density areas – those are your outliers. Good when outliers aren't defined by overall stats, but by how "lonely" they are.

## Data Integration

Combining data from different places (databases, files, etc.) into one big, happy dataset. We also do *data transformation* here, because different sources might have different formats and units.
### Challenges:
* **Identify:** Matching identical entities across different sources.
* **Redundancy:** Find and removing duplicate attributes.
* **Conflict:** Resolving differences in data representations.
* **Schema:** Matching attributes of various structures.
* **Tuple Duplication**

## Data Transformation

Fixing formats and units during integration. A key part is *standardization* and *normalization*.

### Standardization and Normalization

We're converting units to a new dimension, within a specific range, using the mean and standard deviation. Think of it like scaling everything to be between 0 and 1, no matter how big or small the original values were.

#### Standard Scaling / Z-Score:

```
x_i' = (x_i - μ) / σ
```

*   `x_i'` is the new, standardized value.
*   `x_i` is the original value.
*   `μ` is the mean.
*   `σ` is the standard deviation.

#### Min-Max Scaling:

```
x_i' = (x_i - x_min) / (x_max - x_min)
```

*   `x_i'` is the scaled value.
*   `x_min` and `x_max` are the minimum and maximum values.

#### Robust Scaling (Good for Outliers!):

```
x_i' = (x_i - Q1) / (Q3 - Q1)
```

*   `Q1` and `Q3` are the quartiles (like in a box plot).

#### Normalizer:

```
x_i' = x_i / x
```

*  `x` is square root of sum of all square values.

### Other transformation methods:
* **Smoothing**
* **Attribute Construction**
* **Aggregation**
* **Discretization:** convert numeric to categorical data.
   * Binning
   * Histogram
   * Clustering
   * Decision Tree
   * Correlation
* **Concept Hierarchy:** Replace with high-level concepts.

## Data Cleaning in Python

### Correcting Typos with `.replace()`:

```python
df['column_name'] = df['column_name'].replace({'mutible': 'immutable', 'erro': 'error'})
```

### Imputation (Dealing with Missing Values) using scikit-learn:

```python
from sklearn.impute import SimpleImputer
imputer = SimpleImputer(strategy='mean') # Load a mean imputer
df['column_name'] = imputer.fit_transform(df[['column_name']]) #Replace missing values with mean. Use [['']] for 2D arrays.
```

### Removing Duplicates:

```python
df = df.drop_duplicates()
```
### Remove rows with missing values.

```python
df = df.dropna()
```

### Using `fillna()`:

```python
df['column_name'].fillna(replace_with, inplace=True)
# Example: Replace missing 'Age' with the mean age:
df['Age'].fillna(df['Age'].mean(), inplace=True)
```

### Removing Outliers using Z-score:

```python
from scipy import stats
import numpy as np

z_score = np.abs(stats.z_score(df[['Age']])) # Z-scores for 'Age'
df_cleaned = df[(z_score < 3).all(axis=1)]  # Keep rows where ALL Z-scores are less than 3
```

## Data Reduction

### Dimensionality Reduction: Less is More!

We're reducing the number of *features* (columns) while keeping the important stuff.

*   **Benefits:**  Gets rid of noise, speeds things up, helps with visualization, and prevents *overfitting* (when your model learns the training data too well and doesn't generalize).

#### Principal Component Analysis (PCA): The King of Dimensionality Reduction

*   **What it does:**  Creates new features called *principal components* that capture the most *variance* (spread) in the data.
*   **Process:**
    1.  *Standardize* the data (mean = 0, variance = 1).
    2.  Find the *principal components* (directions where the data varies the most).
    3.  Project the data onto these components – boom, fewer dimensions!
*   **Key Idea:**  Keep the important patterns, throw away the noise.
*   **Use Case:**  High-dimensional data with correlations, good for machine learning and visualization.

### Numerosity reduction
* Parametric
 * Regression
 * Log-linear
* Non-Parametric
  * Histograms
  * Clustering
  * Sampling
  * Data cube aggregation
### Data Compression
* Lossless
* Lossy

That's data preprocessing in a nutshell!  It's a bit of work, but it's *essential* for getting good results from your data analysis. Remember, garbage in, garbage out!
