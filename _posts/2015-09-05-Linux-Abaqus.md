---
layout: post
title:  Linux 系统安装 Abaqus 教程
date:   2015-09-05 15:00
categories: Abaqus
tags:
- linux
---

渐渐的喜欢上了Linux的简单和直接，所以渐渐的将自己的工作环境迁移到Linux环境下。遇到的主要麻烦主要有两个：Office系列软件和Abaqus软件。

微软的Office问题，Linux一直没有很好的解决，WPS虽然很良心，在d某种程度解决了Office的问题。但是打开别人的文件出现格式问题，几乎是不能避免的。我的解决方案是采用Office online，就是微软他们自己的Office365。大部分格式问题可以在上面得到解决。当然，更直接的方式是使用**Windows虚拟机**，所有兼容问题迎刃而解。

下面重点是来了，如何在Linux中安装abaqus。

先说明，其实在Linux下安装破解版的Abaqus比在Win下面省事很多，但是就是有一些小毛病需要修正过来。

----------

## 1. 下载Abaqus并挂载镜像文件

这里不提供地址，自行google ：`abaqus 6.13 torrent`即可。

一般来说下载回来的是ISO文件。需要挂载到Linux下才能读取相应内容，命令如下：

~~~
$ sudo mount -o loop /iso目/录/abaqus.iso  /挂载/目录
~~~

------------------

## 2. 安装依赖

我的环境是Debian+Xfce4，abaqus的主要依赖有：`csh`， `libstdc++5`。如果运行过程中还提示缺少库文件，请使用`sudo apt-get install xxx`进行安装，按照经验，安装上述两个库后就可以正常运行abaqus cae了。

--------------------

## 3. 安装软件

- 3.1 挂载abaqus的镜像之后，应该可以找到名为`_Solidxxxx_`的文件夹，将里面的全部内容解压缩到`/usr`目录下。 进入该目录，运行

`$ sudo mgrd -c abaqus.lic`

主要看一下文件名，每一个不同的下载包里面的名字可能会有些不同的，自己注意用的对的文件名，区分大小写。

运行这个命令后，abaqus的本地验证服务器就启动了。这个步骤其实跟windows里安装abaqus类似的。

- 3.2 在挂载目录里面找到 `xxx/lnx64（或者类似的目录）/`,这个目录有一个`setup`程序，然后 `sudo ./setup`。 接下来会提示输入临时目录的地址，一般输入`/tmp` 即可。 然后就启动了安装界面，后面的操作跟windows安装一模一样。

安装过程中会提示输入端口和主机名称，这是输入：

`27011@主机名`

- 3.3 设置系统别名，方便运行。 在~/.bashrc中添加如下指令：

`alias abaqus='sudo /usr/simulia/license/lmgrd -c ABAQUS.lic; XLIB_SKIP_ARGB_VISUALS=1 ~/ABAqus/Commands/abq6141 cae'`

以后每次启动abaqus cae只需要在命令行输入：`abaqus`即可。

如果，不需要abaqus cae界面，可以直接用：

`alias abaqus='sudo /usr/simulia/license/lmgrd -c ABAQUS.lic; XLIB_SKIP_ARGB_VISUALS=1 ~/ABAqus/Commands/abq6141`

这样会进入abaqus的命令行模式，直接输入inp文件就可以计算了！

----

## 几个注意事项：

- 需要注意一下命令中的 ： XLIB_SKIP_ARGB_VISUALS=1  这句话一定要加上，不然会出现CAE窗口透明的奇怪现象。

- 有些同学打开CAE后会发现软件里面总是有两个黑框框去不掉。如果发生了这个现象，执行如下操作：

以此选择`Tools - Customise` 在 Toolbar 选项卡内勾选所有的项目。黑框框就消失了，其实那两个黑框框就是隐藏没有显示出来的Viewport和View两个Toolbar工具。。。。


