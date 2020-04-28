/* Write a program which takes as input a phone number, specified as a string of digits,
and returns all possible character sequences that correspond to the phone number */

const table = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu"];

// ## W/O recursion

function getMnemonicsWOrecursion(phoneNumber) {
    let charsPerNumber = 3;
    let mapTable = table.map( _  => 0);
    let mnemonics = [];
    
    for(let i = 0; i < charsPerNumber ** phoneNumber.length; i++) {
        let mnemonic = phoneNumber.map(c => {
            let number = parseInt(c);
            let possibleChars = table[number];
            let char = possibleChars[mapTable[number]];
            return char;
        });
        mnemonics.push(mnemonic);
        mapTableIncrement();
    }
    
    function mapTableIncrement(arr, max) {
        for(let index in arr) {
            if(arr[index] < max - 1) {
                arr[index]++;
                break;
            } else {
                if(index < arr.length - 1) {
                    arr[index + 1]++;
                    arr.map((n, i)=> (i <= index) ? 0 : n);
                }
            }
        }
    }
}










// function getMnemonics(phoneNumber) {
//     if(phoneNumber.length == 1) 
//         return table[phoneNumber].split('');
    
//     let mnemonics = [];
//     let number = parseInt(phoneNumber[0]);
//     let stringLeft = phoneNumber.slice(1);
//     let characters = table[number];
    
//     for(let c of characters) {
//         let leftMnemonics = getMnemonics(stringLeft);
//         leftMnemonics = leftMnemonics.map(s => c + s)
//         mnemonics = mnemonics.concat(leftMnemonics);
//     }
    
//     return mnemonics;
// }

// console.log(getMnemonics("8244"));






























