//一、对象形式
let fun = new Function("title","console.log(title)"); //参数 函数体
fun("4433");

//二、字面量形式
function hd(title) {
    console.log(title);
}
hd("4399");

//三、赋值 跟第二种有区别
let ck = function() {
    console.log("12333");
}
ck();

//三、对象中定义变量和函数
let user = {
    name: null,
    //非简写形式定义
    setUsername: function(name) {
        this.name = name;
    },
    //简写形式
    getUsername() {
        return this.name;
    }
}