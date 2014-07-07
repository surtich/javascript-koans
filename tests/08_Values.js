describe('Chapter 08 Values', function() {

	it('Some ways to test', function() {
		var check = true;

		assert.typeOf(check, 'boolean', 'type of check is boolean');

		assert.strictEqual(typeof check, 'boolean', 'Another way to test');

		assert.isTrue(typeof check === 'boolean', 'One more way');

		//assert.isFalse(typeof check === 'boolean'); //Why is not working? Fix it without change de validator 

	});

	it('ECMAScript types', function() {

		var check = true;
		//assert.typeOf(check, ???);
		check = 'false'; //In JavaScript we can change dinamically the type
		//assert.strictEqual(typeof check, ???);

		var number = 3;
		//assert.isTrue(typeof check === ???);

		var me = {};
		assert.typeOf(me, 'object'); //We can create objects this way
		me = Object.create({});
		//assert.isTrue(typeof me === ???); //Or this way

		var persons = null;
		//assert.strictEqual(typeof persons, ???); //This is a mistake in JavaScript design: null should be an object type but ...

		var name = 'John';
		//assert.strictEqual(typeof name, ???);

		var you = undefined; //undefined means no value
		//assert.strictEqual(typeof you, ???);
		
		//assert.is???(typeof persons === typeof you); //Weird, isn't it?

		var we;
		//assert.strictEqual(typeof we, ???); //Non initialized variables are undefined (value and type)
		//assert.strictEqual(we, ???); //Do you see the difference between the two assertions?

		//???
		//assert.strictEqual(typeof they, 'undefined'); //Warning: Use non declared variables cause a runtime error. Declare they before use it

		var date = {
			year: 2017 //Objects can have properties
		};
		//assert.strictEqual(typeof date, ???);		
		//assert.strictEqual(typeof date.year, ???);		
		//assert.strictEqual(typeof date.month, ???); //Very important: this is ok. Undeclared porperties behave differently than undeclared variables		
		assert.isFalse('month' in date); //Is better use in operator to check if the property exists		
		date.month = 7;
		//assert.is???('month' in date);; //You can dynamically add properties to objects		
		delete date.month;
		//assert.is???('month' in date) ; //Or you can delete properties at runtime
		date.day = 20;
		assert.isTrue('day' in date);
		date.day = undefined; //To delete a property, do not do this. See why ->		
		assert.strictEqual(date.day, undefined);
		assert.strictEqual(typeof date.day, 'undefined');
		//assert.is???('day' in date);

		//assert.strictEqual(3 * 4, ???);
		//assert.strictEqual('3' * '4', ???); //Do you see the coercion?		
		//assert.strictEqual(3 + 4, ???);
		//assert.strictEqual('3' + '4', ???); //Warning! the + operator is ok with strings. There is no coercion
	});

	it('Primitive values versus types', function() {
		var obj1 = {};
		var obj2 = {};
		assert.notStrictEqual(obj1, obj2); //obj1 and obj2 are diffrent references
		obj2 = obj1;
		//assert.???(obj1, obj2); //Now they are the same reference

		var number1 = 123;
		var number2 = 123;
		//assert.???(number1, number2); //In contrast, all primitive values encoding the same value are considered the same

		var str = 'abc';
		//assert.strictEqual(str.length === ???);
		str.length = 1;
		//assert.strictEqual(str.length === ???); //With primitive variables, properties can’t be added, or removed
		str.foo = 'bar';
		//assert.is???('foo' in str);
	});

	it('Objects', function() {
		
		var person = {
			//firstName: ???
		};		
		//assert.strictEqual(person.firstName === 'Jane');		
		//person.??? = 'Doe';		
		//assert.strictEqual(person.lastName === 'Doe');		
		
		var persons = []; //Empty array		
		//assert.strictEqual(typeof persons, ???); //Arrays are just objects
		
		var fruits = [ 'apple', 'banana', 'cherry' ];		
		//assert.strictEqual(fruits.length, ???);
		//assert.strictEqual(fruits[0], ???);
		//assert.strictEqual(fruits[2], ???);
		//assert.strictEqual(fruits[4], ???); //Whatch this!
		
		var number1 = 20; //Literal form <- You'll almost always use this
		var number2 = 20;
		//assert.strictEqual(number1 + number2, ???);
		//assert.is???(number1 === number2);
		
		number1 = new Number(20); //Wrapper object form
		number2 = new Number(20);
		//assert.strictEqual(number1 + number2, ???); //Looks similar, but ...
		//assert.is???(number1 === number2); //They are objects. Do you see the difference?
		
		var str = '123';
		//assert.strictEqual(typeof Number(srt), ???); //Convert to primitive
		//assert.strictEqual(str + str, ???);
		////assert.strictEqual(2 * str, ???);
		//assert.strictEqual(Number(str) + Number(str), 246);
		
		var number = 123;
		//assert.strictEqual(typeof ???(number), 'string'); //Convert to primitive
		
		//assert.strictEqual(typeof new String('123'), ???);
		//assert.strictEqual(String(123), ???); //Above statement and this are different
		
		var bool = new Boolean(true);
		//assert.strictEqual(typeof bool.valueOf(), ???); //Unwrapping object to primitive
		
		assert.strictEqual('abc'.charAt, String.prototype.charAt); //Primitives don’t have methods and borrow them from wrappers
	
	});
	
	it('Functions', function() {
		
		function returnFoo(x) {
			return x.foo;
		}
		
		//assert.strictEqual(typeof returnFoo, ???); Interesting: Funtions has thier own type.You will see the importance of this later
		
		var bar = {
			foo: 3
		};		
		//assert.strictEqual(returnFoo(???), 3); 
		
		var baz = {};
		//assert.strictEqual(returnFoo(baz), ???);
		
		//??? <- Your work is expected here
		//assert.strictEqual(returnFoo(bar), undefined); //How can you achieve this...
		//assert.strictEqual(typeof bar.foo, undefined); //...and this?
		
		assert.strictEqual(returnFoo(true), undefined); //Do you understand why?
		
		try {
			returnFoo(null);
			assert.fail('This should not happen');
		} catch(error) {
			assert.isTrue(true, 'null'); //null and undefined behave differently from other primitive types
		}
		
		function x() {}
		//assert.strictEqual(x(), ???); //functions implicitly return undefined if nothing has been explicitly returned

	});
	
	it('Type Coercion', function() {
		//assert.strictEqual('3' * '4', ???);
		//assert.strictEqual(3 + ' times', ???);
		
		var formData = { width: '100' };
		var w = formData.width;
		var outer = w + 20;
		//assert.strictEqual(outer, ???);
		
		assert.isFalse(Boolean(0));
		//assert.is???(Boolean(undefined));
		//assert.is???(Boolean(null));
		//assert.is???(Boolean(NaN));
		//assert.is???(Boolean('')); //They all are falsy values: their coercion is to false
		//assert.is???(Boolean(false)); //Wierd, isn't it? This is a pitfall. In any way, 'false', is a falsy value
		
		//assert.is???(Boolean(3));
		////assert.is???(Boolean('abc'));
		//assert.is???(Boolean({}));
		//assert.is???(Boolean([])); //The rest values are truthy values
		//assert.is???(Boolean('false')); //Even this
		
		assert.isTrue(isNaN(Number('John')));
		assert.typeOf(NaN, 'number'); //NaN (Not a Number) is a number. Javascript is definitely an odd language. This is nothing. We just started with the quirks.
		assert.isFalse(NaN === NaN); //Look at this! NaN is not equal to itself. Wierd, wierd.
		assert.isTrue(isNaN(NaN));
		assert.isTrue(isNaN(Number(undefined)));
		assert.strictEqual(Number(null), 0); //Could you remenber this?... neither I can
		assert.strictEqual(Number(false), 0);
		//assert.strictEqual(Number(true), ???);
		//assert.strictEqual(Number('123'), ???);
		//assert.is???(isNaN(Number('1+2')));
		//assert.is???(isNaN(Number({})));
		
		assert.strictEqual(String(null), 'null');
		//assert.strictEqual(String(undefined), ???);
		
		//assert.strictEqual(Object('abc'), ???);
		
	});
});