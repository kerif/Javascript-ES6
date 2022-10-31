//一、Symbol使用场景
//例如查找商品 很多描述不唯一的时候 一般也可以用前缀区分 user-1, user-2, mall-1;

//二、Symbol唯一性
let a = 1;
let b = 1;
console.log(a == b);//true

let hd1 = Symbol(1);
let hd2 = Symbol(1);
console.log(typeof(hd1));
console.log(hd1 == hd2); //false

//三、不能往Symbol里面加属性 把Symbol当做永远不重复的字符串
hd1.name = "hd1";
console.log(hd1.name); //undefined

//四、往Symbol里定义描述
let hk1 = Symbol("cup");
let hk2 = Symbol("price");
console.log(hk1.description);


//另一种定义方式  Symbol.for()
let scnu = Symbol.for("school");
let edu = Symbol.for("school");
console.log(scnu == edu); //true
//跟之前定义的区别： 定义之后会存储下来(是一种全局定义) 下次定义相同描述时取前面赋值
//这种定义 如何拿到描述 Symbol.keyFor()
console.log(Symbol.keyFor(edu));








