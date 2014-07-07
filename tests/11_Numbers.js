describe('Chapter 11 Numbers', function() {

	it('Number Literals', function() {
		var a = 35;
		//assert.strictEqual(a, ???);
		//var PI = ???; //There is only one numeric type
		//assert.strictEqual(PI, 3.141);
		//assert.strictEqual(typeof PI, ???);
		assert.strictEqual(0xFF, 255); //Hexadecimal format
		assert.strictEqual(5e2, 500); //Exponent format
		//assert.strictEqual(5e-2, ???);
	});

	it('Invoking Methods on Literals', function() {
		var number = 3; //primitive variable
		//assert.strictEqual(number.toString(), ???); //Can be used as an object

		assert.strictEqual(345..toString(), '345'); //Just like literal numbers
		//assert.strictEqual((123).toString(), ???); //There are some other ways
	});

	it('Converting to Number', function() {
		assert.strictEqual(Number(''), 0); //Invoked as a function, not as a constructor
		assert.strictEqual(+'', 0); //Does the same but is less descriptive
		//assert.strictEqual(Number('???'), 123); 
		assert.strictEqual(parseFloat('123'), 123);
		assert.isTrue(isNaN(parseFloat(true)));
		assert.strictEqual(Number(true), 1); //Different behavior
		assert.strictEqual(parseFloat('123#Joohn#23'), 123); //Trunck the string
		assert.isTrue(isNaN(Number('123#Joohn#23'))); //Different behavior
		//assert.strictEqual(parseFloat('123.23.4'), ???);
	});

	it('Special Number Values', function() {
		//assert.strictEqual(typeof NaN, ???);
		assert.isTrue(isNaN(Number('xyz')));
		//assert.is???(isNaN(1 / NaN));
		//assert.is???(isNaN(1 + NaN));
		//assert.is???(isNaN(1 < NaN));
		//assert.is???(NaN === NaN); //Pitfall
		//assert.is???(NaN == NaN); //Pitfall
		assert.isFalse(isNaN(33));
		assert.isTrue(isNaN(NaN)); //Works, but...
		//assert.is???(isNaN('abc')); //How can you distinguish one case from another?

		function myIsNaN(value) {
			return typeof value === 'number' && isNaN(value);
		}

		//assert.is???(myIsNaN(NaN));
		//assert.is???(myIsNaN('abc'));
		//assert.is???(myIsNaN(123));

		assert.isTrue(isFinite(Math.pow(2, 1023)));
		assert.isTrue(Math.pow(2, 1024) === Infinity); //Works, but there are two infitity values...
		assert.isTrue(-Math.pow(2, 1024) === -Infinity);
		//assert.is???(isFinite(Math.pow(2, 1024))); //Better
		//assert.is???(isFinite(1 / 0));
		assert.isTrue(isFinite(Number.MAX_VALUE));
		//assert.is???(isFinite(NaN));
		//assert.is???(isFinite(Infinity));
		//assert.is???(isFinite(-Infinity));
		//assert.is???(isNaN(Infinity - Infinity));
	});

	it('Handling Rounding Errors', function() {
		assert.strictEqual(0.1 + 0.2, 0.30000000000000004); //Round problem

		var EPSILON = Math.pow(2, -53);
		function epsEqu(x, y) {
			return Math.abs(x - y) < EPSILON;
		}

		///assert.isTrue(epsEqu(0.1 + 0.2, ???));

	});

	it('Integers in JavaScript', function() {
		//assert.strictEqual(Math.floor(3.8), ???);
		//assert.strictEqual(Math.floor(-3.8), ???);
		//assert.strictEqual(Math.ceil(3.8), ???);
		//assert.strictEqual(Math.ceil(-3.8), ???);
		//assert.strictEqual(Math.round(3.8), ???);
		//assert.strictEqual(Math.round(3.5), ???);
		//assert.strictEqual(Math.round(3.2), ???);
		//assert.strictEqual(Math.round(-3.8), ???);
		//assert.strictEqual(Math.round(-3.5), ???);
		//assert.strictEqual(Math.round(-3.2), ???);

		assert.strictEqual(parseInt('3.2#'), 3); //Trunc decimal and no numeric part
		//assert.strictEqual(parseInt('-3.8#'), ???);
		assert.strictEqual(parseInt('0xA'), 10); //Can make base conversions(radix 16)
		assert.strictEqual(parseInt('010', 10), 10); //Always pass the radix
		assert.strictEqual(parseInt('010', 8), 8);

		var x = '12.99';
		//assert.strictEqual(parseInt(x, 10), ???); //Danger: The result is truncated
		//assert.strictEqual(parseFloat(x), ???);
		//assert.strictEqual(Number(x), ???);

		//assert.strictEqual(parseInt(0.0000008, 10), ???); //The number is stored in exponential notation: 8e-7
		//assert.strictEqual(parseFloat(0.0000008), ???); //Do not use parseInt if you can have decimal numbers
	});

	it('Arithmetic Operators', function() {
		//assert.strictEqual(1 + 2, ???);
		//assert.strictEqual(3 / 2, ???); //Remember: There is only ona numeric type
		//assert.strictEqual(3 % 2, ???);
		//assert.strictEqual(-3 % 2, ???); //Pitfall: The Remainder Operator (%) Is Not Modulo

		var x = 5;
		x++;
		//assert.strictEqual(++x, ???);
		//assert.strictEqual(x++, ???);

	});

	it('The Function Number', function() {
		//assert.strictEqual(Number('123'), ???);
		////assert.strictEqual(typeof Number('123'), ???);
		//assert.strictEqual(new Number('123'), ???);
		//assert.strictEqual(typeof new Number('123'), ???);
	});
	
	it('Number Constructor Properties', function() {
		assert.strictEqual(Number.MAX_VALUE, 1.7976931348623157e+308);
		assert.strictEqual(Number.MAX_VALUE * 2000, Infinity);
		assert.strictEqual(Number.NEGATIVE_INFINITY, -Infinity);
	});
	
	it('Number Prototype Methods', function() {
		assert.strictEqual(0.0000003.toFixed(10), '0.0000003000');
		//assert.strictEqual(3.456901.toFixed(3), ???);
		assert.strictEqual(0.0000003.toString(), '3e-7');
		assert.strictEqual(123..toString(), '123');
		assert.strictEqual(16..toString(8), '20'); //Base conversion
	});
});