# Introduction to Data Science (CSC2MN102) - Notes

## Module I: Introduction to Data Science

**1. Introduction to Data: Types of Data – Structured Data, Semi-Structured Data, Unstructured Data and Data Streams, Statistical Data Types - Quantitative Data (Ratio and Interval Scale) and Qualitative Data (Nominal and ordinal)**

*   **Data Types Overview (HKP 2.1, CS 2.2, OS 2.3.4)**

    *   **Data Objects and Attributes:** Data sets are collections of *data objects* (also called records, points, vectors, patterns, events, cases, samples, observations, or entities).  Objects are described by *attributes* (also called variables, fields, characteristics, or features). (HKP 2.1)
    *   **Attribute Types:**
        *   **Nominal:**  Values are symbols or names, representing categories, codes, or states. There's no meaningful order.  (e.g., hair color, marital status, occupation).  Also called "categorical." (HKP 2.1.2, CS 2.2.2)
        *   **Binary:** A special case of nominal with only two categories/states (0 or 1, true/false). Can be *symmetric* (both states equally important) or *asymmetric* (one state more significant, often coded as 1). (HKP 2.1.3, CS 2.2.1)
        *   **Ordinal:** Values have a meaningful order or ranking, but the magnitude between successive values is not known. (e.g., grades, rankings). (HKP 2.1.4, CS 2.2.1)
        *   **Numeric:** Quantitative values (integers or real numbers). (HKP 2.1.5, CS 2.2.1)
            *   **Interval-scaled:** Measured on a scale of equal-size units. Values have order and can be positive, zero, or negative.  (e.g., temperature in Celsius or Fahrenheit, calendar dates).  We can compute the difference between values, but not ratios. (HKP 2.1.5)
            *   **Ratio-scaled:**  Have an inherent zero-point. We can speak of values as being multiples of one another. (e.g., temperature in Kelvin, length, weight, monetary quantities). (HKP 2.1.5)

    *   **Structured Data:** Highly organized, often in tables (relational databases). Easily searchable.  (HKP, CS 2.2.1)
    *   **Semi-structured Data:**  Doesn't conform to a rigid table structure but has some organizational properties (e.g., tags, markers). XML and JSON are common formats.
    *   **Unstructured Data:**  No predefined format, making it difficult to process and analyze directly (e.g., text, images, audio, video). (HKP, CS 2.2.2)
    *   **Data Streams:**  Data that flows into a system continuously and dynamically, often at high volumes and speeds. (HKP, Chapter 13)

**2. Basic Methods of Data Analysis- Descriptive Data Analysis, Diagnostic Data Analysis or Exploratory Data Analysis, Inferential Data Analysis and Predictive Analysis.**

*   **Data Analysis Methods (Overview)**:

    *   **Descriptive Data Analysis:** Summarizes and describes the main features of a data set. (HKP 2.2, OS 2.1) Uses measures of central tendency (mean, median, mode) and dispersion (range, variance, standard deviation). Includes basic visualization.
    *   **Diagnostic Data Analysis/Exploratory Data Analysis (EDA):** Uncovers relationships, patterns, and anomalies in data, often using visualization. Involves iterative exploration and hypothesis generation. (OS Chapter 2)
    *   **Inferential Data Analysis:** Uses a sample of data to derive inference of data.
    *   **Predictive Data Analysis:** Focuses on building models to predict future outcomes or classify data into categories. (HKP, Chapters 8 & 9)

**3. Inferential Statistics: Statistical Inference, Population and Sample, Statistical Modeling, Probability Distributions – Normal, Uniform**

*   **Statistical Inference:** The process of drawing conclusions about a *population* based on a *sample*. (HKP, OS) Key concepts:
    *   **Population:** The entire set of objects or events of interest.
    *   **Sample:** A subset of the population that is used to make inferences about the population.
    *   **Sampling Distribution:** The probability distribution of a given statistic based on a random sample.
    *   **Bias:** Systematic errors that can make sample data unrepresentative of the population.
    *   **Statistical Modeling:** Creating mathematical representations of data and the processes that generate it. Models often involve assumptions about the underlying probability distributions.

*   **Probability Distributions:**
    *   **Normal (Gaussian) Distribution:** A bell-shaped, symmetric distribution defined by its mean (μ) and standard deviation (σ). Many natural phenomena approximate a normal distribution. (HKP)
    *   **Uniform Distribution:** All values within a given range are equally likely. (HKP)

