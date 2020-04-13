const host = "baxaaxr", playa = "byuartn";
const table = getarray(host.length + 1, playa.length + 1);

for (let i = 0; i < playa.length; i++) {
  for (let j = 0; j < host.length; j++) {
    if(playa[i] == host[j]) {
      table[j+1][i+1] = table[j][i] + 1;
    }
    else table[j+1][i+1] = Math.max(table[j][i+1],table[j+1][i]);
  }
}

console.table(table);

function getarray(x,y) {
  const newArray = [];
  
  for (let i = 0; i < x; i++) {
    newArray[i] = [];
    for (let j = 0; j < y; j++) {
      newArray[i][j] = 0;
    }
  }
  
  return newArray;
}

exports.getArray = getarray;