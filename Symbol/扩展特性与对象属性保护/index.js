let symbol = Symbol();

let hd = {
   name: "123",
   [symbol]: 'hmbb',
}

//如何得到对象中的Symbol
//（1）for in？ 没戏
for(key in hd) {
   console.log(key);
}  //只有nam没有symbol

//（2）for of？ 没戏
for(key of Object.keys(hd)) {
   console.log(key);
} //还是只有name没有symbol

//（3） 使用Object.getOwnPropertySymbols(对象名)  遍历的到Symbol遍历不到普通属性
for(const key of Object.getOwnPropertySymbols(hd)) {
   console.log(key); //得到Symbol
}

//（4）Reflect.ownKeys(对象名) 两者都能获取到
console.log("使用Reflect.ownKeys()");
for(const key of Reflect.ownKeys(hd)) {
   console.log(key);
}

//（5）如果是类可以写一个get方法返回出去