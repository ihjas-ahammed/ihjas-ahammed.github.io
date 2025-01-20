#  Data

##  Data
Any  information  that  is  stored  in  the  digital  format  is  called  **Data**

##  BigData

*  Data  generated  from  various  sources  is  huge  in  size  and  this  is  termed  as  **BigData**
*  It  is  used  to  derive  business  decision  by  analyzing  it.
*  Based  on  how  the  data  is  stored,  organized  and  analyzed  data  is  divided  into  three:  structured,  semi-structured  and  unstructured  data.

###  Structured  data

*  It  refers  to  data  in  tabular  form  (i.e  with  rows  and  columns)
*  DataBases  that  hold  structured  data  is  called  relational  databases
*  The  term  relation  means  table
*  In  structured  tables,  all  rows  have  same  set  of  columns
*  SQL  is  the  programming  language  used  to  work  with  RDbMS  (  relational  database  management  system)

<table>
        <tr>
                <th>Pros</th>
                <th>Cons</th>
        </tr>
        <tr>
                <td>Require  less  processing  since  it's  easy  to  manage</td>
                <td>Limited  usability  because  it's  predefined</td>
        </tr>
        <tr>
                <td>Since  it's  an  old  method,  it  supports  several  tools  and  work  with  ML  algorithms</td>
                <td>Not  very  scalable  or  flexible</td>
        </tr>
        <tr>
                <td>Consistent  and  predictable  format  reduces  errors</td>
                <td>Difficult  to  modify  schema  once  implemented</td>
        </tr>
        <tr>
                <td>Easier  to  maintain  data  integrity  and  quality</td>
                <td>May  not  capture  complex  relationships  effectively</td>
        </tr>
        <tr>
                <td>Efficient  querying  and  faster  search  operations</td>
                <td>Storage  overhead  due  to  fixed  schema  requirements</td>
        </tr>
</table>

####  Use  Cases  for  Structured  Data

*  Business  analytics  and  reporting
*  Web  development
*  Data  Science  and  Machine  Learning
*  Healthcare
*  Education
*  Finance
*  Supply  chain  and  logistics
*  IoT  and  Smart  Devices
*  Government  and  public  services

###  Semi-Structured  Data

*  **Semi-structured  data**  is  simply  an  incompletely  structured  data.
*  HTML,XML,JSON  are  examples  for  semi-structured  data