**4. Introduction to Data Science: Big Data and Data Science, Data Science Process**

*   **Defining Data Science:** (OS Chapter 1, HKP 1.1, CS 1.1)
    *   **Interdisciplinary Field:** Draws from statistics, computer science, machine learning, database technology, visualization, and domain expertise.
    *   **Process:** Involves extracting knowledge and insights from data, often through a multi-step process.
    *   **Data-Driven:** Focuses on using data to solve problems, make decisions, and build products.
    *   **Beyond "Big Data":** While often associated with "Big Data," data science applies to data of all sizes and complexities.
*   **Big Data:**
    *   Characterized by the "3 Vs": Volume, Velocity, Variety (HKP, OS, CS). A 4th "V", veracity, is important. A 5th "V", value can also be added.
    *   **Volume:** Massive amounts of data.
    *   **Velocity:** Data is generated and processed at high speed.
    *   **Variety:** Data comes in many different formats (structured, unstructured, semi-structured).
    *   **Veracity:** The accuracy, quality, and trustworthiness of the data.
    *   **Value:** the ability to turn data into actionable insights and information.
*   **The Data Science Process (OS Fig 2-2):**
    1.  **Real World Problem/Question:** Start with a business problem, scientific question, or a general area of interest.
    2.  **Data Collection:** Gathering raw data, which may involve multiple sources and formats.
    3.  **Data Processing (Munging/Wrangling):** Cleaning, transforming, and preparing the data for analysis.
    4.  **Exploratory Data Analysis (EDA):** Summarizing, visualizing, and exploring the data to gain initial insights and understanding.
    5.  **Modeling/Algorithms:** Applying statistical models, machine learning algorithms, or other analytical techniques.
    6.  **Communication/Visualization:** Presenting results in a clear, understandable way.
    7.  **Deployment/Productization:** (Often) Building a data product or integrating the model into a system. This creates a feedback loop.

**5. Applications of Data Science , Issues and challenges in Data Science**

*   **Data Mining Applications:**
    *   **Business Intelligence:** Analyzing customer behavior, market trends, sales performance, etc.
    *   **Web Search:** Ranking, recommendations, ad placement.
    *   **Scientific Research:** Bioinformatics, climate science, astronomy, etc.
    *   **Finance:** Risk assessment, fraud detection, algorithmic trading.
    *   **Healthcare:** Diagnostics, treatment planning, public health monitoring.
    *   **Social Good**: Using the power of technology to solve societal issues.
*   **Major Issues and Challenges**
    *   **Mining Methodology:**
        *   Mining different kinds of knowledge (patterns, classifications, clusters).
        *   Handling complex data types.
        *   Dealing with uncertainty, noise, and incompleteness.
        *   Pattern evaluation and guided mining.
    *   **User Interaction:**
        *   Interactive mining.
        *   Incorporating background knowledge.
        *   Presentation and visualization of results.
    *   **Efficiency and Scalability:**
        *   Handling large datasets efficiently.
        *   Parallel, distributed, and incremental mining.
    *   **Diversity of Database Types:**
        *   Working with relational, transactional, data warehouses, and complex data types.
        *   Mining dynamic, networked, and global data.
    *   **Data Mining and Society:**
        *   Social impacts of data mining.
        *   Privacy-preserving data mining.
        *   Invisible data mining.

## Module II: Exploratory Data Analysis

**6. Exploratory Data Analysis (EDA) : Types of EDA - Univariate non-graphical, Multivariate non- graphical, Univariate graphical, and, Multivariate graphical. Methods of EDA – Descriptive Statistics and Data Visualization**

*   **Exploratory Data Analysis (EDA):** (OS Chapter 2, HKP 2.2, CS 3.3)
    *   **Goals of EDA:**
        *   Understand the data's structure, distributions, and relationships.
        *   Identify potential issues (missing values, outliers, errors).
        *   Generate hypotheses.
        *   Inform model building and feature engineering.
        *   Gain intuition about the data.
    *   **Philosophy of EDA:**  Emphasizes flexibility, iterative exploration, and understanding the data generating process.
    *   **Types of EDA**:
        *   **Univariate Non-Graphical**:  Focuses on describing the distribution of a single variable.
        *   **Multivariate Non-Graphical**: Explore relationships between multiple variables.
        *   **Univariate Graphical**:  Visualize the distribution of a single variable using plots.
        *   **Multivariate Graphical**: Visualize relationships between multiple variables using graphs.
