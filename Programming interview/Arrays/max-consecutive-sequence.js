// array is not sorted
// calculate max sequence that increments by 1

let array = [2,3,10,11,4,2,3,12,7,8,9,26,27,1];

let lengths = [];

while (array.length > 0) {
    let min;
    let max;
    let localSeq = [array[0]];
    
    for (let i = 0; i < array.length; i++) {
        min = Math.min(...localSeq);
        max = Math.max(...localSeq);
        
        let inLocal = !!localSeq.filter(n => n == array[i]).length;
        let shouldBeIn = max >= array[i] && min <= array[i];
        let mustAdd = array[i] == max + 1 || array[i] == min - 1;
        
        if(mustAdd) {
            localSeq.push(array[i]);
            array.splice(i,1);
            i = -1;
        } 
        if(!inLocal && shouldBeIn) {
            localSeq.push(array[i]);
            array.splice(i,1);
            i = -1;
        } else if (inLocal){
            array.splice(i,1);
            i = -1;
        }
    }
    
    lengths.push(localSeq.length);
}

console.log(Math.max(...lengths));