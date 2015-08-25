---
layout: post
title: Function Overload
date: 2015-08-25 20:00
categories: c++
tags:
- c++
- function
- overload
- pointer
- reference
---

* auto-gen TOC:
{:toc}

### 1. What is function overload

>
Functions that have the **same name** but **different parameter lists** and that appear **in the same scope** are overloaded.

Here we can see, Thress key points:

- Same name
- Different parameter list
- In the same group

**Can not define function overload if the these function only differ in the return type.**

**In C++, name lookup happens before type checking.**

~~~cpp
Record lookup(const Account&);
bool lookup(const Account&);   // error: only the return type is different
~~~
-----

### 2. Overloading and const
- function ignores `top level const`:

~~~cpp
Record lookup(Phone);  
Record lookup(const Phone);   // redeclares Record lookup(Phone)  
Record lookup(Phone*);  
Record lookup(Phone* const);  // redeclares Record lookup(Phone*)  
~~~

- But `low level const` makes difference :

~~~cpp
Record lookup(Account&);       // function that takes a reference to Account  
Record lookup(const Account&); // new function that takes a const reference
~~~

### 3. Avoidint ambiguous overload

- Compiler will try to do conversion if it can not find a best match.

- inline Functions Avoid Function Call Overhead

