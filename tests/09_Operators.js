var assert = chai.assert;

describe('Chapter 09 Operators', function() {
	
	it('Operators and Objects', function() {
		var a = [1, 2];
		var b = [3];        
		//assert.strictEqual(a + b, ???) //Array.prototype.toString() method is called
		//assert.strictEqual(String(a), ???)
		
	});
	
	it('Assignment Operators', function() {
		var a = 3;
		//assert.strictEqual(a, ???);
		var bar = {};
		bar.foo = {};
		bar.foo.baz = 4;
		//assert.strictEqual(bar.foo.baz, ???);
		bar.foo['baz'] = 7; //Equivalent to bar.foo.baz = 7
		//assert.strictEqual(bar.foo.baz, ???);
		//bar[???][???] = 6; //<- Complete this
		//assert.strictEqual(bar.foo.baz, 6); //Uncoment
		//assert.strictEqual(bar[???].baz, 6);
		
		var key = 'foo';
		bar[key].baz = 10;
		assert.strictEqual(bar[key].baz, 10);
		
		//key = ???; //complete this
		//assert.strictEqual(bar['foo'][key], 10);
		
		var b = 4;
		b += 5;
		//assert.strictEqual(b, ???);
		//b = b + ???;
		//assert.strictEqual(b, 12);
		var c = 3;
		//c ??? 4;
		//assert.strictEqual(c, 12);
		
    });
	
	it('Equality Operators: === Versus ==', function() {
		assert.isTrue(3 === 3); //Strict equal <- Preferred. 
		assert.isTrue(3 == 3); //Non strict equal <- force type coercion
		
		//assert.is???('abc' === 'abc');
		//assert.is???('abc' == 'abc');
		
		assert.isFalse(3 === '3'); //Non coercion
		assert.isTrue(3 == '3'); //Coercion
		
		assert.isTrue(undefined === undefined);
		assert.isTrue(null === null);
		//assert.is???(NaN === NaN); //Remember, JavaScript is wierd
		assert.isTrue(typeof NaN === 'number');
		assert.isTrue(isNaN(NaN));
		//assert.is???({} === {});
		//assert.is???({} == {}); //With object there is no coercion
		//assert.is???(new String(3) == new String(3));
		//assert.is???('3' == new String(3)); //There is coercion when compare primitives with objects
		//assert.isTrue(3 ??? new String(3));
		var bar = {}, foo = {}, baz = bar;
		//assert.is???(bar == foo);
		//assert.is???(bar == baz);
		//assert.is???([] == []);
		
		assert.isTrue(null == undefined);
		//assert.is???('' == 0); //Both are flasy <- coercion
		//assert.is???('' === 0); <- Not coercion
		//assert.is???(null == 0); //JavaScript quirks
		//assert.is???(2 == true); Both are tuthy
		//assert.is???(2 === true);
		//assert.is???('abc' === true);
		//assert.is???({} == '[object Object]'); //Object.prototype.toString() is called
	});
	
	it('Strict vs non strinct Chai assertions', function() {
		assert.strictEqual(1, 1);
		assert.notStrictEqual('1', 1);
		assert.equal('1', 1);
		assert.notEqual(2, 1);
		
		assert.isTrue(true);
		assert.isTrue(1 === 1);
		assert.isTrue(1 == 1);
		assert.isFalse(false);
		assert.ok(true);
		assert.ok(3);
		//assert.ok(???);
		assert.notOk(false);
		assert.notOk(0);
		assert.notOk(null);
		assert.notOk(undefined);
		//assert.notOk(???);
		
	});
	
	it('Inequality Operators: !== Versus !=', function() {
		//assert.is???(2 != true); Both are tuthy
		//assert.is???(2 !== true);
		
		//assert.is???(3 !== '3');
		//assert.is???(3 != '3');
		
		//assert.is???('' != false);
		//assert.is???('' !== false);
	});
	
	it('Ordening Operators: <, <=, >, >=', function() {
		//assert.is???(2 <= 3);
		//assert.isFalse(2 ??? 3);
		
		//assert.is???('apple' < 'orange');
		//assert.isTrue('2' ??? '10');
		//assert.is???(2 < '10');
	});
	
	
	it('The Plus Operator (+)', function() {
		//assert.strictEqual(1 + 1, ???);
		//assert.equal('1' + 1, ???);
		//assert.equal(1 + '1', ???);
		//assert.equal('1' + ???, 12);
		//assert.equal(1 + [2, 3], ???);
		
	});
	
	it('Operators for Booleans and Numbers', function() {
		//assert.strictEqual(true || false, ???);
		//assert.strictEqual(true && false, ???);
		//assert.strictEqual(true || false && true, ???);
		
		//assert.strictEqual(true || 'abc', ???);
		//assert.strictEqual(false || 'abc', ???);
		//assert.strictEqual('' || 'abc', ???);
		//assert.strictEqual(0 || 'abc', ???);
		//assert.strictEqual('123' || 'abc', ???); //This can use to assign a default value
		
		//How can I assign a default value?
		
		//a) The classic way
		var x;
		if (x === undefined) {
			x = 'abc';
		}
		//assert.strictEqual(x, ???);
		
		if (x === undefined) {
			x = 'def';
		}
		//assert.strictEqual(x, ???);
		
		//b) A little more elegant
		var x;
		if (!x) {
			x = 'abc';
		}
		//assert.strictEqual(x, ???);
		
		if (x === undefined) {
			x = 'def';
		}
		//assert.strictEqual(x, ???);
		
		
		//c) The JavaScript way
		var x;
		x = x || 'abc';
		//assert.strictEqual(x, ???);
		
		x = x || 'def';
		//assert.strictEqual(x, ???);
		
		x = x && 'xyz'; //You can do this too but best avoided
		//assert.strictEqual(x, ???);
		
		x = 0 || 23;
		//assert.strictEqual(x, ???);
		var y = false;
		x = y || 23;
		//assert.strictEqual(x, ???);
		
		x = 5;
		//assert.strictEqual(x++, ???);
		//assert.strictEqual(x++, ???);
		
	});
	
	it('Special Operators', function() {
		var bar = 10;
		var x;
		
		if (bar > 8) {
			x = 'foo';
		} else {
			x = 'baz';
		}
		//assert.strictEqual(x, ???);
		
		x = undefined;		
		bar > 8 ? x = 'foo' : x = 'baz'; //This is the sort way
		//assert.strictEqual(x, ???);
		
		var y = 0;
		x = 5;
		var y = (++x, 10);
		//assert.strictEqual(x, ???);
		//assert.strictEqual(y, ???);
		
	});
	
	it('typeof: Categorizing Primitives', function() {
		//assert.strictEqual(typeof '', ???);
		//assert.strictEqual(typeof 123, ???);
		//assert.strictEqual(typeof //, ???);
		//assert.strictEqual(typeof function() {}, ???);
		//assert.strictEqual(typeof [], ???);
		//assert.strictEqual(typeof {}, ???);
		//assert.strictEqual(typeof undefined, ???);
		//assert.strictEqual(typeof null, ???); //Pitfall
		
		//Checking whether a variable exists
		var foo;
		//assert.strictEqual(typeof foo, ???);
		//assert.strictEqual(typeof bar, ???); // How can we distinguish the two situations?
		
		//assert.strictEqual(foo, ???); // Check is foo is undefined
		try {
			assert.strictEqual(bar, undefined); //Fails because bar is not defined. We can not this to check if bar exists
			assert.fail('This would not happen');
		} catch (err) {
			
		}
		
		var global;
		if (typeof window !== 'undefined') {
			global = window;
		} else {
			global = exports;
		}
		
		assert.isFalse('bar' in global);
		
	});
	
	it('instanceof: Checking Whether an Object Is an Instance of a Given Constructor', function() {
		assert.isTrue({} instanceof Object);
		assert.isTrue([] instanceof Array);
		//assert.isTrue(typeof {} === ???); typeof and instanceof are differents operators
		//assert.is???([] instanceof Object); // All object inherits from Object. instanceof is works polymorphically
		
		//assert.is??(undefined instanceof Object);
		//assert.is??(null instanceof Object); //JavaScript pitfall
		
	});
	
	
});