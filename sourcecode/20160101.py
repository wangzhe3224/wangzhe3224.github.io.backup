#! -*- coding: utf-8 -*-
class Mystring(object):

    def __init__(self, string):
        self.s = string

    def __repr__(self,):
        return '%s' % self.s

    # this is normal metod
    def show_string(self):
        print self.s
    
    @staticmethod
    def show_info():
        print 'I am a string class.'

    @classmethod
    def fromlist(cls, alist):
        x = cls('')
	x.s = ','.join(str(s) for s in alist)

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
            raise ValueError("Low price should not be higher than high price")

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

p = Price(100.0,120.0)
print p.get_price()
p.set_price(110.0, 121.0)
print p.get_price()

# 这里就是property的方便之处了，甩掉了调用运算符（）
p2 = Price2(100.0, 120.0)
print p2.price
p2.price = (110, 140)
print p2.price
            
    
'''
A = Mystring('wz')
B = Mystring.fromlist([1,2,3,4])

print A.show_string
print A.show_info
print A.fromlist
'''

