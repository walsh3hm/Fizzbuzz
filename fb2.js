#!/usr/bin/env node
var output = "";
for (var i = 1; i <= 100; i += 1) {
	if (0 === i % 15) {
		output += "fizzbuzz";
	} else if (0 === i % 5) {
		output += "buzz";
	} else if (0 === i % 3) {
		output += "fizz";
	} else {
		output += i;
	}
	output += " ";
}
console.log(output);