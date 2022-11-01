//一、find查找数组元素 返回值为数组值
let arr = [1, 3, 2, "hmbb", "sd"];

let value = arr.find((item) => {
    return item == 3;
})
console.log(value); //3
 

let hd = arr.find((item) => {
    return item == 200;
})
console.log(hd);  //undefined

//二、find函数可用于根据对象属性查找对象数组
    
{
    let user = [{name: "hmbb",id: 1}, 
    {name: "hmbb",id: 2},
    {name: "sd"}, 
    {name:"pdx"}];
    let value = user.find((item => {  //只查找返回第一个
        return item.name == "hmbb";
    }))   
    console.log(value);  //{name: "hmbb"}

}



//三、findIndex函数返回索引
{
    let user = [{name: "hmbb",}, 
    {name: "sd"}, 
    {name:"pdx"}];
    let index = user.findIndex(item => {
        return item.name == "pdx";
    })
    console.log(index); //2
}



