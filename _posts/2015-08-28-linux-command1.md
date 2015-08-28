---
layout: post
title:  Linux 磁盘命令 df/du/ls
date:   2015-08-28 20:00
categories: Linux
tags:
- command
---

今天在下载电影的时候突然只能上传，不能下载了。 产看一番发现，自己的home目录居然已经满了！
于是开始查看磁盘各个目录的空间。 最后发现罪魁祸首竟然是自己的回收站满了。。。

Linux的回收站只收留在GUI操作下删除的文件以及文件夹， 他们存放在`～/.local/share/Trash/` 目录
下，把他删除后一切回复正常了....

期间用到如下几个命令查看磁盘的使用情况，记录顺便跟大家分享。
<hr>

## 1.Command: **df**


