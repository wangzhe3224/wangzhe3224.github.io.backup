---
layout: post
title: Emacs使用fcitx输入中文方法
date: 2015-08-31 23:00
categories: emacs
tags:
- fcitx
---

Emacs采用Fcitx输入中文一直都存在问题，特别是在纯英文的系统中。有些情况时完全不能输入中文，有些情况是在emacs的GUI环境不能输入。顺带提一句，就是iBus框架并没有这个问题，可是iBus的中文输入感觉没有Fcitx好用，而且，Ubuntu 15版本已经开始放弃iBus采用Fcitx了。

## 1.确定系统当前支持的字符集

（emacs不能输入中文，首先是系统字符集选取的问题）。在终端输入：

`$ locale -a`  

如果得到如下输出：

`zh_CN.utf8`

说明系统已经包含了中文字符集，可以直接跳到步骤3. 若不包含该项目，进步骤2.

## 2.安装zh_CN.utf8字符集。

`$ sudo dpkg-reconfigure locales`

然后选择上述中文字符集，并安装。（记得sudo，否则会提示找不到该命令）

## 3.设置系统变量LC_CTYPE="zh_CN.UFT-8"

Linux里面启动Emacs GUI有两种类型：菜单启动和终端启动。

- 对于终端启动：

在~/.bashrc中输入export LC_CTYPE=zh_CN.UTF-8保存，然后每次从终端启动emacs。

- 对于菜单启动：

复杂一点。菜单里的emacs启动参数为emacs24 %F。而emacs24在/usr/bin目录下，链接到/usr/bin/emacs24-x文件。

因此我们删除/usr/bin/emacs24文件，并新建/usr/bin/emacs24，增加内容如下：

```
LC_CTYPE=zh_CN.UTF-8 /usr/bin/emacs-x $@
```

(完)
