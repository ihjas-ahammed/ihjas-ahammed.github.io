# Exploratory Data Analysis (EDA)

*   **Purpose:**
    *   Summarize main characteristics of datasets.
    *   Identify problems within the data.
    *   Determine data readiness for analysis.
    *   Inform data preparation techniques.
    *   Influence the choice of algorithms for training machine learning (ML) models.
*   **Methods:**
    *   Statistical methods.
    *   Visualizations.
*   **Tools (Python):**
    *   pandas
    *   numPy
    *   matplotlib
    *   seaborn
    *   plotly
*   **Outcome:** Enables effective data exploration and insight generation to guide further modeling and analysis.


**Key Objectives and Techniques of Exploratory Data Analysis (EDA)**

*   **Objectives:**
    *   Detection of mistakes in the data.
    *   Checking of assumptions about the data.
    *   Preliminary selection of appropriate models.
    *   Determining relationships among explanatory variables.
    *   Assessing the direction and rough size of relationships between explanatory and outcome variables.
*   **Techniques:**
    *   Work by selectively highlighting certain aspects of the data while hiding others to reveal patterns and insights.


**Classification of Exploratory Data Analysis (EDA) Methods**

*   **Two-way Cross-Classification:**
    *   **Graphical vs. Non-graphical:**
        *   **Non-graphical:** Involve calculating summary statistics.
        *   **Graphical:** Summarize data visually using diagrams or pictures.
    *   **Univariate vs. Multivariate (usually Bivariate):**
        *   **Univariate:** Analyze a single variable at a time.
        *   **Multivariate:** Analyze multiple variables simultaneously, often focusing on the relationship between two variables (bivariate).

**Univariate Non-Graphical EDA Techniques**

*   **Focus:** Understanding the underlying distribution of a single variable and making inferences about the population based on a sample. Also includes outlier detection.
*   **Categorical Data:** Analysis centers on the range of values and their frequencies.
*   **Quantitative Data:**
    *   Preliminary assessments of the population distribution are made using the sample data.
    *   Characteristics inferred include:
        *   **Center:** Measures like mean, median, and mode. Mean is most common, but the median is preferred for skewed distributions or when outliers are a concern.
        *   **Spread:** Measures like variance, standard deviation, and interquartile range (IQR). Spread indicates how far data values are likely to be from the center.
        *   **Modality:** Number of peaks in the distribution.
        *   **Shape:** Overall form of the distribution.
        *   **Outliers:** Extreme values that deviate significantly from the rest of the data.
    *   **Skewness:** Measure of asymmetry in the distribution.
    *   **Kurtosis:** Measure of the "peakedness" of the distribution relative to a normal (Gaussian) distribution.


## Introduction to python libraries

 <table>
    <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
    </tr>
    <tr>
            <td>Alice</td>
            <td>24</td>
            <td>50,000</td>
    </tr>
    <tr>
            <td>Bob</td>
            <td>27</td>
            <td>60,000</td>
    </tr>
    <tr>
            <td>Charlie</td>
            <td>22</td>
            <td>55,000</td>
    </tr>
    <tr>
            <td>David</td>
            <td>32</td>
            <td>70,000</td>
    </tr>
    <tr>
            <td>Eve</td>
            <td>29</td>
            <td>65,000</td>
    </tr>
</table>

The above data can be represented in python using dictionaries:


```python
data = {
    name: ["Alice","Bob","Charlie","David","Eve"],
    age: [24,27,22,32,29],
    salary: [50000,60000,50000,30000,65000]
}
```

We use python libraries like:

1. Panda
2. MathplotLib
3. Seaborn

To work on the data, first by coverting it into a *data frame* by using panda

```python
import panda as pd
df = pd.DataFrame(data)
```

### Data Frame

It is a 2D data structure in python with rows and columns

#### Features

* Two Dimensional
* Labeled Axes
* Flexible and Powerful

