
// перше завдання
let car = {
    model: "BMW",
    year: "2017",
    color: "red",
    type: "dsds",
    signal(){
        alert("fa!fa!");
    }
};
// console.log(car.model);

// car.signal();
// console.log(car.model);
// кінець перщого завдення

let salaries = {
    front: 2000,
    back: 1000,
    disainer: 2000,
    dayPay(){
        alert("We must pay salerias on Thusday!")
    },
    total(){
        let sum = 0;
        for (el in this){
            if(el=="dayPay"){
                // console.log(el);
                continue
            }
            if(el=="total"){
                // console.log(el);
                continue
            }
            console.log(el);
            sum = sum + this[el]
            
        }
        console.log(sum);
    }
}
// salaries.total()





function makeUser(brant, system, coast) {
    return {
        brant: brant,
        system: system,
        coast: coast,
        toString(){
            console.log(this.brant);
            return this.brant;
        },
        valueOf(){
            console.log(this.coast);
            return this.coast;
        }
      // ...інші властивості
    };
};


let lenovo = makeUser("lenovo", "windows", 1000);

console.log(lenovo);
alert(+lenovo);