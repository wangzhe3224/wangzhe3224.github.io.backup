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

- Inline Functions Avoid Function Call Overhead

### 4. Overload of a member function

>
C++ Primer:  
We can overload a member function based on whether it is const for the same reasons that we can overload a function based on whether a pointer parameter points to const.

`const MyClass &func() const`: means member function `func()` will not change the calling object, in other words `*this` is const.

A `const` after the function declararion means the function is not allowed to change any class members (**except for members marked `mutable`**)[Ref][1]

`MyClass &func()` is a overload version, which is a nonconst version.

### 5. Overload and friend
A class can make a function as a friend, so that the friend function can accsee even the private members of the class. We can do like this:  
```cpp
extern void func();
class A {
public:
    friend void func();// make a friend with `func()`
    ...
};
```  
What if we have another overload func()? How to make friend with them?  
Basiclly, we do this:  
```cpp
extern void func(int n);
extern void func();// func is overloaded
class A {
public:
    friend void func();// this only makes friend with the non parameter version..
    friend void func(int n); // this makes friend with the overload version.
};
```  

The conclusion is we have to specify which one of the overloaded functions we want to make a friend.

By the way, a friend declaration affects access but is not a declaration in an ordinary sense. Look at this: [C++ Primer 5th](http://www.amazon.com/Primer-5th-Edition-Stanley-Lippman/dp/0321714113)

```cpp
struct X {
    friend void f() { /* friend function can be defined in the classbody   */ }
    X() { f(); } // error: no declaration for f
    void g();
    void h();
};
void X::g() { return f(); } // error: f hasn't been declared
void f();                   // declares the function defined inside X
void X::h() { return f(); } // ok: declaration for f is now in scope
```

### Reference

1. [What is the meaning of a const at end of a member function?](http://stackoverflow.com/questions/4059932/what-is-the-meaning-of-a-const-at-end-of-a-member-function)


[1]:http://stackoverflow.com/questions/3141087/what-is-meant-with-const-at-end-of-function-declaration
