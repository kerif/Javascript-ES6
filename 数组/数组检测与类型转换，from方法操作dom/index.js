//一、Array.isArray() 检测数组类型
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({name: 'xxx'}));


//二、数组转字符串 String方法 toString方法
let arr = [1, 2, 3];
let s2 = String(arr)
let s1 = arr.toString();
console.log('s2类型为:' + typeof(s2));
console.log('s1类型为:' + typeof(s1));
console.log(s1);

//转字符串用于前后端交互 如将数组转字符串的值用于get参数

let id = arr.join('-');
console.log(location.href + '?id=' + id);

//结果： 后台得到后再根据符号拆开


//三、字符串拆分,拆成数组
//(1)split方法
let str = "csdhas,dahlskd";
console.log(str.split("")); //每个都拆
console.log(str.split(",")); //按逗号拆

//(2)Array.from方法 (有length属性就能拆)
console.log(Array.from(str));

let obj = {
    name: "cup",
    price: "180",
    0: "ccc", //类数组
    1: 'ddd',
    length: 2,
}

//对象为类数组形式时能得到结果
console.log(Array.from(obj)); //假如没有length得到空数组


//四、将Dom节点以数组的形式进行操作
//在html文档中写了两个div

let divs = document.querySelectorAll('div');
Array.from(divs, function (item) {
    //操作DOM
    console.log(item.innerHTML);
    // item.style.color = 'red';
    item.style.backgroundColor = 'red'
    return item; 
})

//扩展：map, filter, 遍历也可以用于操作DOM