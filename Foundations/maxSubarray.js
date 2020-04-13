const array = [1, -4, 5, 6, -8, -15, 34, 66, -88, 43];

function maxSequence(array) {
    let max = 0;
    let currentValue = 0;
    for(let n of array) {
       currentValue += n;
       max = Math.max(max, currentValue);
       if(currentValue < 0) {
           currentValue = 0;
       }
    }
    return max;
}

console.log(maxSequence(array));




























