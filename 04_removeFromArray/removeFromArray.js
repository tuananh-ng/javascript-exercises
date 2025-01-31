const removeFromArray = function(array, ...removedItems) {
    if (!Array.isArray(array)) { return ;}

    for (const removedItem of removedItems) {
        array = array.filter((item) => item !== removedItem);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
