export default function ExerciseFunction(){

    function findMax(a,b){
        return Math.max(a,b)
    }
    console.log(findMax(11,13));

    function findNumberInArray( arr, num){
        for(let i = 0; i < arr.length; i++){
            if(num === arr[i]){
                return i;
            }
        }
        return -1;
    }
    const a = [1,2,4,5]
    console.log(findNumberInArray(a, 6))
    console.log(findNumberInArray(a, 4))

    function randomNumber(a, b){
        let max = Math.max(a,b)
        let min = Math.min(a,b)
        let c = Math.floor(Math.random() * (max - min + 1) + min);
        return c;
    }
    console.log(randomNumber(2,5))

    function findAverage(arr){
        let sum = 0;

        arr.map(n =>{
            sum += n
        })
        return sum / arr.length;
    }
    console.log(findAverage(a))

    function isPrime (num){
        if ( num < 2){
            return false;
        }
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }
    console.log(isPrime(11))

}
