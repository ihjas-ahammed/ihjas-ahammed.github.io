#  Control  Structures

##  Decision  Making  Statements

###  If  statement

If  statement  allows  a  code  block  to  execute  conditionally  based  on  if  a  specific  boolean  expression  is  true  or  false.

####  Syntax

```python
if  expression:
        #  code  block
```

Here  the  ```expression```  is  a  boolean  expression  and  if  it  is  true,  then  the  code  given  in  the  intendation  after  the  statement  will  be  executed  unless  the  rest  of  the  program  will  be  executed.

Example

```python
#  check  if  a  number  is  greater  than  ten
a=int(input("Enter  the  number:  "))

if  a  >  10:
        print(a,"is  greater")
```

```
Enter  the  number:  12
12  is  greater
```

###  If  Else  Statement

In  ```if``` only statement the code block is executed only if the condition given is true, here we also add an ```else``` statement to specify the code which gets executed only if the expression is false

#### Syntax

```python
if expression:
    # code block if true
else:
    # code block if false
```

Here just like the other one, the first code block will get executed if the expression is true and otherwise the second code block is executed.

Example

```python
# find which number is greater from two

a=int(input("Enter first number: "))
b=int(input("Enter second number: "))

if a > b:
    print(a,"is greater")
else:
    print(b,"is greater" )
```
```
Enter first number: 12
Enter second number: 10
12 is greater
```

### If Elif Else Statement

It is a more flexible version of if else statement, it allows multiple blocks to be executed on specific conditions.

#### Syntax
```python
if condition1:
    # code block run if condition 1 is true
elif condition2:
    # code block run if previous is false and condition 2 is true
elif condition3:
    # code block run if previous is false and condition 3 is true
...
...
...
elif conditionN:
    # code block run if previous is false and condition n is true
else:
    # code block to run if all previous conditions are false
```
Example
```python
# to find biggest among three

a=int(input("Enter first number: "))
b=int(input("Enter second number: "))
c=int(input("Enter third number: "))

if a > b and a > c:
    print(a,"is the biggest")
elif b > a and b > c:
    print(b,"is the biggest")
else:
    print(c,"is the biggest")
```
```
Enter first number: 2
Enter second number: 4
Enter third number: 5
5 is the biggest
```

### Nested if statement

Since the code block inside a conditional statement may include any type of code, it can also include another conditional statement and such a statement in which an if statement is written as part of another one is called a nested if statement.

Example
```python
a = float(input("Enter a number: "))

if a > 0:
    print("The number is positive.")
else:
    if a < 0:
        print("The number is negative.")
    else:
        print("The number is zero.")
```
```
Enter a number: -7
The number is negative
```

## Loops

### For loops

A ```for``` loop is used to iterate through objects in a sequence, that is it has an iterator variable which will become each item of the sequence in each execution. So a ```for``` loop repeats until the iterator variable become all of the items in the sequence.

#### Syntax
```python
for iterator_variable in sequence:
    # code block to execute in each iteration
```

Example
```python
# to print first 10 even numbers
for i in range(1,11):
    print(i*2)
```

```
2
4
6
8
10
12
14
16
18
20
```
Note: When we use ```for``` loops, we often use ```range()``` function since it returns a sequence in a specific range.

### For loop with else

This refers to adding an ```else``` statement after the ```for``` loop to specify the code block to run if the sequence provided is empty or if all iterations are complete.

#### Syntax
```python
for iterator_variable in sequence:
    # code block to execute on iteration
else:
    # code block to execute after iteration 
```
Example
```python
# to print 'n' natural numbers
n=int(input("Enter count: "))
for i in range(n):
    print(i+1)
else:
    print("Done")
```
```
Enter count: 4
1
2
3
4
Done
```

### While loop

A ```while``` loop is the kind of loop that repeately execute the given code block as long as the given ```condition``` is true.
Note: The condition is a boolean expression

#### Syntax
```python
while condition:
    # code block to repeats as long as the condition is true
```
Example
```python
# to find sum of digits
a=int(input("Enter a number: "))
s=0
while a > 0:
    s += (a%10)
    a=int(a/10)

print("The sum of digits is",s)
```
```
Enter a number: 731
The sum of digits is 10
```
### While loop with else
Like for the ```for...else``` loop here, we add an ```else``` statement after ```while``` loop to specify the code block to execute once the ```condition``` becomes false.
#### Syntax
```python
while condition:
    # code block to repeat as long as condition is true
else:
    # code block to execute once the condition is false
```
Example
```python
# to print 'n' odd numbers
n=int(input("Enter the count: "))
i=0
while n > 0:
    print(i*2+1)
    n -= 1
else:
    print("Done")
```
```
Enter the count: 2
1
3
Done
```

### Nested Loops

Like nested if, a nested loop is a programming construct where one loop is placed inside another loop. 
Example
```python
# to print prime numbers upto a limit
n = int(input("Enter the limit: "))
i = 2
while i <= n:
    j = 2
    while j <= i:
        if i % j == 0:
            break  
        j += 1
    if j == i:
        print(i)  
    i += 1
```
```
Enter the limit: 20
2
3
5
7
11
13
17
19
```

Control Structures (continued)
## Using indentation in Python to define code blocks

Indentation refers to the spaces at the beginning of a code line. In Python, indentation is crucial as it defines code blocks and their scope. Unlike other programming languages that use braces or keywords, Python uses indentation to indicate which statements belong to which block.

### Basic Rules

* Standard indentation is 4 spaces or one tab
* All statements in the same block must have the same indentation level
* Nested blocks have additional indentation

Example

```python
def check_number(n):
    if n > 0:
        print("Number is positive")
        if n > 10:
            print("Number is greater than 10")
    else:
        print("Number is not positive")
```
```python
if True:
print("This will cause an error")  # IndentationError
```
```python
if True:
    print("This will work")  # Proper indentation
```
## Control Statements - break, continue, pass
### Break Statement

The break statement is used to exit or "break" out of a loop before it ends.

Example
```python
# Print numbers until we find a multiple of 5
for i in range(1, 10):
    if i % 5 == 0:
        print("Found multiple of 5:", i)
        break
    print(i)
```
```
2
3
4
Found multiple of 5: 5
```
### Continue Statement
The continue statement skips the rest of the current loop iteration and continues with the next iteration.

Example

```python
# Print odd numbers only
for i in range(1, 6):
    if i % 2 == 0:
        continue
    print(i)
```
```
3
5
```
### Pass Statement

The pass statement is a null operation. It is used when a statement is required later but no code needs to be executed.

#### Use Cases

* Empty function definitions
* Place holder for future code
* Empty class definitions

Example
```python
# Using pass in different scenarios
def my_function():
    pass  # Function to be implemented later

if True:
    pass  # Nothing to do here yet

class MyEmptyClass:
    pass  # Empty class definition
```
### Example for all three statement
```python
# Process numbers from 1 to 10
for i in range(1, 11):
    if i == 3:
        pass  # Do nothing for number 3
    elif i == 5:
        continue  # Skip number 5
    elif i == 8:
        break  # Stop at number 8
    print(i)
```
```
2
3
4
6
7
```
```pass``` allows execution to continue normally

```continue``` skips printing 5

```break``` stops the loop at 8