---
layout: post
title:  Reference in C++
date:   2015-08-25 08:00
categories: c++
tags:
- c++
- reference
- pointer

---
* auto-gen TOC:
{:toc}

## 1.What is *reference*?

`Reference` is an alias (an alternate name) for an **existing** object. But `reference` is not a pointer to the object, it is actually the object itself.

- A **reference-to-someType** points to the same memory location which the refeeing object uses.

- Reference is not actually a **variable**.

- Reference is a [**lvalue**][2]

- Reference can not **rebound**.

- *A reference must be initialized when declaring it.*

- A reference can only does things that the refering object can do.

- A reference is inherently a **const**!

## 2. Define a reference

Declare and initialize of a reference:

`<type> & <name> = existingObj;`

where, `<type>` is a [type][1] and `<name>` is an identifier whose type is **reference-to-\<type\>**.

>![Declaration in C++](http://m.eet.com/media/1074314/0102ppfig1.gif) Declaration in C++. [ref](http://www.embedded.com/electronics-blogs/programming-pointers/4023290/References-and-const)
>
> > A declaration consist two parts: **specifiers** and **declarators**.
A declarator is the name being declared, possibly surrounded by operators such as *, &, [], and (). The * operator in a declarator means "pointer to," & means "reference to," and [] means "array of."

- e.g.

Declarator `*a[N]` means **array with N elements of type pointer-to**, rather than, **pointer to a array of N elements**. Because `[]` has higher precedence than `*`.[perecedence in c++][6] `(*a)[N]` means **pointer to a array of N elements**.

- e.g.

`char *f(int)` is a function returns a pointer-to char.

`char (*f)(int)` is pointer-to function which returns a char.

The operator `&` has the same precedence as `*`, thus

`char &f(int)` is a function returns a reference-to char.

`char (&f)(int)` is a reference-to function which returns a char.

**Reference-to const**

`int const &i = n` or `const int &i = n`(they are equivalent)

The specifier `const` modifies the `int` to a `const int`. The delaration declare that `i` is a **reference-to const int**. This expression has following structure:

>
 `&i` represent `i` is a **reference-to**   
 `const int` represents **a type**

After than declaration, `i` represents a const int object `n`. We can not chage i because it represents a **const int**.



**Examples:**

~~~cpp
int a = 5;
int &ra = a; 
~~~

Here, `ra` has the type of "reference-to `int`".

--------
~~~cpp
int& func();
~~~

`func()` is a function that returns a "reference-to `int`".

-------
~~~cpp
int& func(int&);
~~~

`func()` is a function with a reference parameter and return a reference.

- This also called **pass-by-reference** which frequently used in function.

---------

~~~cpp
class Myclass {int &_x;//};
~~~

`Myclass` is a class with a `reference-to int` type.

----------
~~~cpp
int func() {return 42;}
int (&xFunc)() = func;
~~~

`xFunc` is an `alias` for `func`.

---------
`const int &r = 65;`

`r` is a `const reference-to int` which points a memory storage of value 65.

- Only `const reference-to` can be assigned a literal.

--------

## 3. Why to Use reference

Reference works similarly to [pointers](http://www.cplusplus.com/doc/tutorial/pointers/) but easier to use.

The orinial reason of introducing reference is that reference types enable [overloaded][4] operators to look like built-in operators, as well as act like them.

~~~
    void f1(const complex* x, const complex* y) // without references
    {
        complex z = *x+*y;  // ugly
        // ...
    }
    void f2(const complex& x, const complex& y) // with references
    {
        complex z = x+y;    // better
        // ...
	}
~~~
[Ref][3]

## 4. When to Use reference

Pass reference to the function will not invoke copy, which means pass-by-reference is more efficient!

#### 4.1 As function parameters

{%highlight cpp%}
void swap(int &i, int &j)
{
    int tmp = i;
	i = j;
	j = tmp;
}

int main() {
    int i = 1, j = 2;
	swap(i,j); // now i = 2, j = 1
}
{%endhighlight%}

Here we use **passing-by reference** to change the value of the argument.

#### 4.2 As function return value

When a function returns a reference, the function call can appear on the left hand of the [assignment operator](https://en.wikipedia.org/wiki/Assignment_operator_(C%2B%2B)).

~~~cpp
class Array {
public:
  int size() const;
  float& operator[] (int index);
};
int main()
{
  Array a;
  for (int i = 0; i < a.size(); ++i)
    a[i] = 7;    // This line invokes Array::operator[](int)
}
~~~
[Ref][3]

With this ability, we have `method chaining`:

`MyObj.method1().method2()`

`MyObj.method1()` will return a reference to MyObj which makes the second method2() invoked.

#### 4.3 reference-to-functions

Normally, you can not pass a function to another function. But you can pass a `reference-to-function` to a function!

{%highlight cpp%}
#include <iostream>
void funcCaller (void (&func)(int), int x) {
    func(x);
}
void func(int x) {
    std::cout << "func(x) is called by funcCaller.\n";
    std::cout << "x = " << x;
   }
int main() {
   funcCaller(func,20);
   }

// Output:
// func(x) is called by funcCaller.
// x = 20
{%endhighlight%}

-------

## 5. Reference and const

You can declare either a `pointer-to const`([lowlevel const][5])   or `const pointer` (toplevel const).

You can **only** define `reference-to const`(which is similar to lowlevel const).



## 6. Advices in using reference

- call-by-value or call-by-ref?

>
+ If you want to change the object passed, call by reference or use a pointer; e.g., void f(X&); or void f(X*);.
+ If you don’t want to change the object passed and it is big, call by const reference; e.g., void f(const X&);.
+ Otherwise, call by value; e.g. void f(X);

- Always initialize the reference

- Avoid using references to variables whose memory are dynamically allocated as it might create unnecessary confusion regarding the clean-up of that memory.

- References cannot be null.

--------

##  7. References

1. [Reference (C++)](https://en.wikipedia.org/wiki/Reference_%28C%2B%2B%29)
2. [What is a reference variable in C++?](http://stackoverflow.com/questions/2765999/what-is-a-reference-variable-in-c)
3. [References][3]
4. [An Introduction to References](http://www.embedded.com/electronics-blogs/programming-pointers/4024641/An-Introduction-to-References)
5. [How to Use C++ Reference Variables](http://www.thegeekstuff.com/2013/05/cpp-reference-variable/)
6. [C++ References](http://www.cprogramming.com/tutorial/references.html)
7. [References and const](http://www.embedded.com/electronics-blogs/programming-pointers/4023290/References-and-const)

[1]:https://en.wikipedia.org/wiki/Data_type
[2]:https://en.wikipedia.org/wiki/L-value
[3]:https://isocpp.org/wiki/faq/references#overview-refs
[4]:http://en.cppreference.com/w/cpp/language/operators
[5]:http://www.cplusplus.com/forum/beginner/143366/
[6]:http://en.cppreference.com/w/cpp/language/operator_precedence
