---
layout: post
title: Lvalue and rvalue
date: 2015-08-28 08:00
categories: c++
tags:
- lvalue
- reference
---

An **lvalue** is an expression that identifies a non-temporary object. An **rvalue** is an expression that identifies a temporary object or is a value (such as a literal constant) not associated with any object.

Tips  

>
**if an object has a name, it is an lvalue**

Look at following codes:  

{% highlight cpp %}
vector<string> arr(3);  // arr is *lvalue*
const int a = 100;      // a is *lvalue*, 100 is rvalue
double b;               // b is *lvalue*
std::string str = "rvalue."; // str is *lvalue*, "rvalue" is rvalue
double *p = &b;         // p is *lvalue*, 
{% endhighlight %}

Here we talk something about lvalue and rvalue reference. You can check [Reference in c++](/c++/2015/08/25/reference-and-pointer.html) to know somethin about *reference*.


