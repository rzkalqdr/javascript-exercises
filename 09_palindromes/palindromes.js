const ONLY_LETTERS = /[^a-z]/gi

const palindromes = function (text) {
    let equal = true;
    let cleaned = text.toLowerCase().replace(ONLY_LETTERS, '').split('')

    forward: for (let i = 0; i < cleaned.length; i++) {
        for (let j = cleaned.length; j > i; j--) {
            equal = cleaned[i] === cleaned[j];
            if (!equal) break forward;
        }
    }

    return equal;
};

// Do not edit below this line
module.exports = palindromes;
