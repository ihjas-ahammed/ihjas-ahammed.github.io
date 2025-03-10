# Data: The Foundation of Insight

## Data

Any information stored in a digital format is called **Data**. This raw material can take many forms, from numbers and text to images and sound.

## Big Data

*   Data generated from various sources that is huge in size is termed **Big Data**.
*   It is used to derive business decisions by analyzing it.
*   Based on how the data is stored, organized, and analyzed, data is divided into three categories: structured, semi-structured, and unstructured data.  Big data often exhibits the "5 Vs": **Volume**, **Velocity**, **Variety**, **Veracity**, and **Value**.

### Structured Data

*   Refers to data in tabular form (i.e., with rows and columns).
*   Databases that hold structured data are called relational databases.
*   The term "relation" means table.
*   In structured tables, all rows have the same set of columns. Each column is an *attribute* (or *feature*, *variable*, *dimension*), and each row is a *data object* (or *record*, *tuple*, *instance*, *sample*, *example*, *data point*).
*   SQL is the programming language used to work with RDBMS (relational database management systems).

<table>
        <tr>
                <th>Pros</th>
                <th>Cons</th>
        </tr>
        <tr>
                <td>Require less processing since it's easy to manage</td>
                <td>Limited usability because it's predefined</td>
        </tr>
        <tr>
                <td>Since it's an old method, it supports several tools and works with ML algorithms</td>
                <td>Not very scalable or flexible</td>
        </tr>
        <tr>
                <td>Consistent and predictable format reduces errors</td>
                <td>Difficult to modify schema once implemented</td>
        </tr>
        <tr>
                <td>Easier to maintain data integrity and quality</td>
                <td>May not capture complex relationships effectively</td>
        </tr>
        <tr>
                <td>Efficient querying and faster search operations</td>
                <td>Storage overhead due to fixed schema requirements</td>
        </tr>
</table>

#### Use Cases for Structured Data

*   Business analytics and reporting
*   Web development
*   Data Science and Machine Learning
*   Healthcare
*   Education
*   Finance
*   Supply chain and logistics
*   IoT and Smart Devices
*   Government and public services

### Semi-Structured Data

*   **Semi-structured data** is simply incompletely structured data. It has some organizational properties (tags, markers) but no rigid schema.
*   HTML, XML, and JSON are examples of semi-structured data.

**Example XML:**

```xml
<person>
        <name>John Smith</name>
        <contact>
                <email>john@email.com</email>
                <phone>123-456-7890</phone>
        </contact>
        <skills>
                <skill>Python</skill>
                <skill>Java</skill>
        </skills>
</person>
```

**Example JSON:**

```json
{
        "person":  {
                "name":  "John Smith",
                "contact":  {
                        "email":  "john@email.com",
                        "phone":  "123-456-7890"
                },
                "skills":  ["Python",  "Java"]
        }
}
```

<table>
        <tr>
                <th>Pros</th>
                <th>Cons</th>
        </tr>
        <tr>
                <td>Flexible schema allows for varying data structures</td>
                <td>More complex to query compared to structured data</td>
        </tr>
        <tr>
                <td>Self-describing nature makes it easy to understand</td>
                <td>Requires more storage space due to repeated tags/keys</td>
        </tr>
        <tr>
                <td>Easy to modify without affecting the entire dataset</td>
                <td>Inconsistent structure can lead to data quality issues</td>
        </tr>
        <tr>
                <td>Better suited for evolving business requirements</td>
                <td>More processing overhead for data validation</td>
        </tr>
        <tr>
                <td>Natural fit for web and API integrations</td>
                <td>Can be slower to process than structured data</td>
        </tr>
</table>

#### Use Cases for Semi-structured Data

*   Scientific Research Applications
*   Healthcare Information Management
*   Business Intelligence Analytics
*   Web Technology Integration
*   IoT Device Ecosystems
*   Document Management Systems

### Unstructured Data

*   When data is not organized in a predefined manner, it is **unstructured**.
*   Video, Audio, and Images are examples of unstructured data.