*   **Methods of EDA**
    *   **Descriptive Statistics:**
        *   Measures of Central Tendency (Mean, Median, and Mode)
        *   Dispersion (Range, Quartiles, Variance, Standard Deviation, and Interquartile Range).
    *   **Data Visualization:**
        *   Using graphics to represent data and convey information.

**7. Descriptive Statistics - Measures of Central Tendencies, Dispersion, Skewness and Kurtosis.**

*   **Measures of Central Tendency:** (HKP 2.2.1, OS, CS 3.3.3)
    *   **Mean:** The average value. Sensitive to outliers.
    *   **Median:** The middle value in a sorted dataset. More robust to outliers than the mean.
    *   **Mode:** The most frequent value. Useful for categorical data.
    *   **Midrange:** The average of the largest and smallest values.
*   **Measures of Dispersion:** (HKP 2.2.2, OS, CS 3.3.4)
    *   **Range:** The difference between the maximum and minimum values.
    *   **Quartiles:** Divide the data into four equal parts (Q1, Q2 (median), Q3).
    *   **Interquartile Range (IQR):** Q3 - Q1. Measures the spread of the middle 50% of the data.
    *   **Variance:** Average squared deviation from the mean.
    *   **Standard Deviation:** Square root of the variance. Measures the spread in the original units of the data.
    *   **Five-Number Summary:** Minimum, Q1, Median, Q3, Maximum. Provides a concise summary of the distribution.

*   **Skewness**
    *   A measure of the asymmetry of the probability distribution.
*   **Kurtosis**
    *   A measure of the "tailedness" of the probability distribution

**8. Data Visualization - Histograms , Box plots , Quantile-Quantile plots Scatter plots , Heat map, Bubble chart , Bar chart, Distribution plot , Pair plot , Line graph , Pie chart, Area chart**

*   **Data Visualization Techniques:** (HKP 2.3, OS Chapter 9, CS 6.4)
    *   **Histograms:**  Show the frequency distribution of a single numeric variable.  Data are binned into intervals. (HKP 2.2.3, CS 3.3.2)
    *   **Boxplots:**  Display the five-number summary (min, Q1, median, Q3, max) and outliers. Good for comparing distributions. (HKP 2.2.2)
    *   **Quantile Plots:**  Plot the quantiles of a single variable.  Good for seeing overall behavior and unusual occurrences. (HKP 2.2.3)
    *   **Quantile-Quantile (q-q) Plots:** Graph the quantiles of one univariate distribution against the corresponding quantiles of another. Used to see if there is a shift in distribution. (HKP 2.2.3)
    *   **Scatter Plots:**  Display the relationship between two (or three, with 3D scatter plots) numeric variables. Can reveal correlations, clusters, and outliers. (HKP 2.2.3)
    *   **Heat Map**: Visualize data through variations in coloring
    *   **Bubble Chart**: Useful for visualizing three dimensions of data
    *   **Bar Chart:** Uses bars to show comparisons between categories of data
    *   **Distribution plots**: display the distribution and range of a set of numeric data along a continuous scale.
    *   **Pair Plot**:  used to understand the best set of features to explain a relationship between two variables
    *   **Line Graph**:  used to visualize the value of something over time.
    *   **Pie Chart**: Illustrates numerical proportion
    *   **Area Chart**: Used to track changes over time for one or more groups
    *   **Pixel-Oriented Techniques:**  Each attribute value is represented by a pixel, and the color of the pixel reflects the value.  Good for visualizing multiple dimensions simultaneously. (HKP 2.3.1)
    *   **Geometric Projection Techniques:**  Help visualize high-dimensional data in a lower-dimensional space (e.g., scatter-plot matrices, parallel coordinates). (HKP 2.3.2)
    *   **Icon-Based Techniques:**  Use small icons (e.g., Chernoff faces, stick figures) to represent multidimensional data. (HKP 2.3.3)
    *   **Hierarchical Techniques:**  Partition dimensions into subspaces and visualize them hierarchically (e.g., "worlds-within-worlds"). (HKP 2.3.4)

