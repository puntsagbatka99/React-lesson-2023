import addTwo from "./math.js";

console.log(addTwo (4, 5));

const array = [1,2,3,4,5,6,7,8,9,10]
let a = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 != 0){
        a = a + array[i]
    }
}
console.log(a)