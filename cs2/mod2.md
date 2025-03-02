# Exploratory Data Analysis (EDA)
It is the process of examining data to gain insights and understanding. It can be done either by statistical or graphical methods.

*   **Purpose:**
    *   Summarize main characteristics of datasets.
    *   Identify problems within the data.
    *   Determine data readiness for analysis.
    *   Inform data preparation techniques.
    *   Influence the choice of algorithms for training machine learning (ML) models.
*   **Tools Used in Python:**
    *   pandas
    *   numPy
    *   matplotlib
    *   seaborn
    *   plotly

*   **Objectives:**
    *   Detection of mistakes in the data.
    *   Checking of assumptions about the data.
    *   Preliminary selection of appropriate models.
    *   Determining relationships among explanatory variables.
    *   Assessing the direction and rough size of relationships between explanatory and outcome variables.
*   **Techniques:**
    *   Work by selectively highlighting certain aspects of the data while hiding others to reveal patterns and insights.


## Types of EDA

*   **Two-way Cross-Classification:**
    *   **Graphical vs. Non-graphical:**
        *   **Non-graphical:** Involve calculating summary statistics.
        *   **Graphical:** Summarize data visually using diagrams or pictures.
    *   **Univariate vs. Multivariate (usually Bivariate):**
        *   **Univariate:** Analyze a single variable at a time.
        *   **Multivariate:** Analyze multiple variables simultaneously, often focusing on the relationship between two variables (bivariate).

### Univariate Non-Graphical

*  Understanding the underlying distribution of a **single variable** and making inferences about the population based on a sample. Also includes outlier detection.
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

###  Multivariate Non-Graphical Analysis
|Analysing multiple variables without using graphs.

#### Methods:
* **Correlation Matrix**: Shows the relationship strength between multiple variables.
* **Multivariate Regression**: Examines how multiple independent variables affect a dependent variable.
* **Factor Analysis**: Identifies underlying relationships among variables.
* **Principal Component Analysis (PCA)**: Reduces dimensionality while preserving essential information.

### Univariate Graphical Analysis
This involves analyzing a single variable using visual representations to understand its distribution, central tendency, and spread.

#### Key Graphical Techniques:
* **Histogram**: Shows the frequency distribution of a variable.
* **Box Plot**: Displays the median, quartiles, and outliers.

### Multivariate Graphical Analysis
This involves visualizing the relationships between two or more variables using graphs.

## Key Graphical Techniques:

* **Scatter Plot**: Shows the relationship between two numeric variables.
* **Heatmap**: Displays correlations between multiple variables using colors.
* **Bubble Chart**: Similar to a scatter plot but with an added dimension (size of bubbles represents a third variable).

Here's the improved and properly formatted version of your extended EDA notes:  

---

## **Methods of EDA**  

EDA primarily involves:  
1. **Descriptive Statistics** – Numerical summaries of data.  
2. **Data Visualization** – Graphical representations to identify trends and relationships.  

### **Common Visualization Techniques:**  
- **Histograms** – Show data distribution.  
- **Boxplots** – Display quartiles and detect outliers.  
- **Scatter Plots** – Explore relationships between two variables.  
- **Heatmaps** – Represent correlations between variables.  

---

## Descriptive Statistics

Descriptive statistics summarize data using measures of central tendency, dispersion, and shape.  

### Measures of Central Tendency 

These describe the "center" of the data distribution:  

#### Mean (Arithmetic Average):
  $$
  \mu = \frac{1}{N} \sum_{i=1}^{N} x_i
  $$ 

#### Median  
- Middle value when the data is sorted.  
- If **𝑛** is odd:  
  $$
  \text{M} = x_{\frac{n+1}{2}}
$$  
- If **𝑛** is even:  
  $$
  \text{M} = \frac{x_{\frac{n}{2}} + x_{\frac{n}{2}+1}}{2}
  $$  

#### Mode
- Most frequently occurring value in a dataset.  

#### Measures of Dispersion

Dispersion quantifies how spread out the data is.  

#### Range  
$$
\text{Range} = \max(x) - \min(x)
$$  

