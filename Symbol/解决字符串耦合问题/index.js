//一、同名取成绩会覆盖
 let grade = {
    '李四': {
        math: 100,
        chinese: 80
    },
    '李四': {
        math: 70,
        chinese: 90
    }
 }

 console.log(grade.李四);

 //二、使用Symbol定义唯一标识，根据Symbol查找
 let user1 = {
    name: "李四",
    key: Symbol()
 }
 let user2 = {
    name: "李四",
    key: Symbol()
 };

 let Grade = {
    [user1.key]: {
        math: 100,
        chinese: 80,
    },
    [user2.key]: {
        math: 70,
        chinese: 90,
    }
 }

 //再加上 [] 取值 可以取到两个李四的分数了
 console.log(Grade[user1.key]);