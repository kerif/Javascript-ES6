//一、slice截取 左闭右开 不对原数组进行改变
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.slice(1,3);
console.log(arr1);

arr1 = arr.slice(2); //下标2开始截到最后

//二、splice  参数 从哪开始 截几个 改变原数组(原数组的对应数据已被截掉)
arr1 = arr.splice(1,4);
console.log(arr1);

//三 splice 截取之后可以添加数据
arr1.splice(1, 1, 'duola');
console.table(arr1);

//四、

