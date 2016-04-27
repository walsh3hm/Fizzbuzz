var count, fizzer, buzzer, fizzbuzzer;
count = function(begin, end) {

	// var output = "", space;
	// for (var i = begin; i <= end; i += 1) {
	// 	space = i > begin ? " " : "";
	// 	output = output + space + buzzer(fizzer(i));
	// }
	var output = buzzer(fizzer(begin));
	for (var i = begin; i < end; i += 1) {
		output = output + " " + buzzer(fizzer(fizzbuzzer(i + 1)));
	}

	// return, e.g. "1 2 3 4 5"
	return output;
};

fizzer = function(num) {
	// if(0 === num % 3) {
	// 	return "fizz";
	// }
	// return num;
	return 0 === num % 3 ? "fizz" : num;
};

buzzer = function(num) {
	return 0 === num % 5 ? "buzz" : num;
};

fizzbuzzer = function(num) {
	return 0 === num % 15 ? "fizzbuzz" : num;
};

module.exports = {
	count: count,
	fizzer: fizzer,
	buzzer: buzzer,
	fizzbuzzer: fizzbuzzer
};