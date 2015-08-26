---
layout:post
title:Python批量修改Abaqus inp文件
date: 2015-08-26 16:00
categories:python
tags:[python, abaqus]
---

Python语言是Abaqus的二次开发语言，Abaqus-GUI 中进行的每一个操作，最终都会翻译成对应的Python语句提交给Python解释器。如下图所示，Abaqus/CAE主要由三部分组成：命令输入层，Python解释器，CAE核心。最终CAE核心会将命令翻译成inp文件，最终提交给abaqus的计算模块。

  
然而，Abaqus的整套CAE系统并不是与生俱来的，早期abaqus软件只拥有求解器，一切模型都是通过inp文件传递给求解器的。这也是为何Abaqus拥有了Python这样强大的通用语言却还不能脱离inp文件。inp文件具有大量Abaqus求解器能够识别的关键词，但是inp文件不具有任何计算机语言功能，如，变量、循环结构、判断结构等，换句话说，inp文件完全不具备可编程性。

问题在于：Abaqus/CAE并不能支持全部inp中的关键字用法。举几个例子：

1、ITT单元（管中管单元）、PSI单元（管土作用单元）：在CAE中完全不能输入，只能手动添加进CAE生成的inp文件；

2、*Spring, elset=NAME, NONLINEAR, 在CAE中仅支持线性弹簧，不支持NONLINEAR 非线性特征，只能手动修改inp，添加相关关键字并且添加相应非线性数据。

既然inp不具备编程能力，我们不妨利用Python语言强大的文本操作能力实现inp文件编程。实现思路如下：

	1、先利用abaqus/cae生成基本的inp文件；

	2、通过Python读取inp文件；

	3、利用Python修改inp文件。

	第一步很简单，假设我们已经得到基本的inp文件：job.inp；

	第二步：通过如下语句读取iob.inp内容：
~~~
		fid = open('job.inp' )
		lines = fid.readlines() 
		fid.close()
		##inp中的信息全部读取进列表：lines中
		## 下面寻找inp文件中的关键词，决定修改哪里，在哪里添加
		## 比如想要将 *Spring, elset=axial-spring-spring 替换为*Spring, elset=axial-spring-spring, NONLINEAR
		axial_spring = '*Spring, elset=axial-spring-spring\n' 
		axial = '*Spring, elset=axial-spring-spring, NONLINEAR\n'
		lines[lines.index(axial_spring)] = axial
		## 比如想要在 *Spring, elset=axial-spring-spring 后添加数据控制行
		lines[axial_index + 1] = ' 1\n'
		lines[axial_index + 2] = ' -1260.0, -0.01\n' 
		lines.insert(axial_index + 3, ' 0.0, 0.0\n') 
		lines.insert(axial_index + 4, ' 1260.0, 0.01\n'
~~~

	第三步：通过如下语句修改Job.inp内容：

~~~
		## write new inp file
		fid = open('opt_%d.inp' %nn, 'w')
		 for a in lines: 
			 fid.write(a)
		 fid.close()
~~~

	上面的程序主体思路就是：把inp读入一个列表变量，然后修改列表，最终将列表写入新的inp。
	
	因为List（列表）是Python最基本的变量类型，操作非常方便。上述程序主要用到的操作：insert方法，index方法。
