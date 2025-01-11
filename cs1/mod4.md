#  Functions
##  Built-in  functions
###  Mathematical  functions
We  have  mathematical  operators  in  python  but  that  is  not  enough  to  solve  math  problems  or  calculations.
By  default  python  have  functions  like:
*  ```abs()```  to  find  absolute  value  (ie  modulus  or  remove  sign)  of  a  value.
*  ```pow()```  to  find  the  power  of  a  number
*  ```round()```  to  round  a  number  to  a  certain  decimal  point

Example
```python
a=abs(-1)
b=pow(2,3)
c=round(2.156,2)
print(a,b,c)
```
```
1  8  2.16
```
For  using  of  functions  like  trignometric,  logarithametic  and  exponentials  we  need  to  import  the  ```math```  module  and  that  is  explained  at  the  end  of  the  module
###  Date  time  functions

Date  and  time  is  handled  in  python  by  ```datetime```  module  which  includes  classes  like  ```datetime```,```date```,```time```,```timedelta```

Each  class  is  imported  by:

Since  ```date```  class  belongs  to  ```datetime```  module  it  is  imported  by:
```python
from  datetime  import  class_name
  ```

  Note:  to  import  all  modules,  you  can  use  ```*```  instead  of  ```class_name```

####  Python  date  class


*  ```date(yyyy,mm,dd)```  used  to  initialize  a  date  object  which  is  an  entity  in  which  we  can  do  date  operations  and  gives  the  date  when  we  print  it.

#####  Methods  of  the  date  Object

date.year,  date.day,  date.month  are  attributes  of  date  object

######  date.today()

Returns  the  current  local  date.

```python
today  =  date.today()
print(today)    #  Example:  
```
```
2024-11-28
```

######  date.fromisoformat(date_string)
Parses  a  date  string  in  ISO  8601  format  (YYYY-MM-DD)  into  a  date  object.

```python
d  =  date.fromisoformat("2024-11-28")
print(d)    
```
```
2024-11-28
```
######  date.replace(year,  month,  day)
Creates  a  new  date  object  with  modified  components.

```python
d  =  date(2024,  11,  28)
new_date  =  d.replace(year=2025)
print(new_date)    
```
```
2025-11-28
```
######  Difference
```python
from  datetime  import  date

d1  =  date(2024,  11,  28)
d2  =  date(2025,  1,  25)
difference  =  d2  -  d1
print(difference.days)    
```
```
58
```
####  Python  time  class

```time(hour,  minute,  second,  microsecond)```  used  to  initialize  a  time  object.

####  Methods  of  the  Time  Object
time.hour,  time.minute,  time.second,  time.microsecond
These  are  read-only  attributes  that  return  the  respective  components  of  the  time.
```python
from  datetime  import  time
t  =  time(12,  30,  45)
print(t.hour)          
print(t.minute)      
print(t.second)      
```
```
12
30
45
```

####  time.replace(hour,  minute,  second,  microsecond)

Creates  a  new  time  object  with  modified  components.

```python
t  =  time(12,  30,  45)
new_time  =  t.replace(hour=13)
print(new_time)
```
```
13:30:45
```
####  Python  datetime  Class

```datetime(year,  month,  day,  hour,  minute,  second,  microsecond)```  used  to  initialize  a  datetime  object.  Date  time  class  just  a  new  class  in  which  date  and  time  combined  so  it  actully  includes  all  methods  and  attributes  of  date  and  time  objects.

####  Methods  of  the  Datetime  Object

#####  datetime.now()

Returns  the  current  local  date  and  time.

```python
from  datetime  import  datetime
now  =  datetime.now()
print(now)    
```
```
2024-11-28  0:30:45.123456
```


#####  datetime.timedelta
Represents  a  duration,  the  difference  between  two  dates  or  times.

```python
from  datetime  import  datetime,  timedelta
dt1  =  datetime(2024,  11,  28,  10,  30,  45)
dt2  =  dt1  +  timedelta(days=3,  hours=2)
print(dt2)
```
```
2024-12-01  14:30:45
```

###  Random  Numbers
#####  Definition
Random  numbers  are  numbers  generated  by  an  algorithm  that  are  designed  to  be  unpredictable  and  uniformly  distributed.

Example

This  code  generates  a  random  integer  between  1  and  10.
```python
import  random
random_number  =  random.randint(1,  10)
print(random_number)
```
```
5
```
##  Writing  User-Defined  Functions
###  Function  Definition
A  function  definition  is  a  block  of  code  that  defines  the  behavior  of  a  function.  It  specifies  the  function's  name,  parameters,  and  return  value.
Syntax
```python
def  function_name(parameter1,parameter2,...):
        #  function  code  block
        return  return_value  #  if  needed
```

Example

```python
def  greet(name):
        print("Hello,  "  +  name  +  "!")
This  code  defines  a  function  called  greet  that  takes  a  single  parameter  name.
```
###  Function  Call
A  function  call  is  an  expression  that  invokes  a  function,  passing  in  any  required  arguments.
Example

```python
greet("Risvan")
```
```
Hello  Risvan
```
This  code  calls  the  greet  function,  passing  in  the  argument  "Risvan".

###  Flow  of  Execution

The  flow  of  execution  refers  to  the  order  in  which  the  statements  in  a  program  are  executed.

```python
def  main():
        print("Start")
        greet("Risvan")
        print("End")

main()
```
```
Start
Hello  Risvan
Stop
```
###  Parameters  and  Arguments

**Parameters**  are  the  variables  defined  in  a  function's  definition,  while  **arguments**  are  the  values  passed  to  a  function  when  it  is  called.

Example

```python
def  greet(name):  #  name  is  a  parameter
        print("Hello,  "  +  name  +  "!")

greet("Risvan")    #  "Risvan"  is  an  argument
```

###  Return  Statement

A  return  statement  is  a  statement  that  specifies  the  value  returned  by  a  function.
Example
```python
def  add(a,  b):
        return  a  +  b

result  =  add(2,  3)
print(result)
```
```
5
```
##  Recursion
**Recursion**  is  a  programming  technique  where  a  function  calls  itself  repeatedly  until  it  reaches  a  base  case  that  stops  the  recursion.

Example
```python
def  factorial(n):
        if  n  ==  0:
                return  1
        else:
                return  n  *  factorial(n-1)
print(factorial(5))  
```
```
120
```
##  Introduction  to  Basic  Python  Libraries

###  Math  Library
The  math  library  provides  functions  for  mathematical  operations,  such  as  trigonometry,  exponential  functions,  and  logarithms.
Example
```python
import  math
print(math.pi)    
print(math.sin(math.pi/2))  
```
```
3.141592653589793
1.0
```
##  Random  Library
The  random  library  provides  functions  for  generating  random  numbers.
Example
```python
import  random
print(random.random())    #  Output:  a  random  float  between  0  and  1
print(random.randint(1,  10))    #  Output:  a  random  integer  between  1  and  10
```
```
0.482597142982672
10
```