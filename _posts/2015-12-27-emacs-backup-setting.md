---
layout:     post
title:      Emacs设置默认备份文件位置以及频率
date:       2015-12-27 08:00
categories: emacs
tags:
- emacs
---

Emacs会定时自动生成一些备份文件，这些文件的后面都会带一个小尾巴，就是这货'~'。他们默认会出现在你的当前工作目录，如果你有很多文件，会让你的工作目录变的乱七八糟。下面我们来处理一下这个问题。

### 方法1

1. 在emasc配置文件~/.emacs中添加如下代码：

```
(setq backup-directory-alist
    `((".*" . ,temporary-file-directory)))
(setq auto-save-file-name-transforms
    `((".*" ,temporary-file-directory t)))
```

这段代码将会把所有的备份文件统一放在/tmp文件夹中，比如这个文件的备份会以如下形式出现在/tmp文件夹中：

```
!home!wz!wangzhe3224.github.io!_posts!2015-12-27-emacs-backup-setting.md~
```

2. 为了保证备份不会一直保存下去，导致备份文件体积过大，继续加入如下代码：

```
(message "Deleting old backup files...")
    (let ((week (* 60 60 24 7))
         (current (float-time (current-time))))
  (dolist (file (directory-files temporary-file-directory t))
        (when (and (backup-file-name-p file)
            (> (- current (float-time (fifth (file-attributes file))))
               week))
        (message "%s" file)
        (delete-file file))))
```

这样，emacs会自动清理一星期之内没有使用过的备份文件。

### 方法2

当然，也可以永久关闭emacs的备份功能，但是并不推荐这样做。

```
(setq make-backup-file nil)
```

### 方法3

可以使用emacs自带的备份文件管理机制

```
(setq
    backup-by-copying t      ; don't clobber symlinks
    backup-directory-alist
	'(("." . "~/.saves"))    ; don't litter my fs tree
	delete-old-versions t
	kept-new-versions 6
	kept-old-versions 2
	version-control t)       ; use versioned backups
```

这些参数可以定制备份的目录，个数等等。也是不错的选择。
