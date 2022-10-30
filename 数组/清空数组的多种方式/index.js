let arr = [1,3,5,2];

//一、length
arr.length = 0;
console.log(arr); //[]

//二、赋值为空
{
    let arr = [1,3,5,2];
    let hd = arr;
    hd = []; //新内存空间
    console.log(hd); // []
    console.log(arr);// [1,3,5,2]
}

//三、splice方法
{
    let arr = [1,3,5,2];
    arr.splice(0);
    console.log(arr); //[]
    //arr.splice(0, arr.length)也可以;
}

//pop方法
{
    let arr = [1,3,5,2];
    while(arr.pop());
    console.log(arr); // []
}