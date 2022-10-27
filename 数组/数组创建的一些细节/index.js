//如果只定义arr[0]和arr[4]
let arr = [3];
arr[4] = 4;
console.log(arr);
console.log(arr.length);
//结果：中间的会自动帮我们创建空值

//用new Array 只创建一个元素
let array = new Array(6); //结果： 创建了6个空元素

//使用of方法解决
let arr1 = Array.of(6);
console.log(arr1);
//结果： 创建了一个元素 值为6