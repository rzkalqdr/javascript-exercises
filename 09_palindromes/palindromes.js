const ONLY_LETTERS = /[^a-z]/gi

const palindromes = function (text) {
    let equal = true;
    let cleaned = text.toLowerCase().replace(ONLY_LETTERS, '').split('')

    for (let i = 0, j = cleaned.length-1; i < cleaned.length, j >= i; i++, j--) {
        equal = cleaned[i] === cleaned[j];
        if (!equal) break;
    }

    return equal;
};

// Do not edit below this line
module.exports = palindromes;