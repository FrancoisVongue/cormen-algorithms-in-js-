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

function maxSequenceRecursive(array) {
    if(array.length < 2) return array[0] ? array[0] : 0;

    let pivot = Math.floor(array.length / 2) - 1;

    let arr1 = maxSequenceRecursive(array.slice(0, pivot + 1));
    let arr2 = maxSequenceRecursive(array.slice(pivot + 1, array.length));
    let arr3 = maxSequenceLayingIn(array, pivot);

    console.log(arr1, arr2, arr3);
    return Math.max(arr1, arr2, arr3);
}

function maxSequenceLayingIn(array, i) { // divisor is between i and i + 1
    const array1 = array.slice(0, i + 1).reverse();
    const array2 = i+1 < array.length ?
        array.slice(i + 1, array.length) : [];
    let max = array1[0];
    let sum = 0;

    for(let i of array1) {
        sum += i;
        max = Math.max(max, sum);
    }
    sum = 0;

    let max2 = array2[0] || 0;
    for(let i of array2) {
        sum += i;
        max2 = Math.max(max2, sum);
    }
    return max + max2;

}

console.log(maxSequenceRecursive(array));
