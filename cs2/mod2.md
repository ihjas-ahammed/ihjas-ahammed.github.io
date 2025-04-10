

# Exploratory Data Analysis (EDA)

It is the process of *examining* data to *gain insights* and *understanding*. It can be done either by *statistical* or *graphical* methods. Think of it like being a data detective!

*   **Purpose:**
    *   *Summarize* main characteristics of datasets (get the gist!).
    *   *Identify problems* within the data (spot the weird stuff).
    *   Determine data *readiness* for analysis (is it good to go?).
    *   *Inform* data preparation techniques (what cleaning needs to be done?).
    *   *Influence* the choice of algorithms for training machine learning (ML) models (pick the right tool!).

*   **Tools Used in Python:**
    *   `pandas` (for data manipulation)
    *   `numPy` (for numerical operations)
    *   `matplotlib` (for basic plotting)
    *   `seaborn` (for pretty, statistical plots)
    *   `plotly` (for interactive visualizations)

*   **Objectives:**
    *   Detection of *mistakes* in the data (typos, errors, etc.).
    *   Checking of *assumptions* about the data (is it normal?).
    *   Preliminary *selection* of appropriate models (what might work?).
    *   Determining *relationships* among explanatory variables (what goes together?).
    *   Assessing the *direction* and *rough size* of relationships between explanatory and outcome variables (what affects what?).

*   **Techniques:**
    *   Work by selectively *highlighting* certain aspects of the data while *hiding* others to reveal patterns and insights.  It's like shining a light on different parts of the data.

## Types of EDA

*   **Two-way Cross-Classification:** This is just a fancy way of saying we can categorize EDA methods in two ways:

    *   **Graphical vs. Non-graphical:**
        *   **Non-graphical:** Involve calculating *summary statistics* (numbers that describe the data).
        *   **Graphical:** Summarize data *visually* using diagrams or pictures (much easier to understand!).

    *   **Univariate vs. Multivariate (usually Bivariate):**
        *   **Univariate:** Analyze a *single* variable at a time (look at one thing).
        *   **Multivariate:** Analyze *multiple* variables simultaneously, often focusing on the relationship between *two* variables (bivariate) (see how things relate).

### Univariate Non-Graphical

*   Understanding the underlying *distribution* of a **single variable** and making inferences about the population based on a sample.  Also includes *outlier detection* (finding the weird data points).

*   **Categorical Data:** (like colors, types of fruit) Analysis centers on the *range* of values and their *frequencies* (how often each value appears).

*   **Quantitative Data:** (numbers!)
    *   Preliminary assessments of the population distribution are made using the sample data.
    *   Characteristics inferred include:
        *   **Center:** Measures like *mean*, *median*, and *mode*.  Mean is most common, but the median is preferred for *skewed* distributions or when *outliers* are a concern.
        *   **Spread:** Measures like *variance*, *standard deviation*, and *interquartile range (IQR)*.  Spread indicates how far data values are likely to be from the center.
        *   **Modality:** *Number of peaks* in the distribution (unimodal = one peak, bimodal = two peaks, etc.).
        *   **Shape:** Overall form of the distribution (symmetric, skewed, etc.).
        *   **Outliers:** *Extreme values* that deviate significantly from the rest of the data.
    *   **Skewness:** Measure of *asymmetry* in the distribution.
    *   **Kurtosis:** Measure of the *"peakedness"* of the distribution relative to a normal (Gaussian) distribution.

### Multivariate Non-Graphical Analysis

Analyzing *multiple* variables *without* using graphs.

#### Methods:

*   **Cross-Tabulation (Contingency Tables):**  For categorical variables. Shows how many data points fall into each combination of categories.
*   **Correlation Matrix:** Shows the *relationship strength* between multiple *numeric* variables (how much they change together).
*  **Covariance:** Similar to correlation but not standardized.
*   **Multivariate Regression:** Examines how multiple *independent* variables affect a *dependent* variable (more advanced).
*   **Factor Analysis:** Identifies *underlying relationships* among variables (grouping variables).
*   **Principal Component Analysis (PCA):** *Reduces dimensionality* while preserving essential information (simplifying complex data).

### Univariate Graphical Analysis

This involves analyzing a *single* variable using *visual representations* to understand its distribution, central tendency, and spread.

#### Key Graphical Techniques:

*   **Histogram:** Shows the *frequency distribution* of a variable (how often each value or range of values occurs).
*   **Box Plot:** Displays the *median*, *quartiles*, and *outliers* (great for spotting weird data).
* **Quantile Plot:**  Shows the quantiles of a distribution.
* **Stem-and-leaf plots**

### Multivariate Graphical Analysis

This involves visualizing the *relationships* between *two or more* variables using graphs.

#### Key Graphical Techniques:

