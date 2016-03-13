---
layout:     post
title:      Python里面“著名”的装饰器-class的装饰器(1)
date:       2016-01-01
categories: python
tags: 装饰器
---

之前，我在[这里][1]记录了一些关于装饰器的基本原理和使用方法。这篇文章主要详细介绍一些Python里面非常有名气的装饰器。其实很多时候，我们没有写装饰器，但是却大量使用了Python里面常见的装饰器，比如`@staticmethod`、`@classmethod`等等.当然还有一些著名的库也有不少装饰器的经典例子，比如Flask里面那个经典的`@app.route('/pa/th/')`就是一个典型的带参数的装饰器。

### class 定义中的装饰器：

- **@staticmethod**
- **@classmethod**
- **@property**

上面这三个装饰器可谓是Python中class定义中最具特色的了。我们举例来说明：

**@staticmethod**和**@classmethod**

``` python
# For python2
class Mystring(object):

    def __init__(self, string):
        self.s = string

    def __repr__(self,):
	    return '%s' % self.s

    @staticmethod
    def show_info():
        print 'I am a string class.'

    @classmethod
    def fromlist(cls, alist):
	    x = cls('')
		x.s = ','.join(str(s) for s in alist)

A = Mystring()
B = Mystring.fromlist([1,2,3,4])

print A.show_string
print A.show_info
print A.fromlist
```

`@staticmethod`会将类中的方法变成静态方法，这些静态方法不会传入`self`参数，这也意味着，他不能访问类中的属性或者方法（比如`show_info`函数是不能访问`self.s`）。我们可以通过class或者instance调用静态方法，如`Mystring.show_info() or A.show_info()`。其实，这些方法完全可以定义在class的外部。但是静态方法的优势就在于**可以把与Mystring类相关的一切方法都隐藏在该类里面，这样也减少了冲突的可能**，也就是说，如果想调用类中的静态函数，需要采用如下形式：`class.staticmethod()`。怎么样，是不是有点namespace的意思！？


`@classmethod`会将方法变成类方法，这些类方法会传入`cls`参数，而不是`self`参数。`cls`就是*the class of the instance*。这个函数只能由class调用，而不能由实体(instance)调用，因为这个函数并没有传入`self`参数。例如上面代码中的`from_list`函数，他们通过传入的`cls`在函数体内实例化一个Mystring类，通过这个实体间接访问实体属性。这个例子，其实也给出了类方法的一个重要的应用：**实现了另一个构造函数**。Python里面并没有重载构造函数的机制，每个类只有一个`__init__`函数，类方法就成了实现额外构造函数的方法之一（其他方法还可以通过判断`__init__`函数的参数来实现）。

上述程序的输出如下：

```
<bound method Mystring.show_string of wz>
<function show_info at 0x7f442aecb848>
<bound method type.fromlist of <class '__main__.Mystring'>>
```

显然，`show_string`绑定的实体方法, `show_info`是静态方法（与普通的函数没没有差别！），而`fromlist`是绑定的类方法（type.fromlist）,他属于class Mystring。

**@property**

`@property`在Python面向对象设计中就显得更加的重要和方便了。这个东西设计出来是为了更好的封装数据，以便通过统一的接口访问私有变量。（然而，Python里面其实并没有私有变量，一切靠自觉）

先给出一个不用Property的例子：

``` python
class Price(object):
    """Stock price class

    only contains low and high prices.
    """

    def __init__(self, lowprice=0, highprice=0):
        if not Price.isvalid(lowprice, highprice):
            raise ValueError("Low price should not be higher than high price")
        self._low = lowprice
        self._high = highprice
        
    @staticmethod
    def isvalid(lowprice, highprice):
        
        return True if lowprice <= highprice else False

    # 定义访问接口
    def get_price(self):
        return self._low, self._high

    def set_price(self, lowprice, highprice):
        if Price.isvalid(lowprice, highprice):
            self._low = lowprice
            self._high = highprice
        else:
            raise ValueError("Low price should not be higher than high price"
```
对于这个，我们的使用方法是：

```
p = Price(100.0,120.0)
print p.get_price()
p.set_price(110.0, 121.0)
print p.get_price()
```

再来看一下神奇的property：

``` python
class Price2(object):
    """Stock price class

    only contains low and high prices.
    """

    def __init__(self, lowprice=0, highprice=0):
        if not Price2.isvalid(lowprice, highprice):
            raise ValueError("Low price should not be higher than high price")
        self._low = lowprice
        self._high = highprice
        
    @staticmethod
    def isvalid(lowprice, highprice):
        
        return True if lowprice <= highprice else False

    # 定义访问接口
    @property
    def price(self):
        return self._low, self._high

    @price.setter
    def price(self, twoprices):
        """
        似乎Python的setter只能接受一个参数（除了self外）
        所以这里传入了数组
        """
        if Price.isvalid(twoprices[0], twoprices[1]):
            self._low = twoprices[0]
            self._high = twoprices[1]
        else:
            raise ValueError("Low price should not be higher than high price")
```

对应的使用方法就变成了：

```
# 这里就是property的方便之处了，甩掉了调用运算符（）
p2 = Price2(100.0, 120.0)
print p2.price
p2.price = (110, 140)
print p2.price
```

需要注意的是，`setter`只能接受一个参数，所以如果是多变量的赋值，需要传入tuple。

[1]:http://wangzhe3224.github.io/python/2015/12/30/%E5%85%B3%E4%BA%8EPython%E7%9A%84%E8%A3%85%E9%A5%B0%E5%99%A8.html
