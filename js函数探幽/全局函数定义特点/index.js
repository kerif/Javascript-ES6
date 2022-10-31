//一、全局函数变量覆盖 例如screenX
//var定义的函数名用window.函数名也可调用
console.log(window.screenX);
 
function screenX() {
    console.log("hmbb");
}

console.log(window.screenX);

//二、let定义的函数不能被window调用
let hd = function() {
    console.log("pdx");
}
// window.hd(); //报错

//三、函数不建议独立使用，放到模块或类中

