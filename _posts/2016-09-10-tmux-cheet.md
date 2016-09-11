---
layout: post
title: tmux 使用方法
date: 2016-09-10 23:00
categories: Linux
tags:
- tmux
---

## 引言

`tmux` 是一款开源Linux程序，通过它可以让Shell环境变成多任务、多窗口环境。
它使得通过SHH来访问的Linux服务器具有更加灵活的操作环境。最重要的是，通过
tmux当本地SHH中断后，运行在tmux下的程序将继续运行在远程服务器上，可以随时
通过SHH连接继续之前的工作。

## 安装

在Ubuntu或者Debian环境下安装`tmux`非常简单：

`sudo apt-get install tmux`


## 相关概念

首先说明`tmux`下面的三个重要概念：

- Session
- Window
- Pane

Session是最大容器，每个Session可以包含若干Window，每一个Window可以包含
若干Pane。Pane其实就是对一个Shell窗口的切分（Split）。Tmux之所以可以在
SHH连接中断时继续保持之前的进程，就是因为Session并没有中断，而是继续运
行。

我自己的经验：

如果你是在远程服务器上做开发，那么每一个项目可以单独开一个Session，编
码可以开一个Window，debug可以开一个Window，每个Window可以分成不同的部
分开始工作。

如果你在远程服务器上部署APP，比如部署交易算法。那么同一类的算法程序可
以开一个Session，然后不同的用户开一个Window。

## 常用命令

tmux支持快捷键操作和命令操作。所有的快捷键都是以`Ctrl-b`作为信号案按键

`Ctrl-b` + `：`将会进入命令输入模式。这跟emacs中`Alt+x`作用一样的。

### Session

命令行：

- 开新Session：`tmux new -s sessionName`
- 连接Session：`tmux a sessionName`
- 列出Session：`tmux list`
- 终止Session：`tmux kill-session -t sessionName`

快捷键：

`Ctrl+b` +

`s`：列出Session
`$`：重命名Session
`d`：暂时断开与Session的连接，Session并没有被杀死 
`:new`：开新的Session

### Window

快捷键：

`c`  建立新Window
`w`  列出Window
`n`  下一个窗口
`p`  前一个窗口
`f`  查找窗口
`,`  重命名窗口
`&`  关闭（杀死）窗口

### Pane

`%`  竖向切分
`"`  水平切分
`x`  关闭切分
`o`  切换切分
`q`  显示切分编号，如果在显示编号的时候按相应的数字，将会切换。
` `  自动调节切分的大小
`{`  向左移动当前窗口
`}`  向右移动当前窗口
`z`  收起当前窗口以外的切分

<完>
