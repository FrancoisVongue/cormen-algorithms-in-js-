const getArray = require('./lcsq').getArray;

const knapsack = {volume: 6}
const items = [
  {name: "guitar", value: 1500, volume: 1},
  {name: "stereo", value: 3000, volume: 4},
  {name: "laptop", value: 2000, volume: 3},
  {name: "iphone", value: 2000, volume: 1},
  {name: "mp3", value: 1000, volume: 1},
]
let table = getArray(knapsack.volume + 2, items.length + 1);

for (let i = 0; i < items.length; i++) {
  for (let j = 1; j <= knapsack.volume; j++) {
    let currentMax = table[j+1][i];

    if(items[i].volume <= j) {
      let valueWithCurrentItem = items[i].value + table[j + 1 - items[i].volume][i];
      table[j+1][i+1] = Math.max(valueWithCurrentItem, currentMax);
    }
    else {
      table[j+1][i+1] = currentMax;
    }
  }
}
table.shift();
console.table(table);