#### Variance (Spread of Data):  
- **Population Variance (𝜎²):**  
  $$
  \sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2
  $$  
- **Sample Variance (𝑠²):**  
  $$
  s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2
  $$  

#### Standard Deviation (Average Deviation from Mean):
- **Population Standard Deviation (𝜎):**  
$$
  \sigma = \sqrt{\sigma^2}
  $$
- **Sample Standard Deviation (𝑠):**  
  $$
  s = \sqrt{s^2}
  $$  

####Interquartile Range (IQR)
$$
\text{IQR} = Q_3 - Q_1
$$  
- **Q1**: 25th percentile (first quartile).  
- **Q3**: 75th percentile (third quartile).  
- IQR helps detect outliers.  

---

### Skewness and Kurtosis**  

These describe the shape of the data distribution.  

#### Skewness (Measure of Asymmetry)
$$
\text{Skewness} = \frac{1}{n} \sum_{i=1}^{n} \left(\frac{x_i - \bar{x}}{s}\right)^3
$$  
Here ```s``` is Standard devaition
- **Positive Skew** (Right-Skewed): Tail extends to the right.  
- **Negative Skew** (Left-Skewed): Tail extends to the left.  
- **Zero Skew**: Symmetrical distribution.  

#### Kurtosis (Measure of Tailedness)

$$
\text{Kurtosis} = \frac{1}{n} \sum_{i=1}^{n} \left(\frac{x_i - \bar{x}}{s}\right)^4
$$

- **Excess Kurtosis:**  
  $$
  \text{Excess Kurtosis} = \text{Kurtosis} - 3
  $$  
  - **Mesokurtic (≈ 0):** Normal distribution.  
  - **Leptokurtic (> 0):** Heavy tails (more outliers).  
  - **Platykurtic (< 0):** Light tails (fewer outliers).  


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

#### Finding Measures using DataFrame

Since dataframe is still the dictionary, you can find the measures like this:

```python
meanAge = df["age"].mean()
medianAge = df["age"].median()
```

Similarly, we have function for mod, variance etc.

### Visualizations

For graphical representation we use ```matplotlib``` and ```seaborn```

* ```matplotlib``` is used to show the screen and set the screen size
* ```seaborn``` is used to plot the type of graph, like histogram or boxplot.

For example, if we already have dataFrame ```df```

```python
# Import matplotlib and seaborn (assuming we already have pandas as pd)

import matplotlib.pyplot as plt
import seaborn as sns

# Create the screen using figure by matplot lib

plt.figure((10)) # specify width and height

# Plot Histogram using seaborn

sns.histplot(data=df,x="age",bins=10) # x as category and bins as interval size

# Add a title and show the plot

plt.title("Histogram of Value2")
plt.show()
```

Similarly you can create box plot using ```sns.boxplot()``` function

## Data Visualization


Data visualization helps in understanding trends, distributions, and relationships in datasets.

<table> <tr> <th>Plot Type</th> <th>Usage</th> </tr> <tr> <td>Histogram</td> <td>Displays frequency distribution</td> </tr> <tr> <td>Box Plot</td> <td>Identifies outliers and spread</td> </tr> <tr> <td>Scatter Plot</td> <td>Shows relationships between variables</td> </tr> <tr> <td>Pair Plot</td> <td>Visualizes multiple variable relationships</td> </tr> <tr> <td>Heatmap</td> <td>Displays correlation between variables</td> </tr> </table>

# 1. Histogram

- Displays the distribution of numerical data.
- Helps identify skewness, spread, and outliers.
- Useful in frequency distribution analysis.

```python
import matplotlib.pyplot as plt
import numpy as np

# Sample data
data = np.random.randn(1000)

# Create histogram
plt.hist(data, bins=30, color='skyblue', edgecolor='black', alpha=0.7)
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram')
plt.show()
```

- Tall bars indicate frequent values.
- Skewness can be detected from the shape.


# 2. Box Plot (Whisker Plot)

- Shows median, quartiles, and outliers.
- Helps compare data distributions.
- Used in outlier detection.

