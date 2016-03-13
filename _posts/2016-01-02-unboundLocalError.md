---
layout:     post
title:      Python的UnboundLocalValue
date:       2016-01-02
categories: python
tags: UnboundLocalError
---

些程序的时候遇到了一个乍一看有些意外的错误：**UnboundLocalValue**。精简了一些代码，大家请看出错的程序:

``` python
x = 10
def foo():
	x += 1 # <==== 这里出的问题！
	print x
```
提示的出错信息如下：

```
UnboundLocalError: local variable 'x' referenced before assignment
```

第四行代码`x += 1`出了问题。这行代码其实是一个赋值语句（assignment statement）,在Python中如果在一个scope中进行赋值，那么这个变量将会属于这个scope，而不是我们期望的global scope。

`x += 1`这句等价于`x = x + 1`，这行语句最终导致`x`成为了foo函数的局部变量。解决办法如下：


``` python
x = 10
def foo():
    global x # <==== 这样函数就不会把x绑架成自己的局部变量了！
	x += 1 # <==== 这里出的问题！
	print x
```

其实，想明白这个问题的关键在于：*Python 在编译成字节码的时候，只会根据语法进行，而不是执行程序*。这种错误也只能在运行期间才能被发现。我们看一下下面代码：

``` Python
x = 10
def foo():
	print x     # <===== 1
	print x + 1 # <===== 2
	x = x + 1   # <===== 3
```

你认为出错的位置在哪里？是3么？
其实并不是，出错的点其实在1。因为编译期间，语句3的存在已经导致了x变成局部变量，而且，**是没有初始化的局部变量**

**经验教训**

- 定义函数时，如果需要使用全局变量，要提前声明。
