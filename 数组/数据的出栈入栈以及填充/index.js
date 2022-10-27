//一、pop末尾弹出  返回值为弹出值 
let arr = ['hmbb', 'zyg', 'sd'];
var value = arr.pop();
console.table(arr);
console.log(value);

//二、与pop相对的是push方法 返回值为length

//三、unshift 数组首部增加 
arr.unshift('zhenzhen');
console.log(arr);

//四、shift 数组首部移除
var value =  arr.shift();
console.log(arr);
console.log(value);

//五、数组填充
let arr1 = new Array(7).fill("pdx")
console.log(arr1);

//fill下标参数左闭右开
arr1.fill("hmbb", 2, 5);
console.log(arr1);