<table>
        <tr>
                <th>Pros</th>
                <th>Cons</th>
        </tr>
        <tr>
                <td>Can store diverse and complex data types</td>
                <td>Challenging to analyze without preprocessing</td>
        </tr>
        <tr>
                <td>Ideal for multimedia content like images, videos, and text</td>
                <td>Requires specialized tools and algorithms for processing</td>
        </tr>
        <tr>
                <td>Supports natural data representation without constraints</td>
                <td>Harder to query and integrate compared to structured data</td>
        </tr>
        <tr>
                <td>Facilitates storage of large volumes of varied data</td>
                <td>Data extraction and transformation can be time-intensive</td>
        </tr>
        <tr>
                <td>Useful for machine learning and deep learning applications</td>
                <td>Higher storage and processing costs</td>
        </tr>
</table>

#### Use Cases for Unstructured Data

*   Classification of data like image, audio, and video
*   As input for predictive models
*   Chatbots

## Data Streams

Data Streams are the type of information that keeps continuously updated in real time; i.e., they keep changing. Unlike regular data, where we can collect and then analyze, data streams must be processed in real-time. They are characterized by high **volume**, **velocity**, **variety**, and often, **veracity** concerns.

## Statistical Data

Statistical Data refers to qualitative or quantitative facts that are gathered, organized, and analyzed in a systematic way. These are collected from surveys, experiments, observations, and even from existing sources.

Statistical Data is divided into qualitative and quantitative categories based on whether the data is measurable.

### Qualitative Data

It is also called categorical data and is about things that can't be measured in an objective, numerical sense.

Examples: Age Group, Gender, Nationality, etc.

They are divided into nominal and ordinal data based on whether they have a meaningful order.

#### Nominal Data

Nominal Data is used to label variables without giving any quantitative value, but they are represented in discrete units.

Examples: Gender, Hair color, Nationality, etc.

One-hot encoding is used to transform nominal data into a numerical feature for machine learning. The only logical operations that can be applied are equality or inequality.

They can be represented using frequencies, percentages, proportions, and the mode (most frequent value).

Graphically, they are often visualized using a pie chart or a bar chart.

In short, the units in nominal data all have the same priority, so order doesn't matter.

#### Ordinal Data

Discrete, ordered units with *no consistency* in the relative distance between adjacent categories. The order *does* matter.

Examples are:

*   Opinion (agree, mostly agree, neutral, disagree, mostly disagree)
*   Socio-economic status

Label encoding is used to transform ordinal data into a numerical feature. It supports all representations of nominal data, and also the median and interquartile range.

Visualization methods are similar to nominal data (bar charts, etc.).

### Quantitative Data

Quantitative Data is about quantities of things that *can* be measured. Height, Volume, Weight, and Distance are examples.

They are divided into discrete and continuous, and continuous data is further divided into interval and ratio scales.

#### Discrete Data

Numerical data that has distinct and separate values. Countable and finite.

Example: Number of students in a class.

#### Continuous Data

Numerical data that is given within a range. Infinitely many values.

Example: Age group

It can be visualized using histograms and box plots.

#### Interval Scale

Data that is measured along a scale with equal distances between adjacent units.  It can be continuous or discrete. Importantly, there is *no true zero point*.

Examples: IQ test scores, Time measured using a 12-hour clock, Temperature in Celsius or Fahrenheit.

Can only be added or subtracted (ratios are not meaningful). Represented using central tendency (mean, median, mode), range, and spread (standard deviation).

#### Ratio Scale

Data with a true zero point, meaning zero indicates the absence of the quantity.  Negative values are not possible. There are equal differences between individual units.

Examples: Temperature in Kelvin, height, weight.

Can be multiplied or divided (ratios *are* meaningful).  All descriptive statistics are applicable.

## Data Analysis

The overall process of inspecting, cleansing, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making.

1.  Collect
2.  Organize
3.  **Analyze**

Steps:

*   Identify data using descriptive analysis.
*   Investigate using diagnostic analysis.
*   Perform actions using prescriptive analysis.
*   Predict the future using predictive analysis.

