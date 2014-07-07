describe('Chapter 14 Exception Handling', function() {
	describe('Exception Handling in JavaScript', function() {
		it('throw a String Error', function() {
			var somethingBadHappened = true;

			//somethingBadHappened = ???; //Change the value to avoid the exception

			/*
			 if (somethingBadHappened) {
			 throw 'Something bad happened';
			 }
			 */
		});

		it('throw a Object Error', function() {
			var somethingBadHappened = true;

			//somethingBadHappened = ???; //Change the value to avoid the exception

			/*
			 if (somethingBadHappened) {
			 throw new Error('Something bad happened');
			 }
			 */
		});

		it('try-catch-finally', function() {
			function throwIt(exception) {
				try {
					throw exception;
				} catch (e) {
					assert.strictEqual(e, 'An error happened');
				}
			}

			//throwIt(???);

		});

		it('try-catch-finally 2', function() {
			function throwIt() {
				var count = 0;
				try {
					count++;
					throw count; //Wierd but possible
					count = 5;
				} catch (e) {
					count += e;
				} finally {
					count++;
					return count;
				}
				count = 10;
				return count;
			}

			//assert.strictEqual(throwIt(), ???);

		});

		it('try-catch-finally 3', function() {
			function throwIt(param) {
				var count = 0;
				try {
					count++;
					if (param) {
						throw param;
					}
					count = 3;
				} catch (e) {
					count += e + 5;
				} finally {
					count += 9;
				}
				count++;
				return count;
			}
			//assert.strictEqual(throwIt(), 13);
			//assert.strictEqual(throwIt(???), 116);
		});

		it('try-catch-finally 4', function() {
			var count = 0;
			function throwIt() {
				try {
					count++;
					return count;
				} finally {
					count += 3;
				}
			}

			//assert.strictEqual(throwIt(), ???);
			//assert.strictEqual(throwIt(), ???); //finally is executed after the function has returned
			//assert.strictEqual(count, ???);

		});
	});

	describe('Error Constructors', function() {
		it('Undeclared variable error', function() {
			/* foo is not declared. If you uncomment the line below, a runtime error will occur.
			 * Solve by surrounding it with a try-catch block
			 * Do not do this in production. Variables should always be declared.
			*/
			//var bar = foo + 1;
		});
	});

});
