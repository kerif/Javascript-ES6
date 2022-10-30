function move(array, from, to) {
    if(from < 0 || to >= array.length) {
        console.error("参数错误");
        return;
    }
    let newArray = array;
    let item = newArray.splice(from, 1);
    newArray.splice(to, 0, ...item);
    console.log("新数组为" + newArray);
    return newArray;
}

let array = [1,3,5,4,2];
console.log("原数组为" + array); //[1,3,5,4,2]
move(array, 1, 3);
//log: 新数组: [1,5,4,3,2];