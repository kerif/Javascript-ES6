//一、将NodeList转为数组, 操作其中元素

//（1）原型链方法
/**
    let divs = document.querySelectorAll('div');
    console.log(divs);
    Array.prototype.map.call(divs, (item) => {
    let color = item.innerHTML;
    item.style.background = color;
    console.log(item);
})
*/

//(2) 扩展运算符
// let divs = document.querySelectorAll('div');
// [...divs].map((item) => {
//     item.style.background = item.innerHTML;
// })

// (3) Array.from()
// let divs = document.querySelectorAll('div');
// Array.from(divs).map((item) => {
//     item.style.color = item.innerHTML;
// })


//二、数组类型转换, 例如转为字符串用于前后端交互

//检测是否数组类型
let obj = {
    name: 'das',
}
let array = [1, 3, 4, 5];
console.log(Array.isArray(obj)); //false
console.log(Array.isArray(array));

//数组转字符串
let arr = [121, 122, 123, 124];
let id = arr.join('|');
console.log("url:" + location.href + '?id=' + id);

//字符串拆分成数组
let str = "小明,14,男";
let person = str.split(',');
console.log(person);

