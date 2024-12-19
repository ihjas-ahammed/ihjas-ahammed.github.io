# Data Structures in Python

## Working with strings and string manipulation
### Strings

A string is defined as a sequence of characters simply we can call it a text. 
It is actually like a tuple with each characters as it’s elements.  Since it’s like a tuple it is immutable means it’s elements can’t be modified. 

### Creating Strings

Strings in python are initialised inside quotes:
```python
a="Hello"
b='This is a string'
c="""
This is a paragraph in python inside a string. This can be multiline like this.
""""""
```

Strings can also be created from user input using input function:

```python
name=input("Enter your name: ")
```

### Operations on String

#### Concatenation 
Like tuple we can add strings together using the plus(+) operator:
```python
a="Hello"
b="World"

ab=a+" "+b 
print(ab)
```
```
Hello World
```
#### Repeating

I was fascinated by this feature, because this is unique and only works in python for other languages we need loops to multiply the same string here we use multiply(*) operator to do that:

```python
a="i"
b=a*3 
print(b)
```
```
iii
```
#### Slicing

The most useful operator is the slicing operator since we can use it to extract a specific part of string by giving the start and end indices on a square bracket with colon. 

```python
a="The name is Apple"
b=a[12:17]
print(b)
```
```
Apple
```

#### Comparison

The comparison operator has a significant importance since it’s used on most of the programs in python we use based on strings.  We can check if the contents of two strings are equal or if they’re not:

```python
a="Hi"
b="hi"
c="Hi"

print(a==b)
print(a==c)
print(b!=c) 
```
```
False
True
True
```

#### String formatting

Like the slice operator which is the replacement for slice function we have string formatting operator which is the mod (%) as a replacement for the replace function:

```python
format="Hello %s"
name="Peter"
message=format % name 
```
```python
Hello Peter
```

Like that %s for string, %d for signed decimal integer, %c for character, %f for floating point number. 

Note: Since string is more like a tuple we can use other operators which we use on tuples to any strings.

### String Manupulation

#### len(str): to find length

```python
a="Apple"
print(len(a)) 
```
```
5
```

#### str1.find(str2): to get index of a string

```python
a="Hello"
print(a.find("o"))
```
```
4
```
#### str.capitalize(): to turn first char to capital

```python
a="new york"
b=a.capitalize()
```
```
New york
```
#### str.count(char): to check frequency of characters

```python
a="Apple"
print(a.count("p")) 
```
```
2
```
#### str1.endswith(str2) and str1.startswith(str2): to check if it starts with or ends with a string

```python
a="Steve Jobs"
b="Steve Rogers"

print(a.startswith("Steve")) 
print(b.endswith("Rogers")) 
```
```
True
True
```

#### str1.replace(str2,str3): to replace one part of string with a new one

```python
a="Steve Jobs"
print(a.replace(“Jobs”,”Rogers”))
```
```
Steve Rogers
```
#### str1.split(str2): Split a string to array by a divider string

```python
a="Tony Stark"
words=a.split(" ")
print(words[1]) 
```
```
Stark
```

#### str.upper() and str.casefold(): To upper case and lower case respectively

```python
a="Apple"
print(a.casefold()) 
print(a.upper()) 
```
```
apple
APPLE
```

## List - creating list, accessing, updating and deleting elements from a list

Sometime we need to deal with more than one variables which are logically relate. So giving them as different variables maybe time consuming. That’s where the concept of lists. We can store a related data as one variable and access them separately using lists. 

### List

Lists are ordered, mutable collections that can store multiple elements of different type

### Creating lists 

By using the square brackets:

```python
a=[] # This creates an empty list
b=[1,2,3] # A list with items 1,2,3
c=[3,"Hello",[3,2]] # The elements can be any other data types 
print(a)
print(b)
print(c)
```
```
[]
[1,2,3]
[3,"Hello",[3,2]]
```
By splitting strings:

```python
a="Hello World"
b=a.split(" ") 
print(b)
```
```
['Hello', 'World']
```

### Properties of List 

Not only just to store sequence of data, we can do more with lists using its property. 

#### Iterable

The for loop in python is mainly created for this one feature which is to iterate through lists. This enables us to handle each elements of list specifically and perform operations on them. Also to create new lists like directly from user inputs or by manupulating other lists.

Examples

```python
a=[1,2,3,4,5] # A simple list
for i in a: # Itrates each elements as i
   k=i*5
   print(i)
   print(k)
```
```
1
5
2
10
3
4
20
5
25
```

```python
a=[]
n=int(input("No. of items: "))
for i in range(1,n+1):
   e = input(str(i)+": ")
   a += [e]
print(a)
```
```
No. of items: 3
1: Salmaan
2: Risvan
3: Shaheen
["Salmaan","Risvan","Shaheen"]
```

#### Mutable

Lists are mutable, meaning their elements can be modified specifically one by one if you want to. This makes list different from tuple since tuple is immutable we often convert it to list for modifying them, it can be done easily by adding an empty list to it.

```python
a=[1,2,3,4,5] 
print(a)
a[1]=3

print(a) 
```
```
[1,2,3,4,5] 
[1,3,3,4,5]
```
#### Ordered

