function Person() {
    let n = 1;
    this.add = function() {
        console.log(++n);
    }
}

let p1 = new Person();
p1.add(); //2
p1.add(); //3

let p2 = new Person();
p2.add(); //2
p2.add(); //3