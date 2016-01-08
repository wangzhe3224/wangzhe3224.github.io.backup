---
layout:     post
title:      Python可爱的字典
date:       2016-01-08
categories: python
tags: dictionary
---

刚开始写Python的时候总是有意无意的忽视字典的使用，总是用list或者tuple组织数据结构。后来渐渐发现字典（dictionary）真的是Python里面非常好用且神奇的东西。

### 感性认识字典

首先，先了解什么是字典。Python中的字典表示成`{key： value}`形式。比如：
`{'I': 1, 'am': 2, 'dict': 3}`这种形式。字典其实就是`key`和`value`的映射关系。
两个特征：**1. key 是不能改变的； 2. value可以是任何类的对象（可变或者不可变）**

- 一个简单的实例：

`{'a': [1,2,3], 'b': 'string', 'c': (1,2,3), 'd': 1}`

上面的例子中，`key`都是string类型（不可变的），但是`value`分别是：list, string, tuple 以及int对象。

- 可爱的例子

``` python
def func():
	print 'I am also a value of dict!'

dic = {'a': func}
# 神奇吗？
dic['a']() # <==== 还能调用呢～
```

上面这个例子中，字典的value是一个**函数对象**！ *这个地方就是Python方便之处，Python里面一切都是对象（object），连函数也不例外！* 这就导致了字典的key可以映射到一个函数对象上。这种应用字典的方法，在某些情况下特别的方便。比如，在写event-driven的程序时，可以将特定的event通过字典映射到相应的回调函数上，然后按照上面例子的方法调用，简直不能再方便了。

- 想放什么放什么的例子

``` python
class Love(object):
	def __init__(self):
		self.heart = 'I love you'

	def show(self):
		print self.heart

dic = {'a':Love()}

dic['a'].show()
```

我们可以让value是任何对象，包括一个自定义类的对象。总之，字典的精髓就是key和value的映射关系。

### 构造字典

一般来讲，我们很少直接用`{}`手动构造字典。手册里面给出了`dict`类的几个构造函数：

``` python
#1. class dict(**kwarg)
a = dict(one=1, two=2, three=3)
# output: {'one': 1, 'three': 3, 'two': 2}

#2. class dict(mapping, **kwarg)
b = dict({'one': 1, 'three': 3, 'two': 2})
# output: {'one': 1, 'three': 3, 'two': 2}

#3. class dict(iterable, **kwarg)
c = dict([('two', 2), ('one', 1), ('three', 3)])
# output: {'one': 1, 'three': 3, 'two': 2}

# 又是需要将两个list组合成字典可以这样操作：
d = dict(zip([1,2,3], [4,5,6]))
# output: {1:4, 2:5, 3:6}
```

### 字典常用方法

首先，字典有一般squence类的通用方法，如：

- Index： `d[key]`
- length: `len(d)`
- delete: `del d[key]`
- in: `key in d` # 返回d是否包含key

更重要的，还有一些特殊方法，如：

- `items()` : 返回一个list的（key，value）
- `keys()`: 返回一个list的key
- `get(key, [,default])`: 返回key对应的值，如果key不存在则返回default，如果default也不存在则返回一个错误。

上面这两个东西都是返回一个list的拷贝，比如字典有1百万的项目，那么就会返回包含1百万个项目的list。有的情况这样并不高效，所以字典还提供了一些方法返回iterator，采用惰性取值的方法对返回的list进行遍历，以节约内存。比如：

- `iteritems()`: 返回一个iterator来遍历(key, value)的list
- `iterkeys()`: 返回一个iterator来遍历key的list
- `itervalues()`: 返回一个iterator来遍历value的list

### 可爱的字典用法

上面，我们提了一些字典的基本方法，其实字典还可以结合许多其他的函数，做出更有意思的事情。

- 找最值

> 代码来自 python cookbook 1.8

``` python
# 假设我们有这样一个字典，代表了股票价格

prices = {
	'ACME': 45.23,
	'AAPL': 612.78,
	'IBM': 205.55,
	'HPQ': 37.20,
	'FB': 10.75
}

# 我们希望找到那支股票具有最高的价格：
max(prices) # 返回 'AAPL'

# 返回最高的价格
max(prices.values())
```

- 排序

```python
rows = [
 {'fname': 'Brian', 'lname': 'Jones', 'uid': 1003},
 {'fname': 'David', 'lname': 'Beazley', 'uid': 1002},
 {'fname': 'John', 'lname': 'Cleese', 'uid': 1001},
 {'fname': 'Big', 'lname': 'Jones', 'uid': 1004}
 ]
# 将上面的list按照fname排序

rows_by_fname = sorted(rows, key=lambda item: item['fname'])
# 其实这个例子里面的 key参数还是接受了一个函数对象。
# Python里面最特别的地方就是，连函数也是对象！
# 这个特性导致了很多所谓 Pythonic的代码风格
# 想想看装饰器？？？
```

### 总结

好了，应把握我对字典理解记录在这里，希望大家能够有收获，也期待更多的讨论！
