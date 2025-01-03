# Data

## Data
Any information that is stored in the digital format is called **Data**

## BigData

* Data generated from various sources is huge in size and this is termed as **BigData**
* It is used to derive business decision by analyzing it.
* Based on how the data is stored, organized and analyzed data is divided into three: structured, semi-structured and unstructured data.

### Structured data

* It refers to data in tabular form (i.e with rows and columns)
* DataBases that hold structured data is called relational databases
* The term relation means table
* In structured tables, all rows have same set of columns
* SQL is the programming language used to work with RDbMS ( relational database management system)

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
        <td>Since it's an old method, it supports several tools and work with ML algorithms</td>
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

* Business analytics and reporting
* Web development
* Data Science and Machine Learning
* Healthcare
* Education
* Finance
* Supply chain and logistics
* IoT and Smart Devices
* Government and public services

### Semi-Structured Data

* **Semi-structured data** is simply an incompletely structured data.
* HTML,XML,JSON are examples for semi-structured data

Example xml
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
Example json
```json
{
    "person": {
        "name": "John Smith",
        "contact": {
            "email": "john@email.com",
            "phone": "123-456-7890"
        },
        "skills": ["Python", "Java"]
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
        <td>Easy to modify without affecting entire dataset</td>
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

#### Use cases for semi-structured data 

* Scientific Research Applications 
* Healthcare Information Management 
* Business Intelligence Analytics 
* Web Technology Integration 
* IoT Device Ecosystems 
* Document Management Systems 

### Unstructured Data

* When data is not organized in a predefined manner it is **unstructured** 
* Video, Audio and Images are example for unstructured data.

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


#### Use cases for unstructured data

* Classification of data like image audio and video
* As input predictive models
* Chatbots

##  Statistical Data

Statistical Data refers to qualitative facts that are, gathered, organised and analysed in a systematic way. Which are collected from surveys, experiments, observations and even from existing sources.

Statistical Data is divided into both qualitative and quantitative based on whether they are measurable or not.

### Qualitative Data

It is also called categorical data and it is about things that can't be measured in an objective sense.

Eg: Age Group, Gender, Nationality etc.

They are divided into nominal and ordinal data based on if they are ordered units or not.


#### Nominal Data

Nominal Data is used to label variables without giving any quantitaive value. But they are represented in discrete units.

Eg: Gender, Hair color, Nationality etc.

Hot encoding is used to transform nominal data into numerical feature. The only logical operation can be applied will be equality or inequality.

They can be represented using frequencies, percentages, proportions and central point.

Graphically using a pie chart or a bar chart.

In short, the units in nominal data all have same priority so order doesn't matter.

#### Ordinal Data

Discrete ordered units with no concistancy between the realtive distance of adjacent categories.

Examples are:

* Opinion (agree, mostly agree, neutral, disagree, mostly disagree)
* Socio-economic status

Label encoding is used to transform it into a numerical feature. It supports all ways of represntation as nominal and also median, made and interquartile range.

Visualisation method is same.

### Quantitaive 

Quantitaive Data is about quantities of things that we can measure, Height, Volume, Weight and Distance are examples.

They are divided into discrete and continues and also continues is further divided into interval and ratio data.

#### Discrete data

The numarical data has distinct and seperate values.

Eg: No. of students in a class

#### Continues data

It is the numarical data that is given within a range.

EG: Age group

It can be visualized using histograms and box plots.

They are more adjuctive and conclusive in nature.

#### Interval Data

Data that measured along an equal distance between adjacent units.

It can be continues or discrete.

Eg: IQ test's intelligence, Time if meausured using a 12 hour clock.

Can only be either added or substracted. Represented using central point range and spread.

#### Ratio Data

Can be given zero, cannot take negative value also within some difference between individual units.

Eg: Temperature in kelvin scale, height

Can be multiplied or divided.