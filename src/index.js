const numStr = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

const dozensStr = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

const betweenNineAndTwentyStr = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

module.exports = function toReadable(number) {
    let str = "";
    let tempNum = number;
    if (tempNum >= 100) {
        str += numStr[Math.floor(tempNum / 100) - 1] + " hundred";
        tempNum %= 100;
    }
    if (tempNum >= 20) {
        str += " " + dozensStr[Math.floor(tempNum / 10) - 2];
        tempNum %= 10;
    }
    if (tempNum >= 10 && tempNum < 20) {
        str += " " + betweenNineAndTwentyStr[tempNum - 10];
        tempNum = -1;
    }
    if (tempNum > 0 && tempNum < 10) {
        str += " " + numStr[tempNum - 1];
        tempNum = -1;
    }
    if (number === 0) {
        str = "zero";
        tempNum = -1;
    }

    return str.trim();
};