*   **Scatter Plot:** Shows the *relationship* between *two numeric* variables (dots on a graph).
*   **Heatmap:** Displays *correlations* between multiple variables using *colors* (like a weather map for data!).
*   **Bubble Chart:** Similar to a scatter plot but with an added dimension (size of bubbles represents a *third* variable).
*  **Conditional Plots:** Show how a variable changes across different groups (e.g. boxplot for different categories).
*   **Scatter Plot Matrix/Pair Plot:** Shows scatter plots for *all pairs* of variables in a dataset.

---

## Methods of EDA

EDA primarily involves:

1.  **Descriptive Statistics** – *Numerical* summaries of data (numbers!).
2.  **Data Visualization** – *Graphical* representations to identify trends and relationships (pictures!).

### Common Visualization Techniques:

-   **Histograms** – Show data distribution (frequency of values).
-   **Boxplots** – Display quartiles and detect outliers (spot the weirdos!).
-   **Scatter Plots** – Explore relationships between two variables (dots!).
-   **Heatmaps** – Represent correlations between variables (colored squares!).
-   **Bubble Charts** - Scatter plots with a third dimension (bubble size).
-   **Line Graphs** - Show trends over time.
-   **Pie Charts** - Show proportions of categories.
-   **Area Charts** - Like line graphs, but filled in.
-  **Pair Plots** – show relationships between every pair of variables.
-   **Quantile plots**
-   **Quantile-Quantile plots**
-   **Icon based plots**
-   **Hierarchical plot**

---

## Descriptive Statistics

Descriptive statistics *summarize* data using measures of *central tendency*, *dispersion*, and *shape*.

### Measures of Central Tendency

These describe the *"center"* of the data distribution:

#### Mean (Arithmetic Average):
The sum of all values divided by the number of values.

$$
\mu = \frac{1}{N} \sum_{i=1}^{N} x_i
$$

#### Weighted Mean:
A mean where each value has a different "weight" (importance).

#### Median
-   *Middle value* when the data is sorted.  Good for skewed data!
-   If **𝑛** is odd:
    $$
    \text{M} = x_{\frac{n+1}{2}}
    $$
-   If **𝑛** is even:
    $$
    \text{M} = \frac{x_{\frac{n}{2}} + x_{\frac{n}{2}+1}}{2}
    $$

#### Mode
-   Most *frequently occurring* value in a dataset.  Can have more than one!

#### Midrange:
  Average of min and max.

### Measures of Dispersion

Dispersion quantifies how *spread out* the data is.

#### Range
$$
\text{Range} = \max(x) - \min(x)
$$

#### Variance (Spread of Data):
-   **Population Variance (𝜎²):**
    $$
    \sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2
    $$
-   **Sample Variance (𝑠²):**  Uses (n-1) to get an unbiased estimate.
    $$
    s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2
    $$

#### Standard Deviation (Average Deviation from Mean):
-   **Population Standard Deviation (𝜎):**
    $$
    \sigma = \sqrt{\sigma^2}
    $$
-   **Sample Standard Deviation (𝑠):**
    $$
    s = \sqrt{s^2}
    $$
#### Mean Absolute Deviation
The average distance from the mean

#### Interquartile Range (IQR)
$$
\text{IQR} = Q_3 - Q_1
$$
-   **Q1**: 25th percentile (first quartile).
-   **Q3**: 75th percentile (third quartile).
-   IQR helps detect outliers (more robust than the range).

#### Five-Number Summary:
    Min, Q1, Median, Q3, Max.  A quick summary of the distribution.

---

### Skewness and Kurtosis

These describe the *shape* of the data distribution.

#### Skewness (Measure of Asymmetry)
$$
\text{Skewness} = \frac{1}{n} \sum_{i=1}^{n} \left(\frac{x_i - \bar{x}}{s}\right)^3
$$
Here ```s``` is Standard devaition

-   **Positive Skew** (Right-Skewed): Tail extends to the *right*. (mode < median < mean)
-   **Negative Skew** (Left-Skewed): Tail extends to the *left*. (mean < median < mode)
-   **Zero Skew**: *Symmetrical* distribution. (mean ≈ median ≈ mode)

#### Kurtosis (Measure of Tailedness)

$$
\text{Kurtosis} = \frac{1}{n} \sum_{i=1}^{n} \left(\frac{x_i - \bar{x}}{s}\right)^4
$$

-   **Excess Kurtosis:**
    $$
    \text{Excess Kurtosis} = \text{Kurtosis} - 3
    $$
    -   **Mesokurtic (≈ 0):** *Normal* distribution.
    -   **Leptokurtic (> 0):** *Heavy tails* (more outliers).
    -   **Platykurtic (< 0):** *Light tails* (fewer outliers).

