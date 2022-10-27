//声明方式  new Array 或者 字面量

//理解数组是引用类型
let h1 = [1, 2, 3, 4, 5];
let h2 = h1;
h2[1] = 'xiao'
console.log('数组类型' + typeof(h1));
console.log('h1: ' + h1);
console.log('h2: ' + h2);

//console.table查看更清晰
console.table(h1)
