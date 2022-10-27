//一、如何将NodeList快速转换为Array以便可以使用map等方法
let divs = document.querySelectorAll('div');

//(1) Array.from
//(2)用原型链  + call
let arr1 = Array.prototype.map.call(divs, item => {
    console.log(item);
})

//(3)展开运算符
let arr2 = [...divs].map(function (item) {
   item.addEventListener("click", function() {
        this.classList.toggle("hide") //点击事件
   })
})


