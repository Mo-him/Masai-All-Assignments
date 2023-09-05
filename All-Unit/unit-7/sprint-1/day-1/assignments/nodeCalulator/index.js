const add = require("./functions/add");
const sub = require("./functions/sub")
const mult = require("./functions/mult");
const div = require("./functions/div");
const sin = require("./functions/sin");
const cos = require("./functions/cos");
const tan = require("./functions/tan");
const random = require("./functions/random");

const argu = process.argv.slice(2); 
if (argu.length < 1) {
    console.error("  Enter valid  input like  node index.js add 1 2");
} else {
    switch (argu[0]) {
        case 'add': console.log(add(+(argu[1]), +(argu[2])))
        break;
        case"sub": console.log(sub(+(argu[1]), +(argu[2])))
        break;
        case 'mult': console.log(mult(+(argu[1]), +(argu[2])))
        break;
        case 'div':console.log(div(+(argu[1]), +(argu[2])))
        break;
        case 'sin': console.log(sin(+argu[1]))
        break;
        case 'cos': console.log(cos(+argu[1]))
        break;
        case 'tan':console.log(tan(+argu[1]))
        break;
        case 'random':console.log(random())
        default:
            break;
    }
}