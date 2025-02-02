# Data Preprocessing
Handling missing values and noisy data, also removing ```outliers```

* Values that make big deviations in the measures of center are called ouliers

After that we integrate (mix) , transform (fix format, units etc.) and reduce data ( getting the specific part needed for analysis ).

The whole process is called data preprocessing.

It is required because dta in the real world is incomplete, noicy (with errors and outliers) and inconsistent (with duplicates).

### Advantages
* Improved Quality
* Enhanced Model Performance
* Reduce complexity
* Facilitate or support modle interpretablity: To make it capable of better prediction and easier interpretation of outcomes

## Data Cleaning

Transform raw data into format suitable for analysis.

* Handle missing values
* Correct error
* Remove duplicate
* Type conversion

Each technique is applied based on the nature of data.
It ensures that the data used to analyse is accurate, consistant and reliable.

## Noise Identification

* Visualisations are used to analyse anomlilies in the dataset.
* Z-Score is also useful to find deviation from mean.

```Outlier detection``` can be done by using boxplot

Methods for outlier detection:
* **Statistical Methods**: These include Z-score and Standard Deviation methods. Data points that lie beyond 3 standard deviations from the mean are typically considered outliers. The Z-score measures how many standard deviations away from the mean a data point is.
* **Interquartile Range (IQR) Method**: Using box plots, points that fall below Q1 - 1.5×IQR or above Q3 + 1.5×IQR are considered outliers. This is a robust method as it's not affected by extreme values like the mean-based methods.
* **Isolation Forest**: This algorithm isolates observations by randomly selecting a feature and randomly selecting a split value between the maximum and minimum values of that feature. Outliers are easier to isolate and thus have shorter path lengths.
* **DBSCAN (Density-Based Spatial Clustering of Applications with Noise)**: This clustering algorithm identifies points that are in low-density regions as outliers. It's particularly effective for datasets where outliers are defined by their local density rather than global statistics