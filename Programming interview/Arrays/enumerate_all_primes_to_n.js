const n = 100;
const primes = [2];

for (let i = 3; i < n; i += 2) {
    let divisable = false;
    
    for(const prime of primes) {
        if(i % prime == 0 && !divisable) divisable = true; 
    }
    
    if(!divisable) primes.push(i);            
}

console.warn(primes.length);













