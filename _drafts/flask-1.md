---
layout: post
title: Flask简单入门-1
date: 2016-02-14 16:00
categories: web
tags:[python, flask]
---

今天是情人节哈，情人不在，只能自己过啦！最近项目正好需要做一个简单的Web接口方便用户使用，
就简单学习了一下Flask这个Web框架，看了一些网上的教程和书籍，这里根据自己的学习过程中的一些问题给大家做一个入门小教程，希望大家能**少走弯路**，快速入门这个框架。

## Flask简介

[Flask][1]是Python世界里面比较轻量级的Web框架。我觉得想要学习一个框架，最重要的是理解
他的设计理念。Flask最基本的设计理念就是**映射路径到相应的处理函数**，然后需要了解如何构造
自己的**处理函数**，最后还需要一点**模板**解析的知识，这样就可以做出一个Web应用的雏形了。

关于Flask的安装，如果你已经安装了`pip`，那么只需要`pip install flask`就ok了。

## 最简单的Web应用

我们从最简单的应用开始, 这是官方网站的例子：

``` python
from flask import Flask
app = Flask(__name__)

@app.route("/")  # flask采用函数装饰器来映射路径与处理函数
def hello():  # hello就是对应路径`/`，也就是根目录的处理函数
    return "Hello World!"  # 处理函数*必须*要有一个返回值

if __name__ == "__main__":
    app.run()  # 启动应用
```

保存上述代码到`hello.py`，然后在命令行中运行：

```
$ python hellow.py
 * Running on http://127.0.0.1:5000/
```

现在可以通过浏览器访问上述网址，应该可以看到`Hello World!`的显示，说明应用已经正常启动了。
这里需要注意，*如果需要停止应用*, 应该按`Ctrl + C`， 而不是直接关闭窗口。如果直接关闭，
可能会造成该端口持续被占用，导致一段时间内不能使用这个端口继续我们的测试。




[1]:http://flask.pocoo.org/