## Module III: Data Preparation for Analysis

**9. Data Cleaning: Handling Missing and Noisy Data, Removing outliers**

*   **Data Cleaning:** (HKP 3.2, OS, CS 2.4.1)
    *   **Missing Values:**
        *   Ignore the tuple (not usually effective).
        *   Fill in manually (time-consuming).
        *   Use a global constant (e.g., "unknown").
        *   Use a central tendency measure (mean, median).
        *   Use the most probable value (e.g., using regression, Bayesian methods, or decision trees).
    *   **Noisy Data:** (Data with errors or outliers)
        *   **Binning:** Smooth by sorting values and partitioning them into bins, then replacing values by bin means, medians, or boundaries.
        *   **Regression:** Fit data to a function (e.g., linear regression).
        *   **Clustering:** Detect and remove outliers by grouping similar values.
        *   **Combined computer and human inspection:** Flag suspicious values for human review.

    *   **Data Cleaning as a Process:**
        *   **Discrepancy Detection:** Use metadata, check field overloading, check unique rules, consecutive rules, and null rules, use data scrubbing and auditing tools.
        *   **Data Transformation:** Correct discrepancies using tools, knowledge, or rewriting data.
        *   Iterative process.

**10. Data Integration**

*   **Data Integration:** (HKP 3.3)
    *   Combines data from multiple sources into a coherent data store.
    *   **Issues:**
        *   **Entity Identification Problem:** Matching equivalent real-world entities from different sources.
        *   **Redundancy:** Detecting and resolving redundant attributes (e.g., using correlation analysis).
        *   **Data Value Conflicts:** Resolving differences in representation, scaling, or encoding.
        *   **Schema Integration:**  Matching equivalent attributes and dealing with structural differences.

**11. Data Transformation: Standardization, Normalization**

*   **Standardization**
    *   Also known as Z-score normalization, it converts all data types to a common format, especially for distance-based computation
*   **Data Transformation:** (HKP 3.5, CS 2.4.3)
    *   **Smoothing:** Removing noise (covered in Data Cleaning).
    *   **Attribute/Feature Construction:** Deriving new attributes from existing ones.
    *   **Aggregation:** Summarizing data (e.g., computing daily sales totals).
    *   **Normalization:** Scaling attribute data to fall within a smaller, specified range (e.g., [0.0, 1.0]).  Methods include:
        *   **Min-max normalization:**  Linear transformation based on minimum and maximum values.
        *   **Z-score normalization:**  Transforms values based on the mean and standard deviation.
        *   **Normalization by decimal scaling:**  Moves the decimal point of values.

**12. Data Reduction: Dimensionality Reduction - Principal Component Analysis**

*   **Dimensionality Reduction:** Reduces the number of attributes (dimensions) under consideration.
*   **Principal Component Analysis (PCA)**: Transforms data to a new coordinate system, identifying a new smaller set of uncorrelated variables which has maximum variance and minimum loss of information.

## Module IV: Introduction to Machine Learning

**13. Machine Learning Algorithms : Supervised Learning– Classification, Regression, Unsupervised Learning – Clustering, Dimensionality Reduction , Reinforcement Learning**

*   **Machine Learning Overview**
    *   **Supervised Learning:**  Algorithms learn from labeled data (training data with known outcomes).
        *   **Classification:**  Predicts a categorical class label.
        *   **Regression:**  Predicts a continuous-valued output.
    *   **Unsupervised Learning:**  Algorithms discover patterns and structures in unlabeled data.
        *   **Clustering:**  Groups similar objects into clusters.
        *   **Dimensionality Reduction:**  Reduces the number of variables while preserving important information.
    *   **Reinforcement Learning:**  An agent learns to take actions in an environment to maximize a reward.

**14. Test /Train Split, Model Training, Bias and Variance, Overfitting and Underfitting**

