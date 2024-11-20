# Introduction to Python

## Features of Python, Different methods to run Python and Python IDE

### Features of Python

* Simplicity
* Readability
* Interpreted
* Extensive Libraries

### Different methods to run Python

#### The intractive mode

By opening IDLE and run python line by line or by typing 'python' in command line

#### Command line

In command line you can open notepad to edit file by:

```shell
notepad filename.py
```

And run by using python command

```shell
python filename.py
```
Note; The intractive mode can also be accessed by ```python``` command

### Python IDE

IDE Stands for integrated development environment, it is a software which include all tools needed to run python combined with a friendly user interface.

#### Examples

* Jupyter notebook
* IDLE for python
* PyCharm
* Spider
* Anaconda

## Comments, Indentation, Identifiers, Keywords, Variables

### Comments in Python

Comments are the part of the program which is ignored by the compiler and it is used to improve readabilty and also to document the program.

Example: 

```python
# Python progarm to print 'Helo'
print('Helo')
```
Output:
```text
Helo
```
Here the line after # is completely ignored by the ide that is one way to add comments in a *single-line comment*

More # or """ can be used to create *multi-line comment*:

```python
"""
This is a comment
written in
more than just one line

This program prints sum of two numbers
"""

a=5
b=7
s=a+b
print(s)
```
```
12
```

### Indentation

Indentation refers to the spaces given at the beginning of a code line, and each code block starts with indentation.

In python *indentation* is used to indicate a block of code.

Example:

```python
s=0
for i in range(1,5):
    print(i)
    s+=i

print(s)
```

The four spaces given after for loop indicates that all the code written with four spaces after the loop is part of the loop and executed in each iteration

### Identifiers

An *identifier* is a name given to an entity. In python it is the user-defined words or names we give to a variable, function, class or a module created by the programmer.

Example:

```python
import math
price=50
def get_price():
    return price


print(math.abs(get_price()))
```

Here price, get_price, math, print, abs all are identifiers

#### Rules

1. Identifiers can be a combination of letters in lowercase (a to z) or
uppercase (A to Z) or digits (0 to 9) or an underscore _.
2. Keywords cannot be used as identifiers.
3. We cannot use special symbols like !, @, #, $, % etc. in our identifier.
4. The starting can't be a number 

### Keywords

Keywords are reserved words with specific mean that cannot be used as identifiers.
In python we can print all keywords by:

```python
import keywords
for i in keywords.kwlist:
    print(i)
```

Which gives:

```python
False None True and as assert async await break class continue def del elif else except finally for from global if import is lambda nonlocal not or pass raise return try while with yield
```

### Variables

A *variable* is a name (ie identifier) associated with value, it represents the address of memory location in which the value is stored.

Example:
```python

b=4
h=9
A=b*h
print("Area is",A)
```
```
Area is 13
```

Here b,h and A are variables

## Standard Data Types

Data types are simply the specific format of each data like string for text, int and float for numbers.
Variables can store data of different types, and different types can do different things. 

#### Numbers

The data type for integers, real numbers and complex numbers specified by ```int float complex```

#### Dictionary

List of key-value pairs

Example

```python
person={'name':'Risvan','age':18}
```

#### Boolean

True or False statements

#### Set

List of values in any data type without allowing duplicates

Example

```python
A={1,2,3,4}
```

#### List

Mutable and ordered list of different types of data.

```python
A=[1,2,3,4]
```

#### Tuple

Immutable and ordered list of different types of data.

```python
A=(1,2,3,4)
```

#### String

Text data type as sequence of charectors.

```python
name="Pie"
```

 
## Input and Output, Import, and Range function

### Input and Output functions

#### Input

Text is entered to the python program using ```input()``` function:
```py
variable_name = input(prompt)
```

Example

```py
name=input("Enter your name: ")
print(name)
```

```
Enter your name: Shaheen
Shaheen
```
Note: The input function only returns the input as string, so it needed to be converted to required data type for example by ```int()``` to convert it to integer

Task: Try rewriting all previous program using input

#### Output

Text output is given in python by ```print``` function:

```py
print(word1,word2...wordN)
```

Example

```py
print("Hello, World")
print("Hello","World")
print("1+2=",1+2)
```

```
Hello, World
Hello World
1+2=3
```
### Import keyword 

Since python supports external libraries or modules they are accessed by ```import``` keyword.

```python
import module_name
```

Example
```py
import math
print(math.sin(math.pi/2))
```
```
1
```
Here the module named ```math``` is accessed by using ```import``` keyword and the function ```sin(angle)```, constant ```pi``` are accessed from it.

### Range function

Range function is used to get a sequence of numbers in a specific range.

Examples

```python
n = int(input("Enter a number: "))
r = range(n) # This gives a list from 0 to n-1
print(r)
```

```
Enter a number: 4
[0,1,2,3]
```


```python
a = int(input("Enter start: "))
b = int(input("Enter end: "))
r = range(a,b) # This gives a list from a to b-1
print(r)
```

```
Enter start: 2
Enter end: 5
[2,3,4]
```

* In both examples ```input()``` is covered with ```int()``` to convert the string input given by the user to an integer
## Operators and Operands, Precedence of Operators, Associativity

### Operators and Operands


Operants are the variable or entity in which the operation is done.

Operators are the symbols used to do a specific operation on one or more operands.

### Types of Operators

#### Arithmetic operators

These are the mathematical operators we use on numbers.

##### Basic
* Addition ```+```
* Subtraction ```-``` 
* Multiplication ```*``` 
* Division ```/```

##### Modules ```%```

