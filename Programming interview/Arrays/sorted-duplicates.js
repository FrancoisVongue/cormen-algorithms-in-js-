"use strict";
var array = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 12, 21, 21, 44, 53, 53];
var deleted = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1] && i < array.length - 1) {
        array[i] = 0;
        deleted++;
    }
    else if (deleted > 0) {
        array[i - deleted] = array[i];
        array[i] = 0;
    }
}
console.warn(array);
//# sourceMappingURL=sorted-duplicates.js.map