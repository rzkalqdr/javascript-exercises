const repeatString = function(text, repeat) {
    if (repeat < 0) {
        return 'ERROR';
    }
    let repeatedText = '';
    for (let i = 0; i < repeat; i++) {
        repeatedText += text;
    }
    return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
