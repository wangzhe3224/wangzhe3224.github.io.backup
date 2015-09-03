#include <iostream>
#include <string>
#include <vector>
class Name
{
public:
    Name( ) : _id( "nothing!" ), _size( 0 ) {
	std::cout << "Name的 构造函数 被调用！\n";
    }
    Name( const std::string &n, int s ) : _id( n ), _size( s ) { }
    // copy constructor
    Name( const Name &cp ) : _id( cp._id ), _size( cp._size ) {
	std::cout << "Name的 拷贝构造函数 被调用！\n" ;
    }
    // move constructor
    Name( Name &&mp ) : _id( mp._id ), _size( mp._size ) {
	std::cout << "Name的 移动构造函数 被调用！\n" ;
    }
    // 一些公共接口，让Container类可以访问Name的私有成员
    std::string getId() const { return _id; }
    int getSize() const { return _size; }
private:
    std::string  _id;
    int  _size;
};

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
	: _intp( mp._intp ), _name( std::move( mp._name ) )
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

int main() {
    std::vector<Container> v;
    v.push_back( Container( 1 ) );
}
