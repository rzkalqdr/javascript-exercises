const caesar = function(sentence, factor) {
    let shiftedSentence = '';
    let currentChar, shiftedCurrentChar;

    for (let i = 0; i < sentence.length; i++) {
        currentChar = sentence.charCodeAt(i);
        // Only shift if it is a letter, not anything else
        if ((currentChar >= 65 && currentChar <= 90) ||
            (currentChar >= 97 && currentChar <= 122)) {
            shiftedCurrentChar = currentChar + factor;
            
            // Character wrapping for uppercase
            // Wraps if > 90 and not lowercase (97 - 122)
            if (shiftedCurrentChar > 90 && shiftedCurrentChar < 97) {
                shiftedCurrentChar = shiftedCurrentChar - 90 + 64; 
            }
            // Wraps if < 65
            // } else if (shiftedCurrentChar < 65) {
            //     shiftedCurrentChar = shiftedCurrentChar - 64
            // }

            shiftedSentence += String.fromCharCode(shiftedCurrentChar);
        } else {
            shiftedSentence += String.fromCharCode(currentChar);
        }
    }

    return shiftedSentence;
};

// Do not edit below this line
module.exports = caesar;
