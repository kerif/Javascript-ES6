//一、函数提升区别
//（1）普通函数存在函数提升
show(); //正常执行
function show() {
    console.log("展示");
}

// （2）匿名函数不存在函数提升 即使用var声明也不会提升
// hd(); //报错
let hd = function() {
    console.log('hmbb');
}
hd();

//二、变量提升与调用
var lk = function() {
    console.log("qwe");
}

function lk() {
    console.log("lks");
}  //变量提升与覆盖

lk(); //qwe

//匿名函数与箭头函数经常用作函数参数
