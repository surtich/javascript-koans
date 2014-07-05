var assert = chai.assert;

describe('Chapter 10 Booleans', function() {

	it('Converting to Boolean', function() {
		var check = true;

		//assert.strictEqual(typeof check, ???);

		if (check) {
			check = !check;
		}

		//assert.isTrue(check);

		//assert.is???(Boolean(0));
		//assert.is???(Boolean(1));
		//assert.is???(Boolean(2));
		//assert.is???(Boolean(''));
		//assert.is???(Boolean('abc'));
		//assert.is???(Boolean('false'));

		//assert.is???(Boolean(new Boolean(false))); //Pitfall: all objects are truhty
		//assert.is???(Boolean([]));
		//assert.is???(Boolean({}));

	});

	it('Logical Operators', function() {
		//assert.strictEqual('abc' || 123, ???);
		//assert.strictEqual(false || 123, ???);
		//assert.strictEqual(true && false, ???);
		//assert.strictEqual(false && 'def', ???);
		//assert.strictEqual('' && 'def', ???);
		//assert.strictEqual('abc' && 'def', ???);
	});

	it('Pattern: providing a default value', function() {
		//Example 1: a default for a parameter
		function setAndGetText(text) {
			text = text || 'foo';
			return text;
		}
		//assert.strictEqual(setAndGetText('bar'), ???);
		//assert.strictEqual(setAndGetText(null), ???);
		//assert.strictEqual(setAndGetText(undefined), ???);
		//assert.strictEqual(setAndGetText(0), ???); //Careful: Sometimes this can be an error
		//assert.strictEqual(setAndGetText(''), ???); //Careful: Sometimes this can be an error
		//assert.strictEqual(setAndGetText(), ???); // When no value is passed, text gets to undefined
		//assert.strictEqual(setAndGetText(???), 'baz');

		//Example 2: a default for a property
		function setAndGetTitle(title) {
			var myTitle = title;
			return myTitle;
		}
		
		//Define de book1 object
		//assert.strictEqual(setTitle(book1.title || 'Untitled'), 'Untitled');

		//Define de book2 object
		//assert.strictEqual(setTitle(book2.title || 'Untitled'), 'Book2 title');
		
		//Example 3: a default for the result of a function
		function length(array) {
			return (array || []).length;
		}
		
		//assert.strictEqual(length([]), ???);
		//assert.strictEqual(length([1, 5, 6]), ???);
		//assert.strictEqual(length(null), ???);
		//assert.strictEqual(length(), ???);
		
	});
	
	it('Exercise', function() {
		
		//Complete the function to past the tests
		function foo(bar, baz) {
			//bar = ???;
			//baz = ???;
			return bar + baz;
		}
		
		//assert.strictEqual(foo(1, 3), 4);
		//assert.strictEqual(foo(1), 2);
		//assert.strictEqual(foo(2), 4);
		//assert.strictEqual(foo(), 4);
		//assert.strictEqual(foo(undefined, 5), 10);
		//assert.strictEqual(foo(6), 12);
		
	});
	
	it('Logical Not (!)', function() {
		//assert.is???(!true);
		//assert.is???(!43);
		//assert.is???(!'');
		//assert.is???(!{});
	});
	
	it('The Function Boolean', function() {
		//assert.is???(Boolean(0));
		//assert.is???(Boolean(false));
		//assert.is???(Boolean(new Boolean(false))); //Objects are always true
		//assert.strictEqual(typeof Boolean(false), ???);
		//assert.strictEqual(typeof new Boolean(false), ???);
	});

});