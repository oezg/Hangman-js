let uu = "\u006f\u0308" + "\u00f6";
let uuNorm = uu.normalize();
console.log(`len('${uu}') = ${uu.length}; len('${uuNorm}') = ${uuNorm.length}`);
//  >> 'len(öö) = 3; len(öö) = 2'
const toHex = (s) => [...s]
    .map((ch) => "\\u" + ("000" + ch.codePointAt(0).toString(16)).slice(-4))
    .join("");
console.log(toHex(uu)); //  >> \u006f\u0308\u00f6
console.log(toHex(uuNorm)); //  >> \u00f6\u00f6
console.log("----------------------")
console.log("\u006f\u0308");
console.log("----------------------")

const input = require('sync-input')
let ö = input("Input ö: ")
console.log(toHex(ö))