Collect, Clean, Store, and Transform, then apply the required analysis technique.

#### Data Mining

The step that involves collecting data from different sources.

#### Data Management

Changing different types of data into something effective, like standardizing the format and units.

#### Statistical Analysis

Analyzing data statistically based on the way we need to analyze.

#### Data Presentation

After doing all these, one must create a statistical report with the predictions needed to be made.

## Types of Data Analysis

1.  Predictive
2.  Descriptive
3.  Exploratory
4.  Diagnostic
5.  Inferential

### Descriptive Data Analysis

*   **Goal:** Summarize and describe the main features of a data set.
*   **Techniques:** Measures of central tendency (mean, median, mode), measures of dispersion (range, variance, standard deviation), five-number summary, skewness, kurtosis, and visualizations (histograms, box plots, etc.).

### Exploratory Data Analysis (EDA)

The process of examining data to gain insights and understanding. EDA is about iterative exploration, letting the data "speak" through visualizations and summary statistics.  It is essential for making sure the data is thoroughly analyzed *before* making assumptions or conclusions.

##### Benefits for Data Analysts

*   Identify potential errors.
*   Understand patterns and relationships within the data.
*   Detect unusual or unexpected events (outliers).

##### Benefits for Data Scientists

*   Validate results.
*   Ensure results are relevant to desired business outcomes.

##### Benefits for Stakeholders

*   Confirm they are asking the right questions about their data.

### Predictive Analysis

It gives the probability of an event or a situation.

By using techniques like:

*   Modeling
*   Machine Learning
*   Data Mining
*   Game Theory

This may help to give predictions about a future event.

The processes:

1.  Linear regression
2.  Time series analysis
3.  Data mining

Basic cornerstones of predictive analysis:

1.  Predictive Modeling
2.  Decision Analysis and Optimization
3.  Transaction Profile

### Diagnostic Analytics

The process of using historical data to answer questions and find solutions to problems. It is used to identify dependencies and patterns within the historical data of a specific problem.

#### Value for Companies

*   Provides deep insights into problems.
*   Companies maintain detailed historical data to avoid redundant data collection for each new problem, saving time and resources.

Common Techniques Used:

It is done by Data Discovery and Data Mining:

**Data Discovery:** The process of collecting data from various sources and getting an initial understanding of it.

**Data Mining:** Examining large datasets to find patterns, anomalies, and other valuable information.

## Inferential Data Analysis

A branch of statistics that uses *sample data* to make inferences or draw conclusions about a *larger population* to generalize findings beyond the collected sample and make predictions or hypotheses about the broader population.

*   **Techniques Used:**
    *   **Hypothesis Testing:** Determining if there's enough evidence to support a claim about the population (using null and alternative hypotheses, and p-values).
    *   **Confidence Intervals:** Estimating a range of values that likely contains the true population parameter.
    *   **Regression Analysis:** Examining the relationship between variables to predict outcomes.

*   **Importance:**
    *   Allows researchers to draw significant conclusions from smaller datasets.
    *   Essential for making data-driven decisions in fields like science, business, economics, and social sciences.
    *   Helps in better understanding complex phenomena and predicting future outcomes with a degree of confidence.
* **Key Concepts:**
    * **Population:** The entire group of interest.
    * **Sample:** A subset of the population.
    * **Parameter:** A numerical characteristic of the population.
    * **Statistic:** A numerical characteristic of the sample.
    * **Sampling Distribution:** The probability distribution of a statistic.
    * **Standard Error:** The standard deviation of a sampling distribution.
    * **Sampling Error:** The difference between a sample statistic and a population parameter.
### Statistical Modeling

Statistical modeling is the process of using mathematical equations and statistical techniques to analyze data, identify patterns, and make predictions.

### Statistical Inference

The process of using data analysis to deduce properties of an underlying population distribution. It's about using information from a smaller group (a sample) to understand the characteristics of a larger group (the population).

#### Methods used to draw conclusions

*   Estimation
*   Confidence intervals
*   Hypothesis testing