Example  xml
```xml
<person>
        <name>John  Smith</name>
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
Example  json
```json
{
        "person":  {
                "name":  "John  Smith",
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
                <td>Flexible  schema  allows  for  varying  data  structures</td>
                <td>More  complex  to  query  compared  to  structured  data</td>
        </tr>
        <tr>
                <td>Self-describing  nature  makes  it  easy  to  understand</td>
                <td>Requires  more  storage  space  due  to  repeated  tags/keys</td>
        </tr>
        <tr>
                <td>Easy  to  modify  without  affecting  entire  dataset</td>
                <td>Inconsistent  structure  can  lead  to  data  quality  issues</td>
        </tr>
        <tr>
                <td>Better  suited  for  evolving  business  requirements</td>
                <td>More  processing  overhead  for  data  validation</td>
        </tr>
        <tr>
                <td>Natural  fit  for  web  and  API  integrations</td>
                <td>Can  be  slower  to  process  than  structured  data</td>
        </tr>
</table>

####  Use  cases  for  semi-structured  data  

*  Scientific  Research  Applications  
*  Healthcare  Information  Management  
*  Business  Intelligence  Analytics  
*  Web  Technology  Integration  
*  IoT  Device  Ecosystems  
*  Document  Management  Systems  

###  Unstructured  Data

*  When  data  is  not  organized  in  a  predefined  manner  it  is  **unstructured**  
*  Video,  Audio  and  Images  are  example  for  unstructured  data.

<table>
        <tr>
                <th>Pros</th>
                <th>Cons</th>
        </tr>
        <tr>
                <td>Can  store  diverse  and  complex  data  types</td>
                <td>Challenging  to  analyze  without  preprocessing</td>
        </tr>
        <tr>
                <td>Ideal  for  multimedia  content  like  images,  videos,  and  text</td>
                <td>Requires  specialized  tools  and  algorithms  for  processing</td>
        </tr>
        <tr>
                <td>Supports  natural  data  representation  without  constraints</td>
                <td>Harder  to  query  and  integrate  compared  to  structured  data</td>
        </tr>
        <tr>
                <td>Facilitates  storage  of  large  volumes  of  varied  data</td>
                <td>Data  extraction  and  transformation  can  be  time-intensive</td>
        </tr>
        <tr>
                <td>Useful  for  machine  learning  and  deep  learning  applications</td>
                <td>Higher  storage  and  processing  costs</td>
        </tr>
</table>


####  Use  cases  for  unstructured  data

*  Classification  of  data  like  image  audio  and  video
*  As  input  predictive  models
*  Chatbots

##    Statistical  Data

Statistical  Data  refers  to  qualitative  facts  that  are,  gathered,  organised  and  analysed  in  a  systematic  way.  Which  are  collected  from  surveys,  experiments,  observations  and  even  from  existing  sources.

Statistical  Data  is  divided  into  both  qualitative  and  quantitative  based  on  whether  they  are  measurable  or  not.

###  Qualitative  Data

It  is  also  called  categorical  data  and  it  is  about  things  that  can't  be  measured  in  an  objective  sense.

Eg:  Age  Group,  Gender,  Nationality  etc.

They  are  divided  into  nominal  and  ordinal  data  based  on  if  they  are  ordered  units  or  not.


####  Nominal  Data

Nominal  Data  is  used  to  label  variables  without  giving  any  quantitaive  value.  But  they  are  represented  in  discrete  units.

Eg:  Gender,  Hair  color,  Nationality  etc.

Hot  encoding  is  used  to  transform  nominal  data  into  numerical  feature.  The  only  logical  operation  can  be  applied  will  be  equality  or  inequality.

They  can  be  represented  using  frequencies,  percentages,  proportions  and  central  point.

Graphically  using  a  pie  chart  or  a  bar  chart.

In  short,  the  units  in  nominal  data  all  have  same  priority  so  order  doesn't  matter.

####  Ordinal  Data

Discrete  ordered  units  with  no  concistancy  between  the  realtive  distance  of  adjacent  categories.

Examples  are:

*  Opinion  (agree,  mostly  agree,  neutral,  disagree,  mostly  disagree)
*  Socio-economic  status

Label  encoding  is  used  to  transform  it  into  a  numerical  feature.  It  supports  all  ways  of  represntation  as  nominal  and  also  median,  made  and  interquartile  range.

Visualisation  method  is  same.

###  Quantitaive  

Quantitaive  Data  is  about  quantities  of  things  that  we  can  measure,  Height,  Volume,  Weight  and  Distance  are  examples.

They  are  divided  into  discrete  and  continues  and  also  continues  is  further  divided  into  interval  and  ratio  data.

####  Discrete  data

The  numarical  data  has  distinct  and  seperate  values.

Eg:  No.  of  students  in  a  class

####  Continues  data

It  is  the  numarical  data  that  is  given  within  a  range.

EG:  Age  group

It  can  be  visualized  using  histograms  and  box  plots.

They  are  more  adjuctive  and  conclusive  in  nature.

####  Interval  Data

Data  that  measured  along  an  equal  distance  between  adjacent  units.

It  can  be  continues  or  discrete.

Eg:  IQ  test's  intelligence,  Time  if  meausured  using  a  12  hour  clock.

Can  only  be  either  added  or  substracted.  Represented  using  central  point  range  and  spread.

####  Ratio  Data

Can  be  given  zero,  cannot  take  negative  value  also  within  some  difference  between  individual  units.

Eg:  Temperature  in  kelvin  scale,  height

Can  be  multiplied  or  divided.

###  Data  Analysis

1.  Collect
2.  Organise
3.  **Analyse**

Steps:

*  Identify  data  using  descriptive  analysis
*  Investigate  using  diagnostic  analysis
*  Perform  actions  using  prescriptive  analysis
*  Predict  future  using  predictive  analysis

Collect,  Clean,  Store  and  Transform  then  apply  required  analysis  technique

####  Data  Mining

It  is  the  step  that  involves  to  collect  data  from  different  sources.

####  Data  Management

Changing  different  types  of  data  into  something  effective.  Like  format  and  unit  to  a  standard  format.

####  Statistical  Analysis

Analysis  data  statistically  based  on  the  way  we  needed  to  analyse.

####  Data  Presnetation

After  deny  all  these,  one  must  create  a  statistical  report  with  the  prediction  needed  to  be  made.

##  Types  of  Data  Analysis

1.  Predictive
2.  Descriptive
3.  Exploration
4.  Diagnostic
5.  Inferential

###  Predictive  Analysis

It  gives  the  probability  of  an  event  or  a  situation.

By  using  techniques  like:

*  Modeling
*  Machine  Learning
*  Data  Mining
*  Game  Theory

This  may  help  to  give  predictions  about  a  future  event.

The  processes:
1.  Linear  regression
2.  Time  series  analysis
3.  Data  mining

Basicity  cornerstones  of  predictive  analysis:

1.  Predictive  Modeling
2.  Decision  Analysis  and  Optimization
3.  Transaction  Profile

### Exploratory Analysis

Exploratory analysis is a crucial step in data analysis because it provides a deeper understanding of the data, which leads to better quality analysis and business decisions.

**Definition:** A process of examining data to gain insights and understanding.

**Main Goal:** Ensure data is thoroughly analyzed before making assumptions or conclusions.

##### Benefits for Data Analysts
* Identify potential errors.
* Understand patterns and relationships within the data.
* Detect unusual or unexpected events (outliers).
##### Benefits for Data Scientists
* Validate results.
* Ensure results are relevant to desired business outcomes.
##### Benefits for Stakeholders
* Confirm they are asking the right questions about their data.


### Diagnostic Analytics

Diagnostic analytics is like being a detective. You look at past events (historical data) to figure out why something happened. Companies use this approach to understand their problems better and find solutions based on what they've learned from their past experiences. Data discovery and data mining are two important tools in a diagnostic analyst's toolkit.

**Core Principle:** Uses historical data to answer questions and find solutions to problems.

**Focus:** Identify dependencies and patterns within the historical data of a specific problem.
#### Value for Companies
* Provides deep insights into problems.
* Companies maintain detailed historical data to avoid redundant data collection for each new problem, saving time and resources.
Common Techniques Used:

**Data Discovery:** The process of collecting data from various sources and getting an initial understanding of it.

**Data Mining:** Examining large datasets to find patterns, anomalies, and other valuable information.



## Inferential Data Analysis

*   **Definition:** A branch of statistics that uses *sample data* to make inferences or draw conclusions about a *larger population*.
*   **Purpose:** To generalize findings beyond the collected sample and make predictions or hypotheses about the broader population.
*   **Techniques Used:**
    *   **Hypothesis Testing:** Determining if there's enough evidence to support a claim about the population.
    *   **Confidence Intervals:** Estimating a range of values that likely contains the true population parameter.
    *   **Regression Analysis:** Examining the relationship between variables to predict outcomes.
*   **Importance:**
    *   Allows researchers to draw significant conclusions from smaller datasets.
    *   Essential for making data-driven decisions in fields like science, business, economics, and social sciences.
    *   Helps in better understanding complex phenomena and predicting future outcomes with a degree of confidence.

**In simpler terms:**

Inferential data analysis is like making an educated guess about a whole group based on information from just a part of that group. It's like surveying a small number of students in a school and using their answers to understand the opinions of the entire student body.

The methods used in this type of analysis help scientists and researchers decide if what they found in their sample is likely true for the larger population and to what extent they can be confident in their findings. This is crucial for making reliable decisions and predictions in many different areas of study and business.

### Statistical Inference

*   **Definition:** The process of using data analysis to deduce properties of an underlying population distribution.
*   **Core Concept:** Making inferences (conclusions or generalizations) about a *population* based on data collected from a *sample*.
*   **Branch of Statistics:** Statistical inference is a major area within the field of statistics.

Statistical inference is about using information from a smaller group (a sample) to understand the characteristics of a larger group (the population). It's like trying to understand the average height of all students in a country by measuring the height of just a few hundred students.

Statistical inference uses various techniques like estimation, confidence intervals, and hypothesis testing to draw conclusions about a whole population by analyzing just a portion of it. This is a fundamental concept in statistics used across many different disciplines.


### Population

*   **Definition:**  The complete set of all elements or individuals under consideration in a study.
*   **Parameters:** Measurable characteristics of the population, such as the mean (average) and standard deviation (spread of data).
*   **Example:** All people living in India represent the population of India.

**In simpler terms:**

The "population" in statistics refers to the *entire group* that you are interested in studying. It could be all people, all animals of a certain species, all products made by a factory, or any other complete set of items.

When we talk about characteristics of the population, like the average age or the range of heights, we use the term "parameter." These parameters describe the whole population.

