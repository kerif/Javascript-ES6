//一、如何让引用类型的内部值不能更改  Object.freeze()

const HOST = {
    url: "www.baidu.com",
    port: 80
}

HOST.port = 443;
console.log(HOST.port);

Object.freeze(HOST);
HOST.port = 8080;
console.log(HOST.port);

//二、提醒不能被更改  采用严格模式 "use strict" 会在控制台报错
