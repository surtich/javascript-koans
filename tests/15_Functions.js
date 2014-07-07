describe('Chapter 15 Functions', function() {
	describe('The Three Roles of Functions in JavaScript', function() {
		it('Nonmethod function ("normal function")', function() {
			function getPerson() {
				return 'John';
			}

			assert.strictEqual(getPerson(), 'John');
		});
		it('Constructor', function() {
			function Person(name) {
				this.name = name;
			}

			//var person = new Person(???);

			//assert.strictEqual(person.name, 'John');
		});
		it('Method', function() {
			function Person(name) {
				var _name = name;

				this.getName = function() {
					return _name;
				};
			}

			var person = new Person('John');

			//assert.strictEqual(person.name, ???);
			//assert.strictEqual(person._name, ???);
			//assert.strictEqual(person.???, 'John');

		});
	});
	describe('Defining Functions', function() {
		it('All functions are objects, instances of Function', function() {
			function foo() {
				return 'bar';
			}

			//assert.strictEqual(foo(), ???);

			var baz = foo();
			//assert.strictEqual(baz, ???);

			//assert.strictEqual(typeof foo, ???); //Functions are primitive data types, just like Strings, Numbers, etc

			foo.x = 'abc'; //Functions are objects. You can add properties to them.			
			//assert.strictEqual(foo.x, ???);

			assert.strictEqual(foo.toString(), 'function foo() {\n\t\t\t\treturn \'bar\';\n\t\t\t}'); //Functions have methods...
			//assert.strictEqual(foo.name, ???); //and properties


			var y = foo; //Interesting: You can asign a function to a variable (remember: functions are data types)
			//assert.strictEqual(typeof y, ???);

			//assert.strictEqual(y(), ???); //y is a function, you can invoke it!
		});

		it('Anonymous function expressions', function() {
			var add = function(x, y) {
				return x + y;
			};
			//assert.strictEqual(add(???, ???), 5);
		});

		it('Named function expressions', function() {
			var fac = function me(n) {
				if (n > 0) {
					return n * me(n - 1); //Named function allow recursion
				} else {
					return 1;
				}
			};

			//assert.strictEqual(fac(4), ???);
		});

		it('Function declarations', function() {
			function add(x, y) {
				return x + y;
			}

			//assert.strictEqual(add(???, ???), 5);
		});
	});

	describe('Hoisting', function() {
		it('Function declarations are completely hoisted', function() {

			//assert.strictEqual(foo(), ???); //foo is hoisted to the begining of the scope
			//assert.strictEqual(typeof foo, ???);

			function foo() { //Function declaration
				return 'bar';
			}

		});

		it('var declarations are hoisted, too, but only the declarations', function() {

			//assert.strictEqual(typeof foo, ???); //Only the declaration is hoisted
			try {
				foo(); //fail foo is not a function
				assert.fail('foo is not a function'); //This can not be executed if foo () fails
			} catch (error) {
				assert.notStrictEqual(error, 'foo is not a function');
			}

			var foo = function() {
				return 'bar';
			};

			//assert.strictEqual(typeof foo, ???);
			//assert.strictEqual(foo(), ???);
		});

		it('Redeclared function declarations', function() {

			if (true) {
				function foo() {
					return 'bar';
				}
			} else {
				function foo() {
					return 'baz';
				}
			}

			//assert.strictEqual(foo(), ???); //Do you understand why?...foo is hoisted and the second declaration replaces the first declaration

		});


		it('Redefined function expressions', function() {

			var foo;
			if (true) {
				foo = function() {
					return 'bar';
				};
			} else {
				foo = function() {
					return 'baz';
				};
			}

			assert.strictEqual(foo(), 'bar'); //Do you understand why?...foo is hoisted, but its value is assigned in the if-else block

		});
	});

	describe('call(), apply() and bind()', function() {
		it('func.apply(thisValue, argArray)', function() {
			function add(x, y) {
				return x + y;
			}

			//assert.strictEqual(add(???, ???), 6);
			assert.strictEqual(add.apply(null, [2, 4]), 6); //apply pass the array as arguments to the add function

			//assert.strictEqual(Math.max(34, 56, 23), ???);
			//assert.strictEqual(Math.max.???(null, [???]), 115);
		});

		it('func.call(thisValue, arg1, ..., argN)', function() {
			function add(x, y) {
				return x + y;
			}

			assert.strictEqual(add.call(null, 2, 4), 6); //call does the same that apply, but passing a list of parameters

			//assert.strictEqual(Math.min.???(null, 3, 5, 2, 7), ???);
		});

		it('func.bind(thisValue, arg1, ..., argN)', function() {
			function add(x, y) {
				return x + y;
			}

			var partialBind = add.bind(null, 5);

			assert.strictEqual(typeof partialBind, 'function'); //performs partial function application
			//assert.strictEqual(partialBind(6), ???);

			var partialMax = Math.max.bind(4, 6, 8, 1);
			//assert.strictEqual(partialMax(1, 3), ???);


			//var partialMin = ???;
			//assert.strictEqual(partialMin(1, 3), -1);

		});
	});

	describe('Handling Missing or Extra Parameters', function() {
		it('All Parameters by Index: The Special Variable arguments', function() {

			function add1(x, y) {
				return x + y;
			}

			//assert.strictEqual(add(???, ???), 6);

			function add2(x, y) { //Another way: using arguments variables

				assert.strictEqual(x, arguments[0]);
				assert.strictEqual(y, arguments[1]);
				assert.strictEqual(typeof arguments, 'object'); //arguments is an array-like (pseudo array) variable

				return arguments[0] + arguments[1];

			}

			//assert.strictEqual(add2(???, ???), 16);


			function add3(x, y) {
				return x + y + arguments[2];
			}

			//assert.strictEqual(add3(???, ???, ???), 5);


			function add4() { //add4 has no named parameters. It does not need them
				//??? complete this
			}

			//assert.strictEqual(add4(???, ???), 6);

		});

		it('Exercise', function() {
			function add() { //It can receive a variable number of arguments
				//??? use a loop here
			}

			//assert.strictEqual(add(), 0);
			//assert.strictEqual(add(3), 3);
			//assert.strictEqual(add(1, 2), 3);
			//assert.strictEqual(add(3, 1, 2, 3), 9);
			//assert.strictEqual(add(3, 5, 6, 6, 8, 1, 3, 6), 38);
			//assert.strictEqual(add(3, '2', '6', 6), 17);
			//assert.strictEqual(add(3, 'John', '6', 'Michael'), 9);

			var numbers = [3, 1, 4, 6, 3];
			//assert.strictEqual(???(null, numbers), 17);

		});

		it('Mandatory Parameters, Enforcing a Minimum Arity', function() {
			function foo(mandatory, optional) {
				if (mandatory === undefined) {//Strong checking 
					throw new Error('Missing parameter: mandatory');
				}
			}

			//foo(); //Call foo() passing the right parameters

			function foo2(mandatory, optional) {
				if (!mandatory) {//Soft checking 
					throw new Error('Missing parameter: mandatory');
				}
			}

			//foo2(); //Call foo2() passing the right parameters

			var number = 0;
			//??? change number to foo2() work
			//foo2(number);


			function foo3() {
				if (arguments.length < 1) { //arguments checking
					throw new Error('You need to provide at least 1 argument');
				}
			}

			//foo3(); //Fix it by passing at least one parameter
			foo3(undefined); //This work, buy foo(unidefined) and foo2(undefined) not. Do you understand why?

		});

		it('Optional parameters', function() {
			function bar(arg1, arg2, optional) {
				if (optional === undefined) {
					optional = 'default value';
				}

				return optional;
			}

			//assert.strictEqual(bar(???), 'default value');
			//assert.strictEqual(bar(???), 'optional value');

			function bar2(arg1, arg2, optional) {
				if (!optional) {
					optional = 'default value';
				}

				return optional;
			}

			//assert.strictEqual(bar2(1, 2), ???);
			//assert.strictEqual(bar2(1, 2, 0), ???);
			////assert.strictEqual(bar2(1, 2, 'value'), ???);


			function bar3(arg1, arg2, optional) {

				optional = optional || 'default value';

				return optional;
			}

			//assert.strictEqual(bar2(1, 2), ???);
			//assert.strictEqual(bar2(1, 2, 0), ???);
			////assert.strictEqual(bar2(1, 2, 'value'), ???);


		});
	});

	describe('Simulating Named Parameters in JavaScript', function() {
		it('Exercise: Functions with too many parameters', function() {
			function sum(start, end, step) {
				var sum = 0;
				//complete the algorithm
				return sum;
			}

			//assert.strictEqual(sum(1, 2, 1), 3); //1 + 2
			//assert.strictEqual(sum(1, 5, 1), 15); //1 + 2 + 3 + 4 + 5 = 15
			//assert.strictEqual(sum(3, 5, 1), 12); //3 + 4 + 5 = 12
			//assert.strictEqual(sum(1, 5, 2), 9); //1 + 3 + 5 = 9
			//assert.strictEqual(sum(1, 4), 10); //1 + 2 + 3 + 4

		});

		it('Using an object to reduce parameters', function() {
			function sum(options) {
				options.step = options.step || 1;
				var sum = 0;
				for (var i = options.start; i <= options.end; i += options.step) {
					sum += i;
				}

				return sum;
			}

			var options = {//options is an object used as unique parameter
				start: 1,
				end: 2,
				step: 1

			};
			//assert.strictEqual(sum(options), ???);

			var options2 = {
				step: 1, //The order does not matter
				start: 1,
				end: 5

			};

			//assert.strictEqual(sum(options2), ???);

			/*assert.strictEqual(sum({
				start: 3, //You can pass an anonymous object
				end: 5,
				step: 1

			}), ???);*/
			//assert.strictEqual(sum(???), 9); //1 + 3 + 5 = 9
			//assert.strictEqual(sum(???), 10); //1 + 2 + 3 + 4

		});

	});

});
