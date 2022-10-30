let str = "hmbb,pdx";

//一、split拆分
let hd = str.split(',');
console.table(hd);

//二、join合并
let str1 = hd.join('-');
console.log(str1);

//三、concat合并多个数组
let arr1 = ["hmbb","sd"];
let arr2 = ["css", "javascript"];
let arr3 = ["csahjld", "fa", 1, 3, 6];
arr1 = arr1.concat(arr2, arr3);
console.log(arr1); //['hmbb', 'sd', 'css', 'javascript', 'csahjld', 'fa', 1, 3, 6]

//四、扩展运算符...  合并
let arr4 = [...arr3, ...arr2];
console.log(arr4); //['csahjld', 'fa', 1, 3, 6, 'css', 'javascript']

//五、数组片段赋值
let array = [1, 2, 3, 4, 5, 6];
array.copyWithin(3, 1, 4);  //(target , start, end);  [ start, end)
console.log(array);