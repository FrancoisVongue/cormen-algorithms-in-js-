const getArray = require('./lcsq').getArray;

const str2 = "english";
const str1 = "penguin";

let table = getArray(str1.length + 1, str2.length + 1);
let i = 0;
table[0] = table[0].map(c => i++);
i = 0;
table = table.map(row => {
  row[0] = i++;
  return row;
});
table[0][0] = 0;

const changeCost = +(Math.SQRT2).toFixed(1);

for (let i = 0; i < str1.length; i++) {
  for (let j = 0; j < str2.length; j++) {
    if(str1[i] !== str2[j]) {
      table[i+1][j+1] = Math.min(
        table[i][j] + changeCost,
        table[i+1][j] + 1,
        table[i][j+1] + 1);
    }
    else {
      table[i+1][j+1] = table[i][j] + 0;
    }
  }
}

console.table(table);