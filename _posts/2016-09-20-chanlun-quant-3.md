---
layout: post
title: 量化缠论-2：包含关系
date: 2016-09-20 16:00
categories: 缠论
tags:
- 技术分析
- 算法交易
---

## 包含的定义

Ｋ线的包含关系:是指**相邻**的两个Bar之间的关系。
做如下假设：

A 是t-1时间点的Bar, B是t-0时间点的Bar，即Ｂ发生在Ａ之后。

A.high　是高点

A.low　是低点

A.open　是开始点

A.close　是结束点

B做类似定义。

包含关系定义如下：

若B.high < A.high　且　B.low > A.low,则A包含B，这种包含关系属于
**向上包含处理**，即后面的Ｂａｒ被前面的Ｂａｒ包含。

若B.high > A.high　且　B.low < A.low,则B包含A，这种包含关系属于
**向下包含处理**，及前面的Ｂａｒ被后面的Ｂａｒ包含。


## 包含的传递

如果ＡＢ存在包含关系，那么ＡＢ就可以合并成一个Bar。
作为一个新的Bar　Ｃ，应继续检查Ｃ相邻的ｋ线是否仍然具有包含关系，
如有，则应该继续进行包含，即包含的传递。

如果是向上包含，即Ａ包含Ｂ：

C.high = A.high

C.low = B.low

如果是向下包含，即Ｂ包含Ａ：

C.high = B.high

C.low = A.low

简化处理：

如果ＡＢ存在包含关系，则

C.high = max(A.high, B.high)

C.low = max(A.low, B.low)


包含和包含的传递必须按照时间顺序进行，先和包含前面的，在包含后面的。


## 包含的意义

如果两个Ｂａｒ存在包含关系，说明在这两段时间内趋势没有发生显著变化，
即认为**没有趋势**。

>
这样就消除了Ｋ线中的无趋势段，便于后续继续发现趋势。

合成的新Ｂａｒ代表了这两段时间内（无趋势的时间）的价格变化范围。