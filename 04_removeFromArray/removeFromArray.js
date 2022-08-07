const removeFromArray = function() {
    const args = Array.prototype.slice.call(arguments);
    if (args.length >= 2) {
        let array = args[0];
        for (let i = 1; i < args.length; i++) {
            let numIndex = array.indexOf(args[i]);
            if (numIndex === -1) continue;
            array.splice(numIndex, 1);
        }
        return array;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
