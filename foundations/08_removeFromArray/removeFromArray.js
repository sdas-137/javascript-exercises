const removeFromArray = function(arr, ...args) {
    // O(n) solution
    let mp = new Map();
    for (let arg of args) mp.set(arg, 1);
    return arr.filter(item => !mp.get(item));
};

// Do not edit below this line
module.exports = removeFromArray;
