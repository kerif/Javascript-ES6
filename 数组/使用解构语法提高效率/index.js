//一、解构赋值跟展开运算符要区分开 而且是分左右的
let arr = ['shd', 13];
//严格模式下要let var等
let [name, year] = arr;
console.log(name);
console.log(year);

//二、函数返回
function get() {
    return ['cup', '100']
}

let [object, price] = get();
console.log(object);
console.log(price);

//三、字符串解构
const [...arr2] = "hsdf";
console.log(arr2);

//四、部分解构 逗号占位符
let [,money] = get();
console.log(money);

//五、将剩余部分赋值，利用展开运算符 ...运算符左边吸收，右边展开
arr.push('man');
let [mode, ...args] = arr;
console.log(args); 

//六、指定默认值
let [id, pick = "200"] = [42];
console.log(pick); 

//七、用于函数传参
function show([...args]) {
    console.log(args);
}
show(["米老鼠", "唐老鸭", "米妮"]);

//




