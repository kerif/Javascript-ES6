//一、全局变量不会被回收

//二、函数作用域与环境
//每调用一次函数，都要开辟独立的内存空间 
//容易误区：多次执行同一函数时，函数定义并非只有一个变量，多次执行时会产生多个变量

function show() {
    let url =  "www.YouTube.com";
    let name =  "油管";
    console.log(name + url);
    //访问不到内部函数display定义的变量, 避免了变量覆盖 

    function display() {  //子函数
        let id = "441";
        console.log(id);
    }
    display();
}

//多次执行，多个独立的内存空间
show();
show(); 
