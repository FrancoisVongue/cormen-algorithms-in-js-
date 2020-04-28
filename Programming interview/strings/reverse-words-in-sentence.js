const str = "I";

function reverseSentence(str) {
    let words = str.split(' ');
    let buffer = null;
    for(let i = 0; i < Math.floor(words.length / 2); i++) {
        buffer = words[i];
        words[i] = words[words.length - (i + 1)];
        words[words.length - (i + 1)] = buffer;
    }
    
    return words.join(' ');
}

console.log(reverseSentence(str));
