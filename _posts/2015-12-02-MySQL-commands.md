---
layout:     post
title:      MySQL common commands and errors
date:       2015-12-02 20:00
categories: database
tags:
- MySQL
---

## MySQL commands

- Start/stop/restart from the command line

```
sudo /etc/init.d/mysqld start
sudo /etc/init.d/mysqld stop
sudo /etc/init.d/mysqld resrart
```

- Where is my database file in harddisk?

```
~$ find / -name my.cnf
find: /home/lost+found: Permission denied
find: /lost+found: Permission denied
/etc/mysql/my.cnf
cat /etc/mysql/my.cnf
```

The output:  
>
user   = mysql  
pid-file = /var/run/mysqld/mysqld.pid  
socket  = /var/run/mysqld/mysqld.sock  
port   = 3306  
basedir  = /usr  
datadir  = /var/lib/mysql  
tmpdir  = /tmp  
language = /usr/share/mysql/english  
skip-external-locking  

- How to change default datadir?



## Common Error
>1.error processing package mysql-server-5.5 (--configure):  subprocess installed post-installation script returned error exit status 1

**Solution**

To purge all dependencies and re-install mysql:

```
sudo apt-get purge mysql-server mysql-client mysql-common mysql-server-5.5  
sudo apt-get install mysql-server
```