*   **Test/Train Split:**  Dividing the data into a training set (to build the model) and a test set (to evaluate the model's performance on unseen data).
*   **Model Training:** The process of learning a model from the training data.
*   **Bias and Variance:**
    *   **Bias:** Error due to overly simplistic assumptions in the learning algorithm.  High bias can cause *underfitting* (missing relevant relations between features and outputs).
    *   **Variance:** Error due to too much complexity in the learning algorithm. High variance can cause *overfitting* (modeling noise or random fluctuations in the training data).
*   **Overfitting:**  The model learns the training data too well, including noise and specific details that don't generalize to new data.
*   **Underfitting:** The model is too simple to capture the underlying structure of the data.

**15. Evaluation**

*   **Evaluation Metrics**
    *   **Accuracy:**  Percentage of correctly classified instances.
    *   **Error Rate:** Percentage of misclassified instances (1 - accuracy).
    *   **Sensitivity (Recall/True Positive Rate):**  Proportion of actual positives correctly identified.
    *   **Specificity:**  Proportion of actual negatives correctly identified.
    *   **Precision:**  Proportion of predicted positives that are actually positive.
    *   **F-measure (F1-score):** Harmonic mean of precision and recall.
    *   **Area Under the ROC Curve (AUC):**  A measure of the classifier's ability to distinguish between classes.
    *   **Mean Squared Error (MSE):** Average squared difference between predicted and actual values (for regression).
    *   **Root Mean Squared Error (RMSE)**: Square root of the MSE
    *   **Mean Absolute Error (MAE)**: Average of absolute difference between predicted and actual values.
*   **Model Selection:** Choosing the best model among a set of candidate models.
*   **Cross-Validation:**  A technique for assessing model performance by partitioning the data into multiple folds and iteratively training and testing on different subsets.
*   **Bootstrapping:**  A resampling technique where samples are drawn with replacement from the original data.

**16. Linear Regression**

*   **Linear Regression:**  Models the relationship between a dependent variable (y) and one or more independent variables (x) as a linear equation.
    *   **Simple Linear Regression:**  One independent variable.
    *   **Multiple Linear Regression:**  Multiple independent variables.
    *   **Assumptions:**  Linearity, independence of errors, constant variance of errors (homoscedasticity), normality of errors.
    *   **Evaluation:**  R-squared, p-values, residual analysis.

**17. k-Nearest Neighbors (k-NN)**

*   **k-Nearest Neighbors (k-NN):**  A lazy learning algorithm that classifies or predicts based on the k most similar training examples.
    *   **Distance Metrics:**  Euclidean distance, Manhattan distance, cosine similarity, etc.
    *   **Choosing k:**  A key parameter that affects the model's bias and variance.

**18. k-means Clustering**

*   **k-means Clustering:**  An iterative partitioning algorithm that aims to minimize the within-cluster sum of squares.
    *   **Algorithm:**
        1.  Choose k initial cluster centers (centroids).
        2.  Assign each object to the closest centroid.
        3.  Recalculate the centroids of each cluster.
        4.  Repeat steps 2 and 3 until convergence.
    *   **Limitations:**  Sensitive to initial centroids, assumes spherical clusters, requires specifying k.

**19. Naive Bayes**

*   **Naive Bayes:**  A probabilistic classifier based on Bayes' theorem with a strong (naive) assumption of independence between features.
    *   **Bayes' Theorem:**  P(H|X) = P(X|H)P(H) / P(X)
    *   **Class Conditional Independence:**  Assumes that the effect of an attribute value on a given class is independent of the values of other attributes.
    *   **Advantages:**  Simple, fast, and often performs well.
    *   **Disadvantages:**  The independence assumption is often violated in practice.

**20. Application of Naive Bayes - Spam Filtering**

*   Example of using Naive Bayes for text classification.
*   Calculates the probability of a message being spam based on the presence of certain words.

**21. Singular Value Decomposition**

*   A matrix factorization technique used for dimensionality reduction, collaborative filtering, and other applications.

**22. Applications of Supervised, Unsupervised and Reinforcement Learning**

*   (Examples and use-cases across various domains)

## Module V: Hands-on Data Structures:

**Practical Applications, Case Study and Course Project**

**1. Implementation of the concepts or the algorithms learned [ Binary Classification, Linear Regression, k-NN, k-means clustering, Spam Filtering ]**

*   Hands-on practice with implementing data science concepts and algorithms.
*   Focus on practical application of techniques learned in previous modules.

**2. Case study:**

*   Real-world data analysis project.
*   Application of data preprocessing, exploration, and modeling techniques.

**3. Capstone/Course Project:**

*   Comprehensive project requiring students to apply the entire data science process.
*   Opportunity to work on a self-defined problem or a provided dataset.
