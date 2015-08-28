---
layout: post
title:  Linux 磁盘查看命令 df/du
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

- 语法：

>
df [Option] ... [File]...

- 功能：

> 返回每一个磁盘的使用情况。

- 常用参数：

>
1. `du -a` // `-a` 表示显示全部设备，包括大小为零的设备
2. `du -h` // `-h` 显示易读的格式

完整的命令参数参考[Command:df](http://linux.about.com/od/commands/l/blcmdl1_df.htm)

## 2.Command: **du**

- 语法：

>
du [Option] ... [File]...

- 功能：

> 返回每一个文件或者文件夹的大小，他默认会遍历每一层目录。

- 常用参数：

>
1. `du -h --max-depth=1`  // ‘--max-depth = 1’ 表示只搜索当前1层目录，即不进行深层遍历;`-h` 与其他shell命令相似，也是以KB，MK或者GB的形式显示文件大小。
2. `du -s` // `-s` 表示只显示当前目录的大小总和。

完整的命令参数参考[Command:du](http://linux.about.com/library/cmd/blcmdl1_du.htm)
