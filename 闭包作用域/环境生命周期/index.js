//一、函数在被定义时不会开辟内存空间，执行时才开辟

//二、正是因为会多次开辟内存，所以需要return出去并保存 让环境一直被引用着

//(1)不return并返回
function s1() {
    let c = 1;
    (function add() {
        console.log(++c);
    })();  //立即执行函数
}

s1(); //2
s1(); //2
s1(); //2
//(2)保存作用域链
function calculate() {
    let n =1;
    return function add() {
        console.log(++n);
    }
}

let a = calculate();
a();  //2
a();  //3
a();  //4

//三、赋值给多个变量接收，每次都开辟新内存
let b = calculate();
b();  //2
b();  //3

let c = calculate();
c();  //2
c();  //3

//多个函数嵌套并被返回出去时, 找最内层被引用变量，被引用的是一整个链

//生命周期的延长： 被引用时不回收内存，延长了生命周期