## Introduction to Python Libraries

Let's imagine some data:

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

In Python, we can represent this using *dictionaries*:

```python
data = {
    "name": ["Alice","Bob","Charlie","David","Eve"],
    "age": [24,27,22,32,29],
    "salary": [50000,60000,50000,30000,65000]
}
```

We use Python libraries like:

1.  `pandas`
2.  `matplotlib`
3.  `seaborn`

To work on the data, first by converting it into a ***data frame*** using `pandas`:

```python
import pandas as pd
df = pd.DataFrame(data)
```

### Data Frame

It is a *2D data structure* in Python with *rows* and *columns* (like a spreadsheet).

#### Features

*   Two Dimensional (rows and columns)
*   Labeled Axes (column names, row indices)
*   Flexible and Powerful (lots of built-in functions)

#### Finding Measures using DataFrame

Since a DataFrame is built on dictionaries, you can find measures like this:

```python
meanAge = df["age"].mean()  # Calculate the mean of the 'age' column
medianAge = df["age"].median() # Calculate the median of the 'age' column
```

Similarly, we have functions for `mode()`, `var()`, `std()`, etc.

### Visualizations

For graphical representation, we use `matplotlib` and `seaborn`.

*   `matplotlib` is used to *show the screen* and set the *screen size* (the foundation).
*   `seaborn` is used to *plot the type of graph*, like a histogram or boxplot (the pretty stuff).

Example:

```python
# Import matplotlib and seaborn (assuming we already have pandas as pd)

import matplotlib.pyplot as plt
import seaborn as sns

# Create the screen using figure() from matplotlib
plt.figure(figsize=(8, 6))  # Specify width and height (optional)

# Plot Histogram using seaborn
sns.histplot(data=df, x="age", bins=5)  # x is the column, bins is the number of bars

# Add a title and show the plot
plt.title("Histogram of Age")
plt.xlabel("Age") # Add x label
plt.ylabel("Frequency") # Add y label
plt.show()
```

Similarly, you can create a box plot using `sns.boxplot(data=df, x="age")`.

## Data Visualization (Detailed Examples)

Data visualization helps in understanding *trends*, *distributions*, and *relationships* in datasets. It makes the data *talk* to you!

| Plot Type        | Usage                                      |
| ---------------- | ------------------------------------------ |
| Histogram        | Displays frequency distribution             |
| Box Plot         | Identifies outliers and spread             |
| Scatter Plot     | Shows relationships between variables    |
| Pair Plot        | Visualizes multiple variable relationships |
| Heatmap          | Displays correlation between variables   |
| Bubble Chart     | Scatter plot with a third dimension       |
| Line Graph       | Shows trends over time                    |
| Pie Chart        | Shows proportions of categories          |
| Area Chart       | Like a line graph, but filled in          |
| Quantile Plot     | Displays the quantiles of a distribution          |
| Q-Q Plot     | Compare dataset with a theoretical distribution          |
|Icon-Based plot     | Use icons to display multi-dimensional data          |
| Hierarchical plot  | Displays data hierachies

# 1. Histogram

-   Displays the *distribution* of *numerical* data.
-   Helps identify *skewness*, *spread*, and *outliers*.
-   Useful in *frequency distribution* analysis.

```python
import matplotlib.pyplot as plt
import numpy as np

# Sample data (normally distributed)
data = np.random.randn(1000)

# Create histogram
plt.hist(data, bins=30, color='skyblue', edgecolor='black', alpha=0.7) #alpha is the transparency
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram')
plt.show()
```

-   Tall bars indicate *frequent* values.
-   Skewness can be detected from the *shape*.

# 2. Box Plot (Whisker Plot)

-   Shows *median*, *quartiles*, and *outliers*.
-   Helps *compare* data distributions.
-   Used in *outlier detection*.

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

-   Box = *Interquartile Range (IQR)* (middle 50% of the data).
-   Whiskers = Range *excluding outliers*.
-   Dots = *Outliers* (usually defined as 1.5 * IQR beyond the box).

# 3. Quantile-Quantile (Q-Q) Plot

-   Compares a dataset against a *theoretical distribution* (often the normal distribution).
-   Used to check the *normality assumption*.

```python
import scipy.stats as stats
import matplotlib.pyplot as plt
import numpy as np

# Generate normally distributed data
data = np.random.normal(0, 1, 1000)

# Q-Q plot
stats.probplot(data, dist="norm", plot=plt)
plt.title('Q-Q Plot')
plt.show()
```

-   *Straight diagonal line* → Data follows the normal distribution.
-   *Curved pattern* → Data is *skewed* or has *heavy tails* (not normal).

# 4. Scatter Plot

-   Shows *relationship* between *two numerical* variables.
-   Used in *correlation analysis*.

