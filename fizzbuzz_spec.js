var fb = require('../fizzbuzz');

describe("A program that plays fizzbuzz", function() {

	it("can count from 1 to 6 and make appropriate substitutions", function() {
		expect(fb.count(1,6)).toBe("1 2 fizz 4 buzz fizz");
		expect(fb.count(10,15)).toBe("buzz 11 fizz 13 14 fizzbuzz");
	});

	it("can take a number and return 'fizz' for multiples of 3 and the number otherwise", function() {
		expect(fb.fizzer(3)).toBe('fizz');
		expect(fb.fizzer(5)).toBe(5);
		expect(fb.fizzer(17)).toBe(17);
	});

	it("can take a number and return 'buzz' for multiples of 5 and the number otherwise", function() {
		expect(fb.buzzer(5)).toBe('buzz');
		expect(fb.buzzer(6)).toBe(6);
		expect(fb.buzzer(17)).toBe(17);
	});

	it("can take a number and return 'fizzbuzz' for multiples of 15 and the number otherwise", function() {
		expect(fb.fizzbuzzer(15)).toBe('fizzbuzz');
		expect(fb.fizzbuzzer(6)).toBe(6);
		expect(fb.fizzbuzzer(17)).toBe(17);
	});
});