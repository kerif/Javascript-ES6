//一、缓存容器： 存储各个功能、组件间共享的数据 有重名的可能

//二、模拟往共享缓存中存取数据的场景

 class Cache {
    static data = {};
    static set(name, value) {
        return (this.data[name] = value);
    }
    static get(name) {
        return this.data[name];
    }
 }


 //有重复
 let user = {
    name: "apple",
    desc: "用户资料",
 };

 let cart = {
    name: "apple",
    desc: "购物车资料",
 }

    Cache.set(user.name, user);
    Cache.set(cart.name, cart);


 console.log(Cache.get(user.name)); //购物车资料
 console.log(Cache.get(cart.name)); //购物车资料

 //Symbol解决此问题
 let userData = {
    name: "apple",
    desc: "用户资料",
    key: Symbol()
 };
 let cartData = {
    name: "apple",
    desc: "购物车资料",
    key: Symbol()
 }
 Cache.set(userData.key, userData); //存进共享缓存
 Cache.set(cartData.key, cartData);

console.log(Cache.get(userData.key)); // 取到用户资料
console.log(Cache.get(cartData.key));// 取到购物车资料