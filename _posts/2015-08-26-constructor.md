---
layout: post
title: Constructor in c++
date: 2015-08-26 10:00
categories: c++
tags:
- constructor
- c++
- class
---

* auto-gen TOC:
{:toc}

## 1. What is a **Constructor**

**Defination:**
>
Constructors are *special member function(s)* of the related class. The job of a constructor is to **initialize the data members** of a class object. A constructor is run whenever an object of a class type is **created**.


Constructors don't have return value.

## 2. How do construtor work

If we do not explicitly initialize a member in the constructor initializer list, that member is default initialized **before** the constructor body starts executing.
