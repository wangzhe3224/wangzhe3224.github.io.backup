---
layout: post
title: 解析右值和右值引用
date: 2015-08-28 08:00
categories: c++
tags:
- lvalue
- reference
---

* auto-gen TOC:
{:toc}

## 1. 什么是右值（rvalue）
在谈什么是右值前，需要说明一些C++表达式的基本概念。

所有的C++表达式（expression， an operator with its arguments, a literal or a varible name）都通过两个独立的部分来表达：**类型（Type）**和**值分类（Value category）**。[[1]][1]

- 值分类的标准有二：  
  * 是否有标识（Identity）
  * 是否可以被移动（Moved from）

按照上述两个标准可得到C++中的几个值分类：

- **左值**（lvalue expression）： 有标识，不能被移动
- **纯右值**（prvalue）： 没有标识，可以被移动
- **右值**（rvalue）： 有或者没有标识，可以被移动
- **终值**（expiring value）： 有标识，可以被移动

这个分类似乎有些复杂，这里我们仅仅讨论*左值*和*右值*的几个特征，用来区分他们。

- 左值：
  * 可以进行取地址（&）操作，如 `&++i`
  * 可变左值可以作为build-in 赋值运算符的左侧
  * 可以初始化*左值引用*

- 右值：
  * 不能取地址;
  * 不能作为赋值符的左侧;
  * 可以初始化**const lvalue reference**
  * 可以初始化 右值引用
  * 可以用来触发重载，如一个函数的形式参数为右值引用。

下面举例说明：

{% highlight cpp %}
int a;
a = 1; // a 是左值， 1 是右值

int& getRef( )
{
	return a;
}

getRef( ) = 4; // getRef( ) 是左值, 因为他返回了一个指向**固定空间**的对象的引用

int getRef2( )
{
	return a;
}

getRef2(); // getRef2()是 右值，因为他返回了一个临时对象（temporary）
{% endhighlight %}

**简单的说， 右值通常指的是临时对象(temporary),左值通常指的有固定空间的对象**

继续谈谈对右值引用的理解。这里 [Reference in c++](/c++/2015/08/25/reference-and-pointer.html) 有一些关于引用 （*reference*） 的内容供大家参考。



---------

## 2. 为什么出现右值引用

先归纳一下c++中常见的引用类型

| 类型/接受的类型 | 非const左值 | const左值 | 非const右值 | const右值 |
|:-------------:|:----------:|:--------:|:----------:| :--------:|
| 非const左值引用|   可以      | 不能      | 不能        | 不能      |
| const左值引用 | 可以 | 可以 | 可以 | 可以 |
| 非const右值引用 | 不能 | 不能 | 可以 | 不能 |
| const右值引用 | 可以 | 不能 | 不能 | 不能 |
  
<p></p>
出现右值引用，最直接的原因是：*减少拷贝临时对象的过程，提高效率*。生成临时对象意味着**拷贝**，这是一个相对浪费资源的动作。当然一般情况，我们更多使用非const右值引用。

右值引用有一个奇怪的特性，就是他既可以被当做左值，也可被当做右值！
>
如果右值引用有名字则为左值，如果右值引用没有名字则为右值。

这是不是跟右值的特性很像？？你可以这样理解：想一下引用的概念，引用其实不是一种类型，他只是对象的*别名*，所以其实他的很多特性取决与他指向的对象的特性。 想到这里，就不难理解右值引用的奇怪特性了。

在上述目的的驱使下,引入右值引用,主要完成以下两件事情:  
1. 实现移动(Move);  
2. 实现完美转发(Perfect forwarding)

---------

## 3. 实现Move

使用Move语义，主要是通过类的`移动构造函数（move constructor）`和 `std::move()`函数协作完成的。

### 3.1 移动构造函数的实现和问题

#### 3.1.1 实现

与*Move行为*相对应的是*Copy行为*， 这与C++11中的移动构造函数（Move Constructor）以及拷贝构造函数（Copy constructor）相对应。

