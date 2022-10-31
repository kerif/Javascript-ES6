//一、立即执行函数 有块级作用域
//当有函数重名时可以借助块级作用域
//模块化方式
{
    function show() {
        console.log("调用api1中的show()");
    }

    function add() {
        console.log("调用api1中的add()");
    }
    window.api_first = {show, add};
}

{
    function show() {
        console.log("调用api2中的show()");
    }

    function add() {
        console.log("调用api2中的add()");
    }
    window.api_second = {show, add};
}

//调用
api_first.show();
api_second.show();


