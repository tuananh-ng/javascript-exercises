const palindromes = function (string) {
    const alphaNumericChars = getAlphaNumericChars(string);
    return isPalindrome(alphaNumericChars);

    function getAlphaNumericChars(string) {
        const chars = string.toLowerCase().split('');
        const charCodeOf0 = '0'.charCodeAt(0);
        const charCodeOf9 = '9'.charCodeAt(0);
        const charCodeOfA = 'a'.charCodeAt(0);
        const charCodeOfZ = 'z'.charCodeAt(0);

        return chars.filter((char) => {
            let curCharCode = char.charCodeAt(0);
            return (curCharCode >= charCodeOf0 && curCharCode <= charCodeOf9) ||
                    (curCharCode >= charCodeOfA && curCharCode <= charCodeOfZ);
        });
    }

    function isPalindrome(chars) {
        if (chars.length <= 1) {
            return true;
        }

        return chars.at(0) === chars.at(-1) && isPalindrome(chars.slice(1, -1));
    }
};

// Do not edit below this line
module.exports = palindromes;
