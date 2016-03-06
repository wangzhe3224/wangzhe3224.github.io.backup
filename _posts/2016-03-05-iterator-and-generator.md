---
layout: post
title: 迭代器和生成器(Iterator and Generator)
date: 2016-03-04 16:00
categories: python
tags:
- iterator
- generator
- backtest
---

迭代器(iterator)和生成器(generator)是Python的两个重要概念，如果接触Python不久，你可能意识不到他们的存在，但是你却无时无刻不在使用他们；如果接触Python一段时间了，有意识的设计和使用迭代器和生成器可以大大的提高程序运行效率，特别是面对大量数据读入内存的情况。

我们先说迭代器，因为后面我们会看到生成器其实是一种特殊的迭代器。

## 1.迭代器

迭代器是一个*对象*，这个对象可以对一个*容器*(container)进行遍历。关于迭代器有三个很容易混淆的概念：

- Iterable
- Iterator
- Iteration

Iterable也是一个对象，这个对象必须包含`__iter__`或`__getitem__`方法，前者通常会返回一个*iterator*，也就是迭代器；而后者能够使该对象实现*index操作*，即*[]*操作(比如list的index操作，a[0]就会返回a中的第一个元素)。

Itertor我们开始已经说过了，它必须包含一个`next`(Python2)或者`__next__`(python3)方法。这个方法的功能就是访问容器中的下一个元素。

Iteration不是对象，他是一个**动作**，就是遍历的动作。当我们使用for循环遍历list时就进行了Iteration操作。当然，for只能遍历迭代器对象。

`list`就是最典型的迭代器了。下面我们来自己做一个迭代器感受一下：

``` python
class Portfolio(object):
    
    def __init__(self, assets):
        self._assets = assets
        self._index = 0

    def __iter__(self):
        return self

    def next(self):  # def __next__ if using Python3
        try:
            result = self._assets[self._index]

        except IndexError:
            self._index = 0
            # dont forget this.....
            raise StopIteration

        self._index += 1
        return result

if __name__ == '__main__':

    p = Portfolio(['A','B','C'])

    for asset in p:
        print asset

    for asset in p:
        print asset
```

上面的例子里面，`Portfolio`类就是一个迭代器了，我们可以对portfolio对象进行遍历，就像程序里面做的。

## ２.生成器

了解迭代器之后，对理解生成器是非常有帮助的，因为生成器其实就是一类特殊的迭代器！通常生成器以函数的形式出现（还记得么？python里面一切都是对象！包括函数（函数对象））所以虽然以函数的形式出现，生成器仍然是**对象**。

先来一个最简单的生成器的例子：

```python
def simple_generator(n=10):

    for i in xrange(10):
        yield i
		# 其实生成器与普通函数的最大区别就是把 return 换成了 yield

for item in simple_generator():
    print item
```

上面的程序还是对0-9的整数进行了遍历，可是这与普通的遍历有什么不同呢？不同点在于：**生成器的遍历是惰性的**。只有调用`next()`方法的时候，它才做一次计算并只返回这次的值，但是生成器虽然惰性，但是他会记住**当前的调用位置**，下一次调用的时候他会从上次一返回的地方继续计算。这样做可以提高效率，函数不必一次性完成所有的计算，而只是在需要的时候进行一次计算。

上面这个生成器的例子并没有什么实际的作用，下面举一个实际的例子。

在量化策略的backtest系统中，DataFeeder是一个很重要的组成部分，他的作用是持续不断的‘挤出’下一个历史数据（对于正在测试的策略来说，是当天的新数据）。在这样的应用情境下，生成器就显得很有意义了。下面我们给出一个DataFeeder的简单框架。

```python
class DataFeeder(object):

    def __init__(self, ticker, startdate, enddate):
        """ 
        :params ticker: str, the ticker of assets
        :params startdate: str, the start date of data, '20000101'
        :params enddate: str, the end date of data, '20120101'
        """
        self.ticker = ticker
        self.startdate = startdate
        self.enddate = enddate

        self._get_data_from_db()

    def _get_data_from_db(self):
        """ get historic data from local database """
        self._data = get_historic_data(self.ticker, self.startdate, self.enddate)
        # this method returns an array of historic data of ticker

    def pop_next_data(self):

        for item in self._data:
            result = item * 100 / 100.0
			# 这里仅仅是一个例子，比如我们要对数据进行比较复杂的二次处理。
            yield result
```


