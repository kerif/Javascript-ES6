let arr = [1, 9 ,3 ,5 ,7,3,"3"];
//一、从左侧开始查找
console.log(arr.indexOf(9)); //1

//二、从右侧开始查找
console.log(arr.lastIndexOf(3)); //5 严格类型匹配
console.log(arr.lastIndexOf(3,-4)); //2  第二个参数为从右边向左推前几个开始找

//三、判断数组中是否有某个元素
console.log(arr.includes("hmbb")); //false
console.log(arr.includes(9));  //true



