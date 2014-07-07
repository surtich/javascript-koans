describe('Chapter 12 Strings', function() {

	it('Quotes and escaping', function() {
		assert.strictEqual('abc', "abc"); //You can use single or double quotes
		assert.strictEqual('John\'s cat', "John's cat"); //You can avoid to escape quotes
	});

	it('Converting to String', function() {
		//assert.strictEqual(String(123), ???); //Preferred: Invoked as a function, not as a constructor
		//assert.strictEqual(123+'', ???);
		//assert.strictEqual(123.toString(), ???); //Does not work for undefined and null!
		//assert.strictEqual(String(false), ???);
		assert.strictEqual(String({first: 'John', last: 'Doe'}), '[object Object]'); //toString() is called
		//assert.strictEqual(String([1, 2, 3], ???); //Why?
		var foo = false;
		//assert.???(String(foo), Boolean(String(foo))); //Pitfall: conversion is not invertible: Boolean('false') === true
	});

	it('Comparing Strings', function() {
		assert.isTrue('B' > 'A');
		//assert.is???('B' > 'a'); //They’re case-sensitive
		//assert.isTrue('b' ??? 'á'); //They don’t handle umlauts and accents well
		//assert.isTrue('B'.localeCompare('a') > 0); //Fix the problem
	});

	it('Concatenating Strings', function() {
		assert.strictEqual('B' + 'A', 'BA');
		var foo = 'abc', bar = 'xyz';
		//assert.strictEqual(foo + ' ' + bar, ???);
		foo += '123';
		//assert.strictEqual(foo, ???);
		var names = ['John', 'Michael', 'Rose'];
		assert.strictEqual(names.join('-'), 'John-Michael-Rose'); //Using Array.prototype.join(separator) method
		//assert.strictEqual(names.join(???), 'John_Michael_Rose');
	});

	it('The Function String', function() {
		//assert.strictEqual(String(123), ???);
		//assert.strictEqual(typeof String('abc'), ???);
		//assert.strictEqual(typeof new String('abc'), ???);
		assert.strictEqual(String('abc'), String('abc'));
		//assert.???(new String('abc'), new String('abc'));
		//assert.isTrue(new String('abc') ??? String('abc'));
	});

	it('String Constructor Method', function() {

		assert.strictEqual(String.fromCharCode(97, 98, 99), 'abc');
		//assert.strictEqual(String.fromCharCode(97, 98, 99, ???), 'abcf');

		var numbers = [97, 98, 99];
		assert.strictEqual(String.fromCharCode.apply(null, numbers), 'abc'); //Function.prototype.apply() allow us to pass an array to a function as separated params
		//assert.strictEqual(String.fromCharCode.???(null, [100, 101]), ???);

		assert.strictEqual('a'.charCodeAt(0), 97);
		//assert.strictEqual('abc'.charCodeAt(0), ???);
		//assert.strictEqual('abc'.charCodeAt(1), ???);
	});

	it('String Instance Property length', function() {
		//assert.strictEqual('abc'.length, ???);
		var foo = 'abc';
		//assert.strictEqual(foo.length, ???);
		foo.length = 5;
		//assert.strictEqual(foo.length, ???); //Inmutable
	});

	describe('String Prototype Methods', function() {

		it('charAt', function() {
			//assert.strictEqual('abc'.charAt(0), ???);
			//assert.strictEqual('abc'[0], ???); //Does the same

			assert.strictEqual('abc'.charAt(10), '');
			assert.strictEqual('abc'[10], undefined); //Well, not exactly the same

			var foo = "qwerty";
			//assert.strictEqual(foo.?, 'y');
			foo[10] = 'W';
			//assert.strictEqual(foo, ???); //It is inmutable
			foo = "xyz";
			//assert.strictEqual(foo, ???); //Do you understand what immutable mean?

		});

		it('slice', function() {
			var bar = 'qwerty';
			//assert.strictEqual(bar.slice(1), ???);
			//assert.strictEqual(bar.slice(2), ???);
			//assert.strictEqual(bar.slice(bar.length - 1), ???);
			//assert.strictEqual(bar.slice(???), 'r');
			//assert.strictEqual(bar.slice(1, 3), ???);
			//assert.strictEqual(bar.slice(1, bar.length), ???);
			//assert.strictEqual(bar.slice(-2), ???);
			//assert.strictEqual(bar.slice(-2), ???);
		});

		it('split', function() {
			assert.sameMembers('a,b,c'.split(','), ['a', 'b', 'c']); //Note we use a new Chai assertion
			//assert.sameMembers('a,b.c'.split(','), ???);
			//assert.sameMembers('a,b.c'.split('.,'), ???);
			assert.sameMembers('a,b.c'.split(/,|\./), ['a', 'b', 'c']); //We can achieve this qith a regular expression
			assert.sameMembers('a,b,c'.split(',', 2), ['a', 'b']); //Limits the results
			//assert.sameMembers('abc'.split(???), ['a','b','c']); //How could we do this?
		});

		it('transform methods', function() {
			var text = '  Hello World !  ';
			//assert.strictEqual(text.trim(), ???);
			assert.strictEqual('Hello'.concat(' ').concat('World!'), 'Hello World!');
			//assert.strictEqual('  Hello'.concat(' World!    ').trim(), ???);
			assert.strictEqual('JAVIER PÉREZ ARTEAGA'.toLowerCase(), 'javier pérez arteaga');
			//assert.strictEqual('aeiou'.???, 'AEIOU');
		});

		it('search method', function() {
			var text = 'The indexOf() method returns the index within the calling String object of the first occurrence of the specified value';
			//assert.strictEqual(text.indexOf('method'), ???);
			//assert.strictEqual(text.indexOf(' '), 3);
			//assert.strictEqual(text.indexOf(???), -1);
			//assert.strictEqual(text.indexOf(???, 3), 7);
			//assert.strictEqual(text.lastIndexOf(' '), ???); //Do this without count the characters

			assert.isTrue('banana'.localeCompare('apple') > 0);
			///assert.isTrue('red'.localeCompare('yellow') ??? 0);
			///assert.isTrue('Red'.localeCompare('yellow') ??? 0);
		});


		it('Exercise', function() {

			var fullName = 'JAVIER PÉREZ';
			//var lastName = ???;
			//var firstLetter = ???;
			//var restLetters = ???;
			//assert.strictEqual(firstLetter??? + restLetters???, 'Pérez');
		});

	});


	it('Test, Match, and Replace with Regular Expressions', function() {
		assert.strictEqual('-yy-xxx-y-'.search(/x+/), 4);

		var match = '-abb--aaab-'.match(/(a+)b/);
		assert.sameMembers(match, ['ab', 'a']);

		match = '-abb--aaab-'.match(/(a+)b/g);
		assert.sameMembers(match, ['ab', 'aaab']);
		
		assert.strictEqual('iixxxixx'.replace('i', 'o'), 'oixxxixx');
		//assert.strictEqual('iixxxixx'.replace(/i/, 'o'), ???);
		//assert.strictEqual('iixxxixx'.replace(???, 'o'), 'ooxxxoxx');
		assert.strictEqual('iixxxixx'.replace(/i+/g, '($&)'), '(ii)xxx(i)xx');
		assert.strictEqual('iixxxixx'.replace(/(i+)x+/g, '($1)'), '(ii)(i)');
		
		function toUpperCase(all) {
			return '('+all.toUpperCase()+')' ;
		}

		assert.strictEqual('axbbyyxaab'.replace(/[ab]+/g, toUpperCase), '(A)x(BB)yyx(AAB)'); //Do not worry if you do not understand yet

		



	});

});