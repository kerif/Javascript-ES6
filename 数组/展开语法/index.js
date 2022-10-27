//一、数组合并
//(1) for of 迭代
let arr1 = ['aks', 'casfa'];
let arr2 = ['js', 'css'];
for(value of arr2) {
    arr1.push(value);
}
console.log(arr1);

//(2) 展开运算符
arr1 = ['aks', 'casfa']
arr1 = [...arr1, ...arr2];
console.log(arr1);

//二. 函数不确定多少个参数时
function sum(...args) {
    console.log(args);
    //求和用数组中reduce方法
}

sum(1, 2, 3, 4);
sum(1, 2, 5);

