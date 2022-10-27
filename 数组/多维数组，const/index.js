//多维数组的定义 字面量
let array = [[1, 2, 3], ['hel', 'csm']];
console.log(array[1][1]);

//如果不用多维数组 就写成对象的形式
let lesson = [{ name: 'css', click: '19'}, 
{name: 'c++', click: '108'}]

console.log(lesson[1].name);

//const
const name = 5;
//name = 3;  //值类型 报错
const obj = {
    name: 'cup',
    price: '17'
};

obj.name = 'book'; //改 const引用类型内部不报错 该整个就报错

console.log(name);
console.log(obj.name);

//数组也是引用类型
const arr = [1, 2, 3];
arr[1] = 'abc';
let {log} = {...console}  //结构对象方法
log(arr);