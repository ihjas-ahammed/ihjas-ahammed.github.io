# Discrete Random Variables and Their Probability Distribution

## Random Variable and Probability Distribution

A random variable is a function from a sample space to a real number.

Eg: For two coins tossed at same time,

S = {HH,HT,TH,TT}

Here let's define a random variable ```x``` as number of heads.

<table>
<tr><th></th><th>HH</th><th>HT</th><th>TH</th><th>TT</th></tr>
<tr><th>x</th><td>2</td><td>1</td><td>1</td><td>0</td></tr>
<tr><th>p</th><td>p(x=2)=1/4</td><td>p(x=1)=1/2</td><td>p(x=1)=1/2</td><td>p(x=0)=1/4</td></tr>
</table>

This table is called probability distribution (like a frequency distribution)

E(x) which is expectation of x is also mean of the probability distribution

E(x)= ∑ x<sub>i</sub>p(x=x<sub>i</sub>)

<hr>


Random variables are also called chance variables or stochastic variables

if x<sub>1</sub> and x<sub>2</sub> are random variables and c is a constant.

1. cx<sub>1</sub> is a random variable
2. x<sub>1</sub> + x<sub>2</sub> is a random variable
3. x<sub>1</sub> - x<sub>2</sub> is a random variable
4. Max[x<sub>1</sub>,x<sub>2</sub>] is a random variable
5. Min[x<sub>1</sub>,x<sub>2</sub>] is a random variable

### Probability Mass Functions

The probability distribution of a discrete random variable is a list of the distinct values of x<sub>i</sub> of X with their associated probablities.

f(x<sub>i</sub>) or p(X=x<sub>i</sub>) is called probability mass function, provided:

1. f(x<sub>i</sub>) >= 0
2. Σ f(x<sub>i</sub>) = 1

* A probability mass function can be represented as a histogram

### Distribution Functions

For any random variable 'X' the function of the real variable X defined as
 F(x) = P(X<=x) is called cumulative probability distribution function or cumilative distribution function

 if X is a discrete random variable with probability mass function p(x), then the distribution function is defined as:

 F(x) = p(X<=x) = ∑ p(x)

 ### Properties

 If F(x) is the distribution function of X:

 1. It is defined for all real values of X
 2. 0 <= F(x) <= 1 
 3. F(-∞)=0 and F(∞)=1
 4. a < b => F(a) < F(b) => F is non-decreasing
 5. The graph of F(x) is a step function for discrete random variables


 