### Probability Distributions

*   **Probability:** A measure of the uncertainty associated with various phenomena (events or occurrences).
*   **Probability Distribution (in Statistics):** A description that gives the probability of each possible outcome of a random experiment or event.
*   **Purpose:** Provides the probabilities of different possible occurrences.
*   **Random Experiment:** An experiment whose outcome cannot be predicted with certainty.
* **Common Distributions**:
    * **Normal Distribution:** A bell-shaped, symmetric distribution defined by its mean (µ) and standard deviation (σ).
    * **Uniform Distribution:** Every value within a given interval is equally likely to occur

## What is Data Science?

Data science empowers businesses to process vast amounts of both structured and unstructured big data to identify patterns. It is an *interdisciplinary* field combining statistics, computer science, machine learning, and domain expertise.

*   **Business Benefits:**
    *   Increased Efficiency
    *   Cost Management
    *   New Market Opportunities
    *   Enhanced Market Advantage

*   **Real-Life Applications:**
    *   Voice Assistants (e.g., Alexa, Siri)
    *   Self-Driving Cars
    *   Search Engines
    *   Chatbots

### The Data Science Process:

1.  **Real-World Problem:** Defining the question to address.
2.  **Data Collection:**
    *   Gather data relevant to a defined problem or question.
    *   **Methods:**
        *   Surveys: Collecting data directly from individuals.
        *   Web Scraping: Extracting data from websites.
        *   Sensors, APIs, existing databases, etc.

3.  **Data Processing (Cleaning/Wrangling):**
    *   Transform raw, messy data into a structured and usable format.
    *   **Focus:** Handling missing values, inconsistencies, and converting data into a consistent format.

4.  **Exploratory Data Analysis (EDA):**
    *   Discover patterns, relationships, and insights within the data.
    *   **Activities:**
        *   Identify factors influencing the target variable (the thing you want to predict or understand).
        *   Analyze relationships between independent variables (the factors that might influence the target).
        *   Determine the best approach for modeling.

5.  **Modeling/Algorithms:**
    *   **Purpose:** Develop machine learning models (or apply statistical models) to identify complex patterns in the data.
    *   **Tools:** Various machine learning algorithms and techniques are used to automate pattern recognition.

6.  **Communication/Visualization:** Presenting results clearly and understandably.
7.  **Deployment/Productization:** Building a data product or integrating the model into a system.

### Challenges in the Data Science Process

1.  **Data Quality and Availability:**
    *   **Problem:** Inaccurate, incomplete, or inconsistent data can lead to unreliable models. The necessary data might also be difficult or impossible to access.
    *   **Impact:** Affects the accuracy and trustworthiness of the analysis.

2.  **Bias in Data and Algorithms:**
    *   **Problem:** Data can reflect existing biases due to factors like how it was collected or measured. Algorithms can further amplify these biases, leading to unfair outcomes.
    *   **Impact:** Can result in discriminatory or inaccurate predictions and reinforce societal biases.

3.  **Model Overfitting and Underfitting:**
    *   **Overfitting Problem:** A model that is too complex fits the training data perfectly but performs poorly on new, unseen data.
    *   **Underfitting Problem:** A model that is too simple fails to capture the important patterns in the data, leading to poor performance both on training and new data.
    *   **Impact:** Both issues result in models that do not generalize well and are not useful for real-world applications.

4.  **Model Interpretability:**
    *   **Problem:** Complex models (like deep learning models) can be "black boxes," making it hard to understand how they arrive at their predictions.
    *   **Impact:** Difficulty in explaining the model's reasoning, which can hinder trust and adoption, especially in critical decision-making scenarios.

5.  **Privacy and Ethical Considerations:**
    *   **Problem:** Data science often deals with sensitive personal information, raising concerns about privacy violations and ethical misuse of data.
    *   **Impact:** Potential for harm to individuals, legal issues, and damage to reputation if data is not handled responsibly.  This includes concerns about *mining methodology*, *user interaction*, *efficiency and scalability*, and *diversity of database types*.
