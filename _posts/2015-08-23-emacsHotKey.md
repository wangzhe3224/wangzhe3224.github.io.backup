---
layout: post
title:  Emacs Useful Hotkey
date:   2015-08-22
categories: emacs
tags:
- emacs
---
* auto-gen TOC:
{:toc}

~~~ c
// 测试中文代码
// English test
#include <iostream>

int main() {
    int i = 0;
    std::cout << i << std::endl;
}
~~~

## 1-File Command
--------
- `C-x C-f` : Opens a file, asks for the file name. If it cannot find the file, creates the file
- `C-x C-w` : Save as...
- `C-x C-s` : Saves the file without a prompt
- `C-x s  ` : Saves all files with a prompt
- `C-s C-w` : Saves the file with a different name. Asks you for the name.
- `C-x C-c` : Exit
- `M-x recover-file` : recovers the auto-saved file.

## 2-Copy/Cut/Paste Command
----
- `C-space` : Marking by moving the cursor
- `C-y`     : Paste
- `c-k`     : Delete line
- `C-w`     : Cut
- `M-w`     : Copy

## 3-Cursor Command
-----
- `C-a` : Begin of line
- `C-e` : End of line
- `M->` : End of buffer
- `M-<` : Begin of buffer

## 4-Redo/Undo Command
----
- `C-/` : Undo
- `C-g C-/` : Redo

## 5-Buffer Management Comment
----
- `C-x b`  : Switch buffer
- `C-x C-b`: Switch buffer with showing all the opening buffers
- `C-x 0`  : Close current window
- `C-x 1`  : Leave *only* one window
- `C-x 2`  : Horizontal split window
- `C-x 3`  : Vertical split window
- `C-x o`  : Switch form different windows.

## 6-Find and Replacement
--------

### 6.1 Search
- `C-s` : search forward
- `C-r` : search backward
- `C-s RET` : nonincremental search forward
- `C-r RET` : ditto
- `C-M-s` : regular expression search forward
- `C-M-r` : ... backward

> Using `M-n` or `M-p` to reuse previous key words.

### 6.2 Relpace
- `M-% string RET newstring RET`

If there is a marked region in the buffer, the command will only replace the string shows in the marked region.

>
`y` or `space`: replace current string   
`n` or `del`  : cancel the replace of the current string  
`^`           : back to the previous string        
`!`           : **replace every matched string**   
`ESC`         : quit replace command    

## 7-Other useful command
- `M-x indent-region` : Indents the region. **Very handy**

