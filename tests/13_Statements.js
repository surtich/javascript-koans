var assert = chai.assert;

describe('Chapter 13 Statements', function() {
	describe('variables', function() {
		it('Declaring and Assigning Variables', function() {
			var foo = 'abc';
			assert.strictEqual(foo, 'abc');

			var bar = '123', baz = 'xyz', z;
			//assert.strictEqual(baz, ???);
			//assert.strictEqual(z, ???);
			//assert.strictEqual(typeof z, ???);

		});
	});

	describe('loops', function() {
		it('The Bodies of Loops and Conditionals', function() {
			var x = 10;
			while (x >= 0)
				x--;
			//assert.strictEqual(x, ???);

			x = 0;
			var y = 5;


			while (y > 0) { //Better
				x++;
				y--;
			}
			//assert.strictEqual(x + y, ???);
		});

		it('Loops', function() {
			var i;
			var x = 0;
			for (i = 0; i < 5; i++) {
				x++;
			}
			//assert.strictEqual(x, ???);

			x = 0;
			for (i = 0; i < 5; i++) {
				if (i === 2) {
					continue;
				}
				x++;
			}
			//assert.strictEqual(x, ???);


			x = 0;
			for (i = 0; i < 5; i++) {
				if (i === 2) {
					break;
				}
				x++;
			}
			//assert.strictEqual(x, ???);

			var arr = ['a', 'b', 'c'];
			i = 0;
			var chars = '';
			while (i < arr.length) {
				chars += arr[i];
				i++;
			}

			//assert.strictEqual(chars, ???);

			i = 8;
			x = 0;
			do {
				x += i;
			} while (i < 6);

			//assert.strictEqual(x, ???);

		});

		describe('for-in loop', function() {
			it('for-in loop', function() {
				var x = {
					a: 1,
					b: 2,
					c: 3
				};
				var key;
				var sum = 0;

				for (key in x) {
					sum += x[key];
				}

				//assert.strictEqual(sum, ???);

			});

			it('Best practice: don’t use for-in for arrays', function() {
				var x = [1, 2, 3];
				x.foo = 4;
				var key;
				var sum = 0;

				for (key in x) {
					sum += x[key];
				}
				//assert.strictEqual(sum, ???); //Caution for-in iterates for all objects properties even in arrays.
			});


			it('Best practice: be careful with for-in for objects', function() {

				function Person(name, lastName) {
					this.name = name;
					this.lastName = lastName;
				}

				Person.prototype.type = function() {
					return 'Person';
				};

				var person = new Person('Jane', 'Doe');
				var key;
				var fullName = '';
				for (var key in person) {
					if (fullName) {
						fullName += ' ';
					}
					fullName += person[key];
				}

				//assert.???(fullName, 'Jane Doe'); //Caution for-in iterates for all objects properties even prototype properties.

				/* Do not uncomment the iterator order is not reliable
				 var fullName = '';
				 for (var key in person) {
				 if (person.hasOwnProperty(key)) {
				 if (fullName) {
				 fullName += ' ';
				 }
				 fullName += person[key];
				 }
				 }
				 assert.strictEqual(fullName, 'Jane Doe');
				 */

				var fullName = person.name + ' ' + person.lastName;
				assert.strictEqual(fullName, 'Jane Doe'); //This is the only right way


			});
		});


	});

	describe('conditionals', function() {
		it('if-else if-else', function() {
			function test(s1, s2) {
				if (s1 > s2) {
					return 1;
				} else if (s1 < s2) {
					return -1;
				} else {
					return 0;
				}
			}


			//assert.strictEqual(test(1, 2), ???);
			//assert.strictEqual(test(1, 1), ???);
		});
		it('switch', function() {
			function divide(dividend, divisor) {
				switch (divisor) {
					case 0:
						throw 'Division by zero';
					default:
						return dividend / divisor;
				}
			}

			try {
				divide(10, 0);
				assert.fail('This is not supposed to happen');
			} catch (error) {
				//assert.strictEqual(error, ???);
			}


			function categorizeColor(color) {
				var result;
				switch (color) {
					case 'red':
					case 'yellow':
					case 'blue':
						result = 'Primary color: ' + color;
						break;
					case 'or':
					case 'green':
					case 'violet':
						result = 'Secondary color: ' + color;
						break;
					case 'black':
					case 'white':
						result = 'Not a color';
						break;
					default:
						throw 'Illegal argument: ' + color;
				}
				return result;
			}

			//assert.strictEqual(categorizeColor('violet'), ???);

			function compare(x, y) {
				switch (true) {
					case x < y:
						return -1;
					case x === y:
						return 0;
					default:
						return 1;
				}
			}
			//assert.strictEqual(compare(???), 4);

		});



	});


});