This operator is used to find reminder when a number is divided by other using standard method.
for example ```10 % 2``` is ```0``` and ```10 % 3``` is 1. since ``` 10 = 3x3 + 1```

More example

```python
a=int(input("Enter a number: "))
print(a % 2 == 0)
```
```
Enter a number: 7
False
```

For ```a % b``` if ```a``` is divisible by ```b``` then ```a % b = 0```, Here 7 is not divisble by 2 so we got False

##### Exponent

It is used to get exponants of numbers
```a**b``` gives a<sup>b</sup>

```python
print(2**3)
```
```
8
```

##### Floor Division

This operator divides the two numbers and removes the decimal part of the result.

```python
print(7/5) # This gives 1.2
print(7//5) # This gives 1
```


```
1.2
1
```

#### Assignment operator

The operators which can assign or alter the value of a variable is called an assignment operator. For example ```=``` ```+=``` ```-=``` ```*=``` ```//=``` ```/=``` ```**=``` ```|=``` are assignemnt operators used in different senses.

Note: ```a += 5``` is equivalent to ```a = a + 5```

#### Comparison Operators

The operators which used to compare variables or entities are comparison operators:

* ```>=``` For greater than or equal to
* ```<=``` For less than or equal to
* ```!=``` For not equal to
* ```==``` For is equal to

Similarly ```<``` and ```>```

Example

```python
a=int(input("Enter first number: "))
b=int(input("Enter second number: "))
print(a > b)
```
```
Enter first number: 4
Enter second number: 3
True
```

Here a > b which is 4 > 3 which is true returns ```True``` as a boolean data type and then it is printed.

#### Logical Operators

These are operators which contributes to the program logic and these are performed on boolean
 
1.  ```and``` if both values are true, then the result is true
2. ```or``` if at least one of the value is true, then the result is true
3. ```not``` this applies on one boolean and if it's true, the result is False

```python
a = True
b = False
c = 5 > 7 # which is false
d = 8 < 10 # which is true

print(c and d)
print(a or b)
print(a and d)
print(c or d)
print(not a)
```
```
False
True
True
False
```

#### Identity operators

These operators compare the memory locations of two entity.
Identity operator ```is``` is similar to ```==``` but it only returns true if memory location of both object is the same.
Similarly, ```is not``` for ```!=```.

Note: ```a is not  a``` is same as ```not (a is b)```

```python 
a=5
b=5
print(a is a)
print(a is b)
print(a == b)
```
```
True
False
True
```

#### Membership Operators

These are used to test if an entity is in a sequence by it's value.
```a in b``` where ```b``` is a sequence. 

Example
```python
a=[1,2,3,4]
print(5 in a)
print(4 in a)
print(1 not in a)
```
```
False
True
False
```

#### Bitwise Operators

These are performed on numbers in their binary form.

*  ```&``` (and) which sets each bit to 1 if both bits are 1
*  ```|``` (or) which sets each bit to 1 if one of two bits is 1
* ```^``` (xor) which sets each bit to 1 if only one of two bits is 1
* ```~``` (not) which inverts all the bits
* ```<<``` (left-shift) which shift left by pushing zeros in from the right and let the leftmost bits fall off.
* ```>>``` (right-shift) which shift right by pushing copies of the leftmost
bit in from the left, and let the rightmost bits fall off

### Precedence and Associativity

#### Precedence

It determines the order in which a statement is evaluated. Like for arithmatic operations python follows PEMDAS rule,
1. Paranthesis
2. Exponents
3. Multiplication
4. Division
5. Addition
6. Substraction

#### Associativity

It's where we start executing the expression if the ```precedence``` is same.
In python as in English language, it's from left to right.


## Type Conversion, Multiple Assignment

### Type Conversion

Some data types are similar but each one only supports it's own operation, so to apply these operations first we need to convert data of one type to the one which we can do the operation.

For example, we can't perform arithmatic operation on a ```string``` even if it's content is a number, so to do that we first convert it to a numbers by using ```int``` function.
So the convert data type to other, we use the statement ```data_type(variable)```

Example

```python
# to get number of digits of square
a=int(input("Enter the number: "))
s=a*a
s_str = str(a)
print(len(s_str))
```

```
Enter the number: 4
2
```

So here to we use type conversion twice, first to perform multiplication we convert the input to **int** and then to use ```len()``` function we convert it to **str**.

### Multiple Assignment

Assiging values to more than one variables at the same time is called multiple assignment.

```var1,var2,...varN=value1,value2,..,valueN```
Example
```python
a,b,c=3,4,5
print(a*b*c)
```
```
60
```

## Expressions and Statements, Evaluation of Expressions

### Expressions and Statements

#### Expression

The part of the program which evaluates to a value is called an expression.
They can't modify the program state, it may include variables, constants, operatoes and functions.

Eg: ```x+5```.```(x+5)*(y-3)```,```a>b``` are expressions.

#### Statements

The part of the program which performs an action or modifies the program state is called a **statement**
A statement may contain expressions and assignment of variables.

Examples
```python
x=5
print(x)
if x < 10:
    print(True)
y=7*x
print(y)
```

All these lines above are statements

#### Evaluation of Expressions

Expressions are evaluated by parsing them to specific tupe and associating the variables with their values.

Example:
```
b=1
x=5+7*10-b
```
Here first the value of ```b``` is taken (which is 1) and evaluates 5+7x10-1 and assigns the value (which is 74) to ```x```

## Boolean Expressions

Expressions that include comparison operators which returns ```True``` or ```False``` after evaluations is called a boolean expression.

They are mostly used in control statements since they require a boolean for decision making.

Examples: ```5 > 10```,```a < b```,```len(a) <= 5```,```not a < 2```, etc.