```python
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Sample data
data = np.random.randn(100)

# Create box plot
sns.boxplot(data=data, color='lightblue')
plt.title('Box Plot')
plt.show()
```

- Box = Interquartile Range (IQR).
- Whiskers = Range excluding outliers.
- Dots = Outliers.


# 3. Quantile-Quantile (Q-Q) Plot

- Compares a dataset against a theoretical distribution.
- Used to check normality assumption.

```python
import scipy.stats as stats
import matplotlib.pyplot as plt
import numpy as np

# Generate normal data
data = np.random.normal(1, 1, 1000)

# Q-Q plot
stats.probplot(data, dist="norm", plot=plt)
plt.title('Q-Q Plot')
plt.show()
```

- Straight diagonal line → Data follows normal distribution.
- Curved pattern → Data is skewed or has heavy tails.

# 4. Scatter Plot

- Shows relationship between two numerical variables.
- Used in correlation analysis.

```python
import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.random.rand(100)
y = x + np.random.normal(0, 0.1, 100)

plt.scatter(x, y, color='blue', alpha=0.5)
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Scatter Plot')
plt.show()
```

- Upward trend → Positive correlation.
- Downward trend → Negative correlation.
- No pattern → No correlation.


# 5. Heatmap

- Displays correlation between variables.
- Used in feature selection.

```python
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Sample dataset
data = pd.DataFrame(np.random.rand(10, 10), columns=[f'Var{i}' for i in range(10)])

# Create heatmap
sns.heatmap(data.corr(), annot=True, cmap='coolwarm')
plt.title('Heatmap')
plt.show()
```

- Dark red/blue → Strong correlation.
- Near zero → No correlation.

# 6. Bubble Chart

- Similar to scatter plot but size represents a third variable.
- Used in business and economic analysis.

```python
import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.random.rand(50)
y = np.random.rand(50)
size = np.random.rand(50) * 1000

plt.scatter(x, y, s=size, alpha=0.5, color='purple')
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Bubble Chart')
plt.show()
```

- Larger bubbles represent higher values of a third variable.

# 7. Bar Chart

- Represents categorical data.
- Used for comparison.

```python
import matplotlib.pyplot as plt

categories = ['A', 'B', 'C', 'D']
values = [10, 20, 15, 25]

plt.bar(categories, values, color='orange')
plt.xlabel('Category')
plt.ylabel('Value')
plt.title('Bar Chart')
plt.show()
```

- Taller bars indicate higher values.

# 8. Distribution Plot

- Displays probability distribution of a dataset.
- Used in statistical analysis.

```python
import seaborn as sns
import numpy as np

data = np.random.normal(0, 1, 1000)

sns.histplot(data, kde=True, color='green')
plt.title('Distribution Plot')
plt.show()
```

- Smooth curve (KDE) represents probability density function (PDF).

# 9. Pair Plot

- Shows scatter plots between multiple variables.
- Used in feature relationships.

```python
import seaborn as sns

df = sns.load_dataset('iris')

# Pair plot
sns.pairplot(df, hue='species')
plt.show()
```

- Each subplot shows a scatter plot between two features.

# 10. Line Graph

- Represents trends over time.
- Used in time series analysis.

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(0, 11)
y = np.sin(x)

plt.plot(x, y, marker='o', linestyle='-', color='blue')
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Line Graph')
plt.show()
```

- Upward trend → Increasing trend.
- Downward trend → Decreasing trend.

# 11. Pie Chart

- Represents proportions of categorical data.
- Used in market share analysis.

```python
import matplotlib.pyplot as plt

labels = ['A', 'B', 'C', 'D']
sizes = [20, 30, 25, 25]

plt.pie(sizes, labels=labels, autopct='%1.1f%%', colors=['red', 'green', 'blue', 'yellow'])
plt.title('Pie Chart')
plt.show()
```

- Larger slices represent higher proportions.

# 12. Area Chart

- Similar to line graph but with a filled area.
- Used to show cumulative trends.

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(0, 11)
y = np.sin(x)

plt.fill_between(x, y, color='blue', alpha=0.5)
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Area Chart')
plt.show()
```

- Used for stacked visualizations to show total value accumulation.
