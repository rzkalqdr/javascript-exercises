const reverseString = function(text) {
    let split = text.split("")
    let reversed = '';
    for (let i = split.length-1; i >= 0; i--) {
        reversed += split[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
