// Reverse pyramid:

let num = 5;
let value = "";
for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
        value += " ";
        // console.log(value);
    }
    for (let k = 0; k < 2 * (num - i) - 1; k++) {
        value += "*";
        // console.log(value);
    }
    value += "\n";
}
console.log(value);