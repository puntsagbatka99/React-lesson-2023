const array = [1,2,3,4,5,6,7,8,9,10]
let a = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 != 0){
        a = a + array[i]
    }
}
console.log(a)

let b = [2,3,4];
let c = [4,5,6];
function sum (add,add1){
    let d = [];
    for(let i =0; i < 4; i++){
        d[i] = b[i] * c[i];
    }
    return d;
}
console.log(sum(b,c))