考虑这样一个类, 这是一个动态数组类，包含一个指针和一个数组尺寸：  
{% highlight cpp  %}
class Container
{
	public:
		Container( int n ) : _intp( new int[ n ] ), _size( n )
		{    }
		// copy constructor
		Container(const Container &cp) : _intp( new int[ cp._size ] ), _size( cp._size )
		{
			for ( int i = 0; i < _size; ++i )
			{
				_intp[ i ] = cp._intp[ i ];
			}
		}
		~Container( ) { delete [ ] _intp; }
	private:
		int  *_intp;
		int  _size;
};
{% endhighlight %}

上面的代码中用到的拷贝构造函数，需要重新分配内存空间，并把`cp`中的指向的内存数据，一个一个的拷贝到新的对象中。可以想想，一旦数据量比较大，这样的拷贝非常浪费时间。

仔细想想就会发现，其实`cp`中的数据已经在内存中了，我们不需要在拷贝一份放在新的对象里，最好的办法是，让新的对象直接指向这片内存空间，效率就会大大提高。

所以，再有了Move行为后，我们可以这样做：

{% highlight cpp %}
class Container
{
	public:
		Container( int n ) : _intp( new int[ n ] ), _size( n )
		{    }
		// copy constructor
		Container(const Container &cp) : _intp( new int[ cp._size ] ), _size( cp._size )
		{
			for ( int i = 0; i < _size; ++i )
			{
				_intp[ i ] = cp._intp[ i ];
			}
		}
		// Move constructor
		Container( Container &&mp ) : _intp( mp._intp ), _size( mp._size )
		{
			mp._intp = NULL;
			mp._size = 0;
		}
		// 就是这么简单.......		

		~Container( ) { delete [ ] _intp; }
	private:
		int  *_intp;
		int  _size;
};
{% endhighlight %}

上述程序中，我们增加了Move constructor来完成所谓的移动操作。首先，我们让新对象的指针指向移动对象（临时的内存空间）的指向的内存空间：`_intp( mp._intp )`。然后，**我们必须清空移动对象的指针**，因为如果不这样做，移动对象在消亡时会调用析构函数来释放数据，这样我们的新对象拥有的数据就又被清除了，等于什么都没有发生！这段程序还应该注意的是，移动构造函数的参数并不是`const rvalue reference`, 因为我们需要修改这个参数。这一点与拷贝构造函数也是不一样的。

就像前面提到的，**右值可以出发函数重载**。正是因此，编译器才知道到底该调用拷贝构造函数，还是移动构造函数。

#### 3.1.2 问题

目前看起来有了移动构造函数，似乎已经很好的解决了避免拷贝的问题， 公主和王子幸福的生活在一起了～

**可是**

事情才刚刚开始....

我们稍微改动一下刚才的`Container`类， 让他的私有成员包含另一个类：

{% highlight cpp %}
class Container
{
public:
    Container( int n )
		: _intp( new int[ n ] ), _name( "nothing", n )
    {
		std::cout << "Container的 构造函数 被调用！\n";
    }
    // copy constructor
    Container(const Container &cp)
		: _intp( new int[ cp._name.getSize() ] ), _name( cp._name )
    {
		for ( int i = 0; i < _name.getSize(); ++i )
		{
			_intp[ i ] = cp._intp[ i ];
		}

	    std::cout << "Container的 拷贝构造函数 被调用。\n";
	}
    // Move constructor
    Container( Container &&mp )
		: _intp( mp._intp ), _name( mp._name )
    {
		mp._intp = NULL;
		std::cout << "container的 移动构造函数 被调用。\n";
    }
    // move assignment
	Container & operator=(const Container &&mp) {
		std::cout << "Moving assignment!\n";
    }
    // 接口
    Name & getName() { return _name; }
    
    ~Container( ) { delete [ ] _intp; }
private:
    int  *_intp;
    Name _name; /////////////// 加一个Name类
};
{% endhighlight %}

我们来设计一个Name类：