If list are not ordered, all the properties we described above won't work. So, Lists are ordered in a way each elements have their on index and we can use it to access them.

The important thing to remember is that the first element has index zero (not one).
So for n elemented list we have n-1 as the index of it's last elements.

#### Accessing elements

```python
a=[1,2,3,4,5]
print(a[3]) 
```
```
4
```

#### Duplicate Elements

Unlike sets, list can have duplicate elements in different indices, but they're stored in different memory locations and manipulated seperately.

```python
a=[1,1,2,3] # Here we have two ones
print(a[0] + a[1]) 

a[0] = 0 # Changed 1st element to 0
print(a) 
```
```
2
[0,1,2,3]
```

#### Heterogenous

We can make a list of same data type and also we can make a list of different types of data which makes it heterogenous.


## Basic list operations


## Concatination

We can add items to list using three methods by the two functions append or extend and also by using the addition operator or += operator
Also we can add two lists and make a new one.

#### Using append

```python
a=[]
a.append(1)
print(a) 
```
```
[1]
```
#### Using extend

```python
a=[1,2]
a.extend([3,4])
print(a)
```
```
[1, 2, 3, 4]
```

#### Using the operator

a=[]
a+=[1,2,3]
print(a) # [1,2,3]

### Adding two lists

```python
a=[1,2]
b=[3,4]
c=a+b
print(c)
```
```
[1,2,3,4]
```

### Finding length

All sequences support the len function so here also we use it to get the length of a list:

```python
a=[1,2,3]
print(len(a)) 
```
```
[1,2,3]
```
### Inserting elements


We can use append function but it only works for an element to be inserted at the end so to specify position we can use insert:

Syntax: ```a.insert(element,position)```

```
a=[1,2,4]
a.insert(3,2)
```
```
[1, 2, 4, 2]
```

### Removing Elements

We can use remove() to remove the first occurrence of an element from the list.

```python
a = [1, 2, 3, 4]
a.remove(3) 
```
```
[1, 2, 4]
```

or we can use del operator like ```del a[2]```


### Slicing a List

You can slice a list to create a sublist.

```python
a = [1, 2, 3, 4, 5]
print(a[1:3])  
```
```
[2,3]
```

### Extending a List

We use extend() to add multiple elements from another list to the end.

```python
a = [1, 2, 3]
a.extend([4, 5]) 
print(a)
```
```
a = [1, 2, 3]
a.extend([4, 5]) 
print(a)
```

## Tuple- creating and accessing tuples in python

### Creating Tuples

Tuples are immutable sequences enclosed in parentheses ```()```.

```python
numbers = (1, 2, 3)
single = (1,)  # Note the comma
mixed = (1, "hello", 3.14)
```

### Accessing Tuples

Similar to lists, using index starting from 0.

```python
coordinates = (10, 20, 30)
print(coordinates[0])
print(coordinates[-1])
print(coordinates[1:])
```
```
10
30
(20, 30)
```

## Basic tuple operations

### Tuple Methods

Since tuples are immutable, they have limited methods:
* ```count()``` - counts occurrences
* ```index()``` - finds first occurrence

```python
numbers = (1, 2, 2, 3, 2)
print(numbers.count(2))
print(numbers.index(3))
```
```
3
3
```

## Dictionary, built in methods to create, access, and modify key-value pairs

### Creating Dictionaries

Dictionaries store key-value pairs enclosed in curly braces ```{}```.

```python
person = {
    "name": "Risvan",
    "age": 18,
    "city": "Calicut"
}
```

### Accessing and Modifying

Keys are used to access and modify values.

```python
student = {"name": "Aflah", "grade": "A"}
print(student["name"])
student["grade"] = "B"
student["age"] = 20  # Adding new key-value pair
print(student)
```
```
Aflah
{'name': 'Aflah', 'grade': 'B', 'age': 20}
```

### Dictionary Methods

* ```get()``` - safe way to access values
* ```keys()``` - returns all keys
* ```values()``` - returns all values
* ```items()``` - returns key-value pairs
* ```pop()``` - removes key-value pair

Example
```python
car = {
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020
}

print(car.keys())
print(car.values())
car.pop("year")
print(car)
```
```
dict_keys(['brand', 'model', 'year'])
dict_values(['Toyota', 'Camry', 2020])
{'brand': 'Toyota', 'model': 'Camry'}
```

## Set and basic operations on a set

### Creating Sets

Sets are unordered collections of unique elements enclosed in curly braces ```{}```.

```python
numbers = {1, 2, 3, 4}
mixed = {1, "hello", 3.14}
```

### Set Operations

* Union ```|```
* Intersection ```&```
* Difference ```-```
* Symmetric Difference ```^```

Example
```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

print(A | B)  # Union
print(A & B)  # Intersection
print(A - B)  # Difference
print(A ^ B)  # Symmetric Difference
```
```
{1, 2, 3, 4, 5, 6}
{3, 4}
{1, 2}
{1, 2, 5, 6}
```

### Set Methods

* ```add()``` - adds element
* ```remove()``` - removes element
* ```discard()``` - removes if exists
* ```clear()``` - removes all elements

Example
```python
fruits = {"apple", "banana"}
fruits.add("orange")
fruits.remove("banana")
print(fruits)
```
```
{'apple', 'orange'}
```
