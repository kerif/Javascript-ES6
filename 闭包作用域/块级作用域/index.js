//一、let有块级作用域概念
let a = 1;
//let a = 2;//同一作用域 报错

{
    let a = 3;
    console.log(a); //3
}
{
    let a = 4;
    console.log(a); //4
}

console.log(a); //1

//二、var没有块级作用域概念
{
    var b = 1;
}

{
    var b = 2;
}
console.log(b); //2

//三、const有块级作用域概念
{
    const a = 3;
    console.log(a); //3
}
{
    const a = 4;
    console.log(a); //4
}