{% highlight cpp %}
class Name
{
public:
    Name( ) : _id( "nothing!" ), _size( 0 ) {
		std::cout << "Name的 构造函数 被调用！\n";
    }
    Name( const std::string &n, int s )
		: _id( n ), _size( s ) { }
    // copy constructor
    Name( const Name &cp ) : _id( cp._id ), _size( cp._size ) {
		std::cout << "Name的 拷贝构造函数 被调用！\n" ;
    }
    // move constructor
    Name( Name &&mp )
		: _id( mp._id ), _size( mp._size )
	{
		std::cout << "Name的 移动构造函数 被调用！\n" ;
    }
    // 一些公共接口，让Container类可以访问Name的私有成员
    std::string getId() const { return _id; }
    int getSize() const { return _size; }
private:
    std::string  _id;
    int  _size;
};
{% endhighlight %}

好，我来看看如何使用我们的新`Container`类：

{% highlight cpp %}
int main()
{
	std::vector<Container> v;
	v.push_back( Container( 1 ) );

	return 0;
}
{% endhighlight %}

请问大家，这段程序中会不会调用Name类的移动构造函数？

按照常理， `v.push_back( Container( 1 ) );` 这句会调用Container类的移动构造函数，然后， 也会调用Name的移动构造函数。

**可是，** 程序的输出如下：

~~~
Container的 构造函数 被调用！
Name的 拷贝构造函数 被调用！ <=========== 看调用的是Name的拷贝构造函数！
container的 移动构造函数 被调用。
~~~

究竟发生了什么？ 为什么没有调用Name的移动构造函数？

原因是这样的，Container的移动构造函数的参数是 `mp`。当`this->_name = mp._name`（将mp的值传给原对象时，`mp._name`是一个Name对象，但是他有名字，有固定的内存空间，他是左值），等号的右侧不是一个右值！所以只能调用Name类的拷贝构造函数，即`Name( const Name &cp )`. 还记得右值引用的“奇怪特性”嘛？？ `mp._name`是一个有名字的东西，他是一个左值呀！

原因清楚了，可是怎么办呢？？如此的话，我们精心准备的提高效率的方法没有用了！拷贝还是发生了！

### 3.2 std::move()

C++11 给出的解决方案就是： **std::move()**

> std::move( ): Returns an rvalue reference to arg.( 返回参数的右值引用 )[[2]][2]

这个函数可以强制把参数变成右值引用。下面我们修改一下Container的移动构造函数：

{% highlight cpp %}
Container( Container &&mp )
	: _intp( mp._intp ), _name( std::move( mp._name ) )
{
	mp._intp = NULL;
	std::cout << "container的 移动构造函数 被调用。\n";
}
{% endhighlight %}

然后得到程序输出：

~~~
Container的 构造函数 被调用！
Name的 移动构造函数 被调用！ <======== 顺利调用了移动构造函数
container的 移动构造函数 被调用。
~~~

大功告成！！

然后你可能会发现，在`Name`类中的移动构造函数还有一点不高效的地方，你发现了么？？跟一开始的`Container`类同样的问题。

相信你已经发现了，就是`Name( Name &&mp ) : _id( mp._id ), _size( mp._size )`这句中的`_di( mp._id )`。 因为`_id` 是一个 string 类，我们同样可以用`std::move()` 来强制执行 string 类的移动构造函数！

你可能会问，为什么`_size`不要移动？ 哈哈， 因为int是biuld-in类型，他们的拷贝代价相对自定义类来说很小。当然如果你愿意，你可以移动它！

std::move() 一些其他的作用：

比如，你可以让函数返回右值引用：

~~~
int x;
int && getRvalueInt ()
{
	return std::move( x );
}
~~~


-------

## 4. 完美转发

这个概念主要出现在范型设计中，经常会遇到的一个问题是怎样将一组参数原封不动的转发给另外一个函数。

这里不做过多解释，直接给出解决方案：

**std::forward()**

这个函数会将一个函数的参数类型，原封不动的传递给另一个函数。

~~~cpp
template<typename T>
void PerfectForward(T &&t)
{
	fun(std::forward<T>(t)); // fun将得到一个T的右值引用参数！
}
~~~

-----

## 文章代码

[code](/sourcecode/rvaluerefrence.cpp)

[1]:http://en.cppreference.com/w/cpp/language/value_category
[2]:http://www.cplusplus.com/reference/utility/move/
