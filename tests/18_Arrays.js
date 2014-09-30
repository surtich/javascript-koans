describe('Chapter 18 Arrays', function() {
	describe('Overview', function() {
		it('first example', function() {
			var arr = ['a', 'b', 'c']; // array literal
			//assert.strictEqual(???, arr[0]); // get element 0
			arr[0] = 'x'; // set element 0
			//assert.deepEqual(???, arr);
		});

		it('We can use the array property length to remove and append elements', function() {
			var arr = ['a', 'b', 'c'];
			//assert.strictEqual(???, arr.length);

			arr.length = 2; // remove an element
			//assert.deepEqual(???, arr);

			arr[arr.length] = 'd'; // append an element
			//assert.deepEqual(???, arr);
		});

		it('Empty an array', function() {
			var arr = ['a', 'b', 'c'];

			arr.length = 0;
			//assert.deepEqual(???, arr);
		});


		it('Empty sared arrays', function() {
			var arr1 = ['a', 'b', 'c'];
			var arr2 = arr1;

			arr1.length = 0;
			//assert.deepEqual(???, arr2); // Works

			arr1 = ['a', 'b', 'c'];
			arr2 = arr1;

			arr1 = []; //Change the reference
			//assert.deepEqual(???, arr2); // arr2 does not change
		});

		it('We can use splice() and push() methods to remove and append elements', function() {
			var arr = ['a', 'b', 'c'];
			//assert.strictEqual(???, arr.length);

			arr.splice(0, 1); // remove the first element
			//assert.deepEqual(???, arr);

			arr.push('d'); // append an element at the end
			//assert.deepEqual(???, arr);
		});

		it('We can not use delete to remove elements', function() {
			var arr = ['a', 'b', 'c'];
			//assert.strictEqual(???, arr.length);

			delete arr[1]; // makes a hole
			//assert.strictEqual(???, arr.length); // does not update length
			//assert.deepEqual(???, arr);
		});

		it('Arrays Are Maps, Not Tuples', function() {
			var arr = [];

			arr[0] = 'a';
			arr[2] = 'b'; //hole
			//assert.strictEqual(???, arr.length);
			//assert.deepEqual(???, arr);
		});

		it('Arrays Can Also Have Properties', function() {
			var arr = ['a', 'b'];

			arr.foo = 123;

			//assert.strictEqual(???, arr.length);
			//assert.strictEqual(???, arr.foo);
			//assert.deepEqual(???, arr);
		});

		it('The in Operator an Indices', function() {
			var arr = ['a', , 'b'];

			//assert.is???(0 in arr);
			//assert.is???(1 in arr);
		});

		it('length', function() {
			var arr = [];

			arr[400] = 12;
			//assert.strictEqual(???, arr.length); //length property is the highest + 1 index in an array:

		});

		it('Sparse Arrays Versus Dense Arrays', function() {
			var sparse = [, , 'c'];
			var dense = [undefined, undefined, 'c'];

			//assert.strictEqual(???, sparse.length);
			//assert.strictEqual(???, dense.length);

			//but...

			//assert.is???(0 in sparse);
			//assert.is???(0 in dense);

		});

		it('Array.isArray', function() {

			//assert.is???(Array.isArray([]));
			//assert.is???(Array.isArray(123));
		});

	});

	describe('Creating Arrays', function() {
		it('Array literal', function() {
			//assert.strictEqual([ 'a', 'b', 'c' ], arr.length);

			//assert.strictEqual([ 'a', 'b', 'c', ], arr.length); // Trailling commas do not increment the array size	

			//assert.strictEqual([ 'a', 'b', , 'c'], arr.length); // Arrays can have holes

		});

		it('The Array Constructor', function() {
			var arr = new Array(2);
			//assert.strictEqual(???, arr.length);
			//assert.deepEqual(???, arr);

			arr = new Array('a', 'b', 'c'); //// The same as ['a', 'b', 'c']
			//assert.strictEqual(???, arr.length);
			//assert.deepEqual(???, arr);
		});
	});

	describe('Which Operations Ignore Holes, and Which Consider Them?', function() {
		it('forEach() skips holes', function() {

			var sum = 0;
			[0, , , 1, , , , 2].forEach(function(value) {
				sum += value;
			});

			//assert.strictEqual(???, sum);
		});

		it('every() also skips holes', function() {

			var areAllNumbers = [0, , , 1, , , , 2].every(function(value) {
				return typeof value === 'number';
			});

			//assert.strictEqual(???, areAllNumbers);
		});

		it('map() skips, but preserves holes', function() {

			var doubles = [0, , 1, 2].map(function(value) {
				return value * 2;
			});

			//assert.deepEqual(???, doubles);
		});

		it('filter() eliminates holes', function() {

			var odds = [0, , 1, , , , 2, 3].filter(function(value) {
				return value % 2 !== 0;
			});

			//assert.deepEqual(???, odds);
		});

		it('sort() preserves holes while sorting', function() {

			var arr = [0, 2, , 1, 4, 3];
			arr.sort(); //sort() modifies the original array
			//assert.deepEqual(???, arr);
		});


		it('removing holes from arrays', function() {

			var desnse = [0, , 1, , , , 2, 3].filter(function(value) {
				return true;
			});

			//assert.deepEqual(???, dense);
		});
	});

	describe('Array Prototype Methods', function() {
		describe('Adding and Removing Elements (Destructive)', function() {
			it('Array.prototype.shift()', function() {
				var arr = ['a', 'b'];
				//assert.strictEqual(???, arr.shift()); //Removes the element at index 0 and returns it. The indices of subsequent elements are decremented by 1
				//assert.deepEqual(???, arr);
			});

			it('Array.prototype.unshift(elem1?, elem2?, ...)', function() {
				var arr = ['c', 'd'];
				//assert.strictEqual(???, arr.unshift('a', 'b')); //Prepends the given elements to the array and returns the new length
				//assert.deepEqual(???, arr);
			});

			it('Array.prototype.pop()', function() {
				var arr = ['a', 'b'];
				//assert.strictEqual(???, arr.pop()); //Removes the last element of the array and returns it
				//assert.deepEqual(???, arr);
			});

			it('Array.prototype.push(elem1?, elem2?, ...)', function() {
				var arr = ['a', 'b'];
				//assert.strictEqual(???, arr.push('c', 'd')); //Adds the given elements to the end of the array. It returns the new length
				//assert.deepEqual(???, arr);
			});

			it('Array.prototype.splice(start, deleteCount?, elem1?, elem2?, ...)', function() {
				var arr = ['a', 'b', 'c', 'd'];
				//assert.deepEqual(???, arr.slice(1, 2, 'X')); //Starting at start, removes deleteCount elements and inserts the elements given. In other words, you are replacing the deleteCount elements at position start with elem1, elem2, and so on. The method returns the elements that have been removed
				//assert.deepEqual(???, arr);
			});
		});

		describe('Sorting and Reversing Elements (Destructive)', function() {

			it('Array.prototype.reverse()', function() {
				var arr = ['a', 'b', 'c', 'd'];
				//assert.deepEqual(???, arr.reverse()); //Reverses the order of the elements in the array and returns a reference to the original (modified) array
				//assert.deepEqual(???, arr);
			});

			it('Array.prototype.sort(compareFunction?)', function() {
				var arr = ['banana', 'apple', 'pear', 'orange'];
				//assert.deepEqual(???, arr.sort()); //Sorts the array and returns it
				//assert.deepEqual(???, arr);

				//assert.deepEqual(???, [-1, -20, 7, 50].sort()); //Keep in mind that sorting compares values by converting them to strings, which means that numbers are not sorted numerically

				/*
				 assert.deepEqual([], [-1, -20, 7, 50].sort(function(a, b) {
				 ???; //implement this
				 })); //You can fix this by providing the optional parameter compareFunction, which controls how sorting is done
				 */

			});
		});

		describe('Concatenating, Slicing, Joining (Nondestructive)', function() {
			it('Array.prototype.concat(arr1?, arr2?, ...)', function() {
				var arr = ['a', 'b'];
				//assert.deepEqual(???, arr.concat('c', ['d', 'e'])); //Creates a new array that contains all the elements of the receiver, followed by all the elements of the array arr1, and so on. Flats the result
				//assert.deepEqual(???, arr);
			});
			it('Array.prototype.slice(begin?, end?)', function() {
				var arr = ['a', 'b', 'c', 'd'];
				//assert.deepEqual(???, arr.slice(1, 3)); //Copies array elements into a new array, starting at begin, until and excluding the element at end
				//assert.deepEqual(???, arr.slice(1)); //If end is missing, the array length is used
				//assert.deepEqual(???, arr.slice()); //If both indices are missing, the array is copied
				//assert.deepEqual(???, arr.slice(1, -1)); //If either of the indices is negative, the array length is added to it. Thus, -1 refers to the last element, and so on
				//assert.deepEqual(???, arr.slice(-2));
				//assert.deepEqual(???, arr);
			});
			it('Array.prototype.join(separator?)', function() {
				var arr = ['a', 'b', 'c', 'd'];
				//assert.deepEqual(???, arr.join('-')); //Creates a string by applying toString() to all array elements and putting the string in separator between the results
				//assert.deepEqual(???, arr.join()); //If separator is omitted, ',' is used
				//assert.deepEqual(???, arr.join('')); //Empty separator
				//assert.deepEqual(???, arr);
			});
		});

		describe('Searching for Values (Nondestructive)', function() {
			it('Array.prototype.indexOf(searchValue, startIndex?)', function() {
				//assert.strictEqual(???,  [ 3, 1, 17, 1, 4 ].indexOf(1)); //Searches the array for searchValue, starting at startIndex. It returns the index of the first occurrence or –1 if nothing is found
				//assert.strictEqual(???,  [ 3, 1, 17, 1, 4 ].indexOf(1, 2));
				//assert.strictEqual(???,  [ 3, 1, 17, 1, 4 ].indexOf(20));
			});
			it('Array.prototype.lastIndexOf(searchValue, startIndex?)', function() {
				//assert.strictEqual(???,  [ 3, 1, 17, 1, 4 ].lastIndexOf(1)); //Searches the array for searchElement, starting at startIndex, backward
			});
		});

		describe('Iteration (Nondestructive)', function() {
			it('Array.prototype.forEach(callback, thisValue?)', function() {
				var arr = ['apple', 'pear', 'orange'];
				arr.forEach(function(elem, index) {
					//assert.isTrue(elem === arr[???]);
				}); //Iterates over the elements of an array
			});

			it('Array.prototype.every(callback, thisValue?)', function() {
				function isEven(x) {
					return x % 2 === 0
				}

				//assert.is???([ 2, 4, 6 ].every(isEven)); Returns true if the callback returns true for every element. It stops iteration as soon as the callback returns false

				//assert.is???([ 2, 4, 7 ].every(isEven));
			});

			it('Array.prototype.some(callback, thisValue?)', function() {
				function isEven(x) {
					return x % 2 === 0
				}

				//assert.is???([ 2, 5, 6 ].some(isEven)); //Returns true if the callback returns true for at least one element. It stops iteration as soon as the callback returns true

				//assert.is???([ 1, 3, 7 ].some(isEven));
			});
		});

		describe('Transformation Methods', function() {
			it('Array.prototype.map(callback, thisValue?)', function() {
				//assert.deepEqual(???, [ 1, 2, 3 ].map(function (x) { return 2 * x })); //Each output array element is the result of applying callback to an input element
			});
			it('Array.prototype.filter(callback, thisValue?)', function() {
				//assert.deepEqual(???, [ 1, 0, 3, 0 ].filter(function (x) { return x !== 0 })); //The output array contains only those input elements for which callback returns true
			});
		});

		describe('Reduction Methods', function() {
			it('Array.prototype.reduce(callback, initialValue?)', function() {
				function add(prev, cur) {
					return prev + cur;
				}
				//assert.deepEqual(???, [ 1, 2, 3 ].reduce(sum)); //Iterates from left to right and invokes the callback as previously sketched. The result of the method is the last value returned by the callback
				//assert.deepEqual(???, [ 1, 2, 3 ].reduce(sum, 20));
			});
			it('Array.prototype.reduceRight(callback, initialValue?)', function() {
				function printArgs(prev, cur) {
					return prev + cur;
				}
				//assert.deepEqual(???, [ 'a', 'b', 'c' ].reduceRight(printArgs)); //Works the same as reduce(), but iterates from right to left
			});
		});

		describe('Best Practices: Iterating over Arrays', function() {
			it('for loop', function() {
				var arr = [1, 2, 3];
				var arr2 = [];
				for (var i = 0; i < arr.length; i++) {
					arr2.push(arr[i]);
				}
				//assert.deepEqual(???, arr2);
			});
			
			it('forEach() method', function() {
				var arr = [1, 2, 3];
				var arr2 = [];
				arr.forEach(function(value) {
					arr2.push(value);
				});
				//assert.deepEqual(???, arr2);
				
				/*
				 * Do not use the for-in loop (see “for-in” on page 148) to iterate over arrays. It iterates
				 *	over indices, not over values. And it includes the keys of normal properties while doing
				 *	so, including inherited ones
				 */
			});
		});
	});
});
