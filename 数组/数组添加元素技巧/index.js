//一、使用array.length在末尾追加
let arr = ['hmbb', 'zyg', 'xlb'];
arr[arr.length] = 'sd';
console.log(arr);

//二、使用展开运算符
let arr1 = ['kh','xs'];
arr1 = [...arr1, ...arr];
console.log(arr1);

//三、使用数组方法 push  push的返回值为新的length
arr1.push('gqlj'); 
arr1.push('toufu', 'AE86');
console.table(arr1);

//四、push加展开运算符
arr.push(...arr1)
console.log(arr);

//五、返回begin 到 end 的数组
function rangeArray(...args) {
    let [begin, end] = args;
    const arr3 = [];
    for(let i = begin; i <= end; i++) {
        arr3.push(i);
    }
    return arr3;
}

let arr4 = rangeArray(5,19);
console.table(arr4);