```python
import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.random.rand(100)
y = x + np.random.normal(0, 0.1, 100) # Add some noise

plt.scatter(x, y, color='blue', alpha=0.5)
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Scatter Plot')
plt.show()
```

-   *Upward trend* → *Positive* correlation (as x increases, y increases).
-   *Downward trend* → *Negative* correlation (as x increases, y decreases).
-   *No pattern* → *No correlation*.

# 5. Heatmap

-   Displays *correlation* between variables (using colors).
-   Used in *feature selection* (finding important variables).

```python
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Sample dataset (create a DataFrame)
data = pd.DataFrame(np.random.rand(10, 10), columns=[f'Var{i}' for i in range(10)])

# Create heatmap
sns.heatmap(data.corr(), annot=True, cmap='coolwarm') # annot shows the numbers, cmap is the color scheme
plt.title('Heatmap')
plt.show()
```

-   Dark red/blue → *Strong* correlation.
-   Near zero → *No* correlation.

# 6. Bubble Chart

-   Similar to a scatter plot, but *size* represents a *third* variable.
-   Used in business and economic analysis.

```python
import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.random.rand(50)
y = np.random.rand(50)
size = np.random.rand(50) * 1000 # Sizes of the bubbles

plt.scatter(x, y, s=size, alpha=0.5, color='purple') # s is the size
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Bubble Chart')
plt.show()
```

-   *Larger bubbles* represent *higher values* of the third variable.

# 7. Bar Chart

-   Represents *categorical* data.
-   Used for *comparison*.

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

-   *Taller bars* indicate *higher values*.

# 8. Distribution Plot

-   Displays the *probability distribution* of a dataset.
-   Used in statistical analysis (often combines a histogram with a KDE).

```python
import seaborn as sns
import numpy as np

data = np.random.normal(0, 1, 1000)

sns.histplot(data, kde=True, color='green') # kde adds the smooth curve
plt.title('Distribution Plot')
plt.show()
```

-   Smooth curve (KDE - Kernel Density Estimate) represents the *probability density function (PDF)*.

# 9. Pair Plot

-   Shows *scatter plots* between *multiple variables*.
-   Used in exploring *feature relationships*.

```python
import seaborn as sns

# Load a sample dataset (iris dataset)
df = sns.load_dataset('iris')

# Pair plot
sns.pairplot(df, hue='species') # hue colors by category
plt.show()
```

-   Each subplot shows a scatter plot between *two features*.  The diagonal shows the distribution of each feature.

# 10. Line Graph

-   Represents *trends over time* (or another continuous variable).
-   Used in *time series analysis*.

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(0, 11)
y = np.sin(x)

plt.plot(x, y, marker='o', linestyle='-', color='blue') # marker adds points, linestyle connects them
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Line Graph')
plt.show()
```

-   *Upward trend* → *Increasing* trend.
-   *Downward trend* → *Decreasing* trend.

# 11. Pie Chart

-   Represents *proportions* of *categorical* data.
-   Used in *market share analysis*.

```python
import matplotlib.pyplot as plt

labels = ['A', 'B', 'C', 'D']
sizes = [20, 30, 25, 25]

plt.pie(sizes, labels=labels, autopct='%1.1f%%', colors=['red', 'green', 'blue', 'yellow']) # autopct shows percentages
plt.title('Pie Chart')
plt.show()
```

-   *Larger slices* represent *higher proportions*.  (Often, it's better to use a bar chart instead).

# 12. Area Chart

-   Similar to a line graph, but with a *filled area* below the line.
-   Used to show *cumulative trends*.

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(0, 11)
y = np.sin(x)

plt.fill_between(x, y, color='blue', alpha=0.5) # fill_between fills the area
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Area Chart')
plt.show()
```

- Used for stacked visualizations to show *total value accumulation*.

# 13. Quantile Plot

```
import numpy as np
import matplotlib.pyplot as plt
import statsmodels.api as sm

data = np.random.normal(0, 1, 1000)
sm.qqplot(data, line='45')
plt.show()

```
- Displays the quantiles.

# 14. Hierarchical plot
   -Treemap

```
!pip install squarify
import matplotlib.pyplot as plt
import squarify
import pandas as pd

data = pd.DataFrame({'values': [1, 2, 3], 'labels': ['A', 'B', 'C']})
squarify.plot(data['values'], label=data['labels'], alpha=0.7)
plt.show()

```
- To show hierachical data.

# 15. Icon based plots
```python
!pip install scikit-plot
import scikitplot as skplt
import numpy as np
import matplotlib.pyplot as plt

data = np.random.rand(10, 5)
skplt.visualization.plot_pca_2d_projection(pca, data, target_values)
plt.show()

```

- To show the PCA projection.
