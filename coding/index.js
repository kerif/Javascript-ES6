//一、将NodeList转为数组, 操作其中元素

//（1）原型链方法
/**
    let divs = document.querySelectorAll('div');
    console.log(divs);
    Array.prototype.map.call(divs, (item) => {
    let color = item.innerHTML;
    item.style.background = color;
    console.log(item);
})
*/

//(2) 扩展运算符
// let divs = document.querySelectorAll('div');
// [...divs].map((item) => {
//     item.style.background = item.innerHTML;
// })

// (3) Array.from()
// let divs = document.querySelectorAll('div');
// Array.from(divs).map((item) => {
//     item.style.color = item.innerHTML;
// })


//二、数组类型转换, 例如转为字符串用于前后端交互

//检测是否数组类型
// let obj = {
//     name: 'das',
// }
// let array = [1, 3, 4, 5];
// console.log(Array.isArray(obj)); //false
// console.log(Array.isArray(array));

//数组转字符串
// let arr = [121, 122, 123, 124];
// let id = arr.join('|');
// console.log("url:" + location.href + '?id=' + id);

//字符串拆分成数组
// let str = "小明,14,男";
// let person = str.split(',');
// console.log(person);

// let a1 =  Symbol(1);
// let a2 =  Symbol(1);
// console.log(a1 == a2);

// let c1 = Symbol.for("cs");
// let c2 = Symbol.for("cs");
// console.log(c1 == c2);

// let symbol = Symbol('hmbb');
// let obj = {
//     name: "cup",
//     [symbol]: 'hmbb',
// }

// for(const key in obj) {
//     console.log(key);
// }

// for(const key of Object.keys(obj)) {
//     console.log(key);
// }

// for(const key of Object.getOwnPropertySymbols(obj)) {
//     console.log(key);
// }

// console.log("-------所有属性都获取到-------");
// for(const key of Reflect.ownKeys(obj)) {
//     console.log(key);
// }

{
let h1 = Symbol(123);
let h2 = Symbol(123);
console.log(h1 == h2);

let c1 = Symbol.for("cup");
let c2 = Symbol.for("cup");
console.log(c1 == c2);

let symbol = Symbol("person1")
let obj = {
    name: "李四",
    age: "13",
    [symbol]: "lisi",
}

for(const key in obj) {
    console.log(key);
}

for(let key of Object.keys(obj)) {
    console.log(key);
}

for(let key of Object.getOwnPropertySymbols(obj)) {
    console.log(key);
}

console.log("------所有属性都遍历到----");
for(let key of Reflect.ownKeys(obj)) {
    console.log(key);
}
}

{
    let user1 = {
        name: '李四',
        key: Symbol(),
    }
    let user2 = {
        name: '李四',
        key: Symbol(),
    }

    let Grade = {
        [user1.key]: {
            key: user1.key,
            name: '李四',
            chinese: "39",
            math: "41",
        },

        [user2.key]: {
            key: user2.key,
            name: '李四',
            chinese: "92",
            math: "97",
        },
    }

    //同名
    console.log(Grade[user1.key]);
    console.log(Grade[user2.key]);
}

//Symbol在缓存容器中的应用
{
     class Cache {
        static data = {};
        static setData(name, value){
             this.data[name] = value;
        }
        static getData(name) {
            return this.data[name];
        }

        //Symbol
        static set(key, value) {
            this.data[key] = value;
        }

        static get(key) {
            return this.data[key];
        }
    }


    let user = {
        name: "apple",
        des: "用户资料"
    }
    let cart = {
        name: "apple",
        des: "购物车资料"
    }

    Cache.setData(user.name, user);
    Cache.setData(cart.name, cart);

    //得到的都是购物车资料
    console.log(Cache.getData(user.name));
    console.log(Cache.getData(cart.name)); 
    
    let userData = {
        key:Symbol('user'),
        name: "apple",
        des: "用户资料"
    }
    let cartData = {
        key: Symbol('cart'),
        name: "apple",
        des: "购物车资料"
    }

    Cache.set(userData.key, userData);
    Cache.set(cartData.key, cartData);

    //获取
    console.table(Cache.get(userData.key));
    console.table(Cache.get(cartData.key));
}

{
    console.log(setTimeout.__proto__.constructor);
}
