describe('Chapter 17 Objects and Inheritance', function() {
	describe('Single Objects', function() {
		it('Object Literals', function() {
			var jane = {
				name: 'Jane',
				describe: function() {
					return 'Person named ' + this.name;
				}
			};

			//assert.strictEqual(???, jane.describe()); //JavaScript’s object literals allow you to directly create plain objects (direct instances of Object).
			//assert.strictEqual(???, jane.name); //With object literals all properties are public
			//assert.strictEqual(???, jane.unknownProperty); //Getting a property that doesn’t exist returns undefined

			jane.name = 'John'; //You can use the assignment operator ( = ) to set the value of a property referred to via the dot notation
			//assert.strictEqual(???, jane.name); //With object literals all properties are public

			jane.lastName = 'Smith'; //You can add properties at any time

			//assert.strictEqual(???, jane.lastName);

			delete jane.lastName; //The delete operator lets you completely remove a property

			//assert.???('lastName' in jane);
			//assert.strictEqual(???, jane.lastName);

			jane.lastName = undefined; //If you merely set a property to undefined , the property still exists and the object still contains its key

			//assert.???('lastName' in jane);


		});

		it('Bracket Operator ([]): Accessing Properties via Computed Keys', function() {
			var obj = {someProperty: 'abc'};

			//var property = 'some' + ???;

			//assert.strictEqual('abc', obj[property]); //While the dot operator works with fixed property keys, the bracket operator allows you to refer to a property via an expression.

			obj = {'not an identifier': 123}; //That also allows you to access properties whose keys are not identifiers

			//assert.strictEqual(123, obj[???]);

			obj = {myMethod: function() {
					return true;
				}};

			//assert.isTrue(obj[???]);  //Calling methods works as you would expect

		});

	});

	describe('Converting Any Value to an Object', function() {
		it('Object() function', function() {
			//assert.is???(Object(null) instanceof Object); //Object() , used as a function (not as a constructor) convert an arbitrary value to an object
			//assert.is???(Object(false) instanceof Boolean);

		});
	});

	describe('Calling Functions While Setting this: call(), apply(), and bind()', function() {

		var jane = {
			name: 'Jane',
			sayHelloTo: function(otherName) {
				return this.name + ' says hello to ' + otherName;
			}
		};

		var john = {
			name: 'John'
		};

		it('Function.prototype.call(thisValue, arg1?, arg2?, ...)', function() {
			//assert.strictEqual(???, jane.sayHelloTo('Tarzan'));
			//assert.strictEqual(???, jane.sayHelloTo.call(jane, 'Tarzan')); //The first parameter is the value that this will have inside the invoked function; the remaining parameters are handed over as arguments to the invoked function
			//assert.strictEqual(???, jane.sayHelloTo.call(john, 'Tarzan'));

			var func = jane.sayHelloTo;
			//assert.strictEqual(???, func.call(jane, 'Tarzan'));
		});

		it('Function.prototype.apply(thisValue, argArray)', function() {
			//assert.strictEqual(???, jane.sayHelloTo('Tarzan'));
			//assert.strictEqual(???, jane.sayHelloTo.apply(jane, ['Tarzan'])); //The first parameter is the value that this will have inside the invoked function; the second parameter is an array that provides the arguments for the invocation
		});

		it('Functions with apply: Passing and array instead multiple parameters', function() {
			//assert.strictEqual(???, Math.max(1, 2, 3, 4));
			//assert.strictEqual(???, Math.max.apply(null, [1, 2, 3, 4]));
		});


		it('Function.prototype.bind(thisValue, arg1?, ..., argN?)', function() {

			var func = jane.sayHelloTo.bind(john); //bind performs partial function application—meaning it creates a new function that calls the receiver of bind() in the following manner: the value of this is thisValue and the arguments start with arg1 until argN , followed by the arguments of the new function

			//assert.strictEqual(???, func('Tarzan'));

			func = jane.sayHelloTo.bind(john, 'Cheeta');
			//assert.strictEqual(???, func());
		});
	});

	describe('Pitfall: Losing this When Extracting a Method', function() {


		it('Extracting inc and calling it (as a function!) fails', function() {

			var counter = {
				count: 0,
				inc: function() {
					this.count++;
				}
			};
			var func = counter.inc;
			func();
			//assert.strictEqual(???, counter.count); // didn’t work
			//assert.strictEqual(???, isNaN(count)); // global variable
		});

		it('How to properly extract a method', function() {
			var counter = {
				count: 0,
				inc: function() {
					this.count++;
				}
			};
			var func = counter.inc.bind(counter);
			func();
			//assert.strictEqual(???, counter.count); // It works
			//assert.strictEqual(???, isNaN(count)); // there is no global variable count
		});

		it('Callbacks and extracted methods', function() {
			var counter = {
				count: 0,
				inc: function() {
					this.count++;
				}
			};
			function callIt(callback) {
				callback();
			}
			callIt(counter.inc);

			//assert.strictEqual(???, counter.count); // Bad
			//assert.strictEqual(???, isNaN(count)); // Global variable count

			callIt(counter.inc.bind(counter));

			//assert.strictEqual(???, counter.count); // Good
		});
	});

	describe('Pitfall: Functions Inside Methods Shadow this', function() {

		it('The failure', function() {
			var obj = {
				name: 'Jane',
				friends: ['Tarzan', 'Cheeta'],
				loop: function() {
					return this.friends.map(
									function(friend) {
										return this.name + ' knows ' + friend;
									}
					);
				}
			};

			//assert.deepEqual(???, obj.loop()); // didn’t work
		});

		it('Workaround 1: that = this', function() {
			var obj = {
				name: 'Jane',
				friends: ['Tarzan', 'Cheeta'],
				loop: function() {
					var that = this;
					return this.friends.map(
									function(friend) {
										return that.name + ' knows ' + friend;
									}
					);
				}
			};

			//assert.deepEqual(['Jane knows Tarzan', 'Jane knows Cheeta'], ???); // Fixed it
		});

		it('Workaround 2: bind()', function() {
			var obj = {
				name: 'Jane',
				friends: ['Tarzan', 'Cheeta'],
				loop: function() {
					return this.friends.map(
									function(friend) {
										return this.name + ' knows ' + friend;
									}.bind(this)
									);
				}
			};

			//assert.deepEqual(['Jane knows Tarzan', 'Jane knows Cheeta'], ???); // Fixed it
		});

		it('Workaround 3: a thisValue for map()', function() {
			var obj = {
				name: 'Jane',
				friends: ['Tarzan', 'Cheeta'],
				loop: function() {
					return this.friends.map(
									function(friend) {
										return this.name + ' knows ' + friend;
									}, this
									);
				}
			};

			//assert.deepEqual(['Jane knows Tarzan', 'Jane knows Cheeta'], ???); // Fixed it
		});

	});

	describe('this object', function() {
		it('this in methods', function() {
			var jane = {
				firstName: 'Jane',
				lastName: 'Doe',
				getName: function() {
					return this.firstName + ' ' + this.lastName;
				}
			};

			//assert.strictEqual(jane.firstName, ???);
			//assert.strictEqual(jane.lastName, ???);
			//assert.strictEqual(jane.getName(), ???);

			var getName = jane.getName;
			//assert.strictEqual(getName(), ???); //Why does this not work?
			//this is the calling object. In this case, the calling object is window.
			//With "use strict", this is undefined
		});

		it('Fix with call, apply, bind', function() {
			var jane = {
				firstName: 'Jane',
				lastName: 'Doe',
				getName: function() {
					return this.firstName + ' ' + this.lastName;
				}
			};

			var getName = jane.getName;

			//assert.strictEqual(getName.call(jane), ???);
			//assert.strictEqual(getName.apply(jane), ???);

			var getName2 = jane.getName.bind(jane);

			//assert.strictEqual(getName2(), ???);

			function greet(greeting) {
				return greeting + ' ' + this.firstName;
			}

			//assert.strictEqual(greet('Hello'), ???);
			//assert.strictEqual(greet.call(jane, 'Hello'), ???);
			//assert.strictEqual(greet.apply(???), 'Bye Jane');

			var greetJane = greet.bind(jane);
			//assert.strictEqual(greetJane('Bye'), ???);

			var greetJane2 = greet.bind(jane, 'Hi');
			//assert.strictEqual(greetJane2(), ???);
			//assert.strictEqual(greetJane2('Hello'), ???);
		});

		it('this in inner functions', function() {
			var jane = {
				firstName: 'Jane',
				lastName: 'Doe',
				getName: function() {
					function f() {
						return this.lastName;
					}
					return this.firstName + ' ' + f(); //Who is calling f() -> window object
				}
			};

			//assert.strictEqual(jane.firstName, ???);
			//assert.strictEqual(jane.lastName, ???);
			//assert.strictEqual(jane.getName(), ???);
		});


		it('this in inner functions: solution 1', function() {
			var jane = {
				firstName: 'Jane',
				lastName: 'Doe',
				getName: function() {
					var that = this;
					function f() {
						return that.lastName;
					}
					return this.firstName + ' ' + f();
				}
			};

			//assert.strictEqual(jane.getName(), ???);
		});


		it('this in inner functions: solution 2', function() {
			var jane = {
				firstName: 'Jane',
				lastName: 'Doe',
				getName: function() {
					function f() {
						return this.lastName;
					}
					return this.firstName + ' ' + f.call(this); //or apply
				}
			};

			//assert.strictEqual(jane.getName(), ???);
		});

		it('this in inner functions: solution 3', function() {
			var jane = {
				firstName: 'Jane',
				lastName: 'Doe',
				getName: function() {
					function f() {
						return this.lastName;
					}
					return this.firstName + ' ' + f.bind(this)();
				}
			};

			//assert.strictEqual(jane.getName(), ???);
		});


		it('this in inner functions: solution 4', function() {
			var jane = {
				firstName: 'Jane',
				lastName: 'Doe',
				getName: function() {
					var f = function() {
						return this.lastName;
					}.bind(this);
					return this.firstName + ' ' + f();
				}
			};

			//assert.strictEqual(jane.getName(), ???);
		});


		it('this in inner functions: solution 5', function() {
			var jane = {
				firstName: 'Jane',
				lastName: 'Doe',
				getName: function() {
					function f(that) {
						return that.lastName;
					}
					return this.firstName + ' ' + f(this);
				}
			};

			//assert.strictEqual(jane.getName(), ???);
		});
	});

	describe('Sharing Data Between Objects via a Prototype', function() {

		it('Waste of memory', function() {
			var jane = {
				name: 'Jane',
				describe: function() {
					return 'Person named ' + this.name;
				}
			};

			var tarzan = {
				name: 'Tarzan',
				describe: function() {
					return 'Person named ' + this.name;
				}
			};

			//assert.is???(jane.describe === tarzan.describe); // Both functions do the same but are different.
		});

		it('Using prototypes for memory reuse', function() {
			var PersonProto = {
				describe: function() {
					return 'Person named ' + this.name;
				}
			};

			var jane = Object.create(PersonProto, {
				name: {value: 'Jane', writable: true}
			});

			var tarzan = Object.create(PersonProto, {
				name: {value: 'Tarzan', writable: true}
			});


			//assert.is???(jane.describe === tarzan.describe); // Use prototype methods for memoryu reuse
		});

		it('hasOwnProperty() function', function() {
			var proto = {foo: 'a'};
			var obj = Object.create(proto);

			//assert.strictEqual(???, obj.foo);
			//assert.is???(obj.hasOwnProperty('foo'));

			obj.foo = 'b'; // own properties hide prototype prototype

			//assert.strictEqual(???, obj.foo);
			//assert.is???(obj.hasOwnProperty('foo'));
		});

		it('Deleting an inherited property', function() {
			var proto = {foo: 'a'};
			var obj = Object.create(proto);

			delete obj.foo;

			//assert.strictEqual(???, obj.foo); //You can only delete own properties.

			obj.foo = 'b'; // own properties hide prototype prototype

			//assert.strictEqual(???, obj.foo);
			//assert.is???(obj.hasOwnProperty('foo'));

			delete obj.foo;

			//assert.is???(obj.hasOwnProperty('foo'));
			//assert.strictEqual(???, obj.foo);

		});
	});

	describe('Iteration and Detection of Properties', function() {
		it('Listing All Property Keys', function() {
			var proto = {foo: 'a'};
			var obj = Object.create(proto);

			obj.bar = 'b';

			var keys = [];
			for (var key in obj) {
				keys.push(key);
			}

			//assert.strictEqual(???, keys.length); //proto properties are listed
		});

		it('Exclude prototype properties', function() {
			var proto = {foo: 'a'};
			var obj = Object.create(proto);

			obj.bar = 'b';

			var keys = [];
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					keys.push(key);
				}
			}

			//assert.strictEqual(???, keys.length); //proto properties are excluded
		});


		it('Exclude prototype properties (another way)', function() {
			var proto = {foo: 'a'};
			var obj = Object.create(proto);

			obj.bar = 'b';

			var keys = Object.getOwnPropertyNames(obj);

			//assert.strictEqual(???, keys.length); //proto properties are excluded
		});

		it('Checking Whether a Property Exists', function() {
			var proto = {foo: 'a'};
			var obj = Object.create(proto);

			obj.bar = 'b';

			//assert.is???('foo' in obj); //own properties work with in operator
			//assert.is???('bar' in obj); //prototype properties work with in operator

			//assert.is???(obj.hasOwnProperty('foo')); //own properties work with hasOwnProperty() function
			//assert.is???(obj.hasOwnProperty('foo')); //prototype properties are exluded with hasOwnProperty() function
		});


		it('Object.getOwnPropertyNames() and Object.keys() are almost the same', function() {
			var obj = {};
			Object.defineProperties(obj, {
				one: {enumerable: true, value: 'one'},
				two: {enumerable: false, value: 'two'}
			});

			//assert.strictEqual(???, Object.keys(obj).length);
			//assert.strictEqual(???, Object.getOwnPropertyNames(obj).length);
		});
	});

	describe('Constructors—Factories for Instances', function() {

		it('Prototypes', function() {
			function Person(name) {
				this.name = name;
			}

			Person.prototype.describe = function() {
				return 'Person named ' + this.name;
			};

			//assert.strictEqual(???, person.describe());
		});

		it('Terminology: The Two Prototypes', function() {

			var proto = {};
			var obj = Object.create(proto);
			Object.getPrototypeOf(obj) === proto;
			//assert.strictEqual(???, Object.getPrototypeOf(obj)); //An object can be the prototype of another object

			function C() {
			}
			var obj2 = new C();
			//assert.strictEqual(C.prototype, Object.getPrototypeOf(???)); //Each constructor C has a prototype property that refers to an object. That object becomes the prototype of all instances of C

		});

		it('The constructor Property of Instances', function() {

			function C() {
			}
			var obj = new C();
			//assert.strictEqual(???, obj.constructor); //By default, each function C contains an instance prototype object C.prototype whose property constructor points back to C
			//assert.strictEqual(???, C.prototype.constructor);
		});


		it('The instanceof Operator', function() {
			function C() {
			}
			var obj = new C();
			//assert.is???(obj instanceof C);
			//assert.is???(obj instanceof Object); //instanceof check whether Constr.prototype is in the prototype chain of value
		});

		it('isPrototypeOf() function', function() {
			function C() {
			}
			var obj = new C();
			//assert.is???(C.prototype.isPrototypeOf(obj)); //instanceof and isPrototypeOf() are equivalents
		});



	});
	describe('Tips for Implementing Constructors', function() {

		it('Protection against forgetting new', function() {
			function C() {
			}
			var obj = new C();
			//assert.is???(obj.constructor === C);

			var obj2 = C();
			//assert.is???(obj2 === undefined);

			function D() {
				if (!(this instanceof D)) {
					return new D();
				} else {
					return this;
				}
			}

			obj = new D();
			//assert.is???(obj.constructor === D);

			obj2 = D();
			//assert.is???(obj2.constructor === D);

		});

		it('Returning arbitrary objects from a constructor', function() {
			function C() {
				return {
					foo: 'a'
				};
			}
			var obj = new C();
			//assert.is???(obj.foo === 'a');

			var obj2 = C();
			//assert.is???(obj2.foo === 'a');
		});
	});

	describe('Keeping Data Private', function() {
		describe('Privileged methods (Crockford Privacy Pattern)', function() {
			function StringBuilder() {
				var buffer = [];
				this.add = function(str) {
					buffer.push(str);
				};
				this.toString = function() {
					return buffer.join('');
				};
			}

			it('simple use', function() {
				var sb = new StringBuilder();
				sb.add('Hello');
				sb.add(' world!');
				//assert.strictEqual(???, sb.toString());
			});

			it('Problem: waste of memory', function() {
				var sb = new StringBuilder();
				var sb2 = new StringBuilder();
				//assert.is???(sb.add === sb2.add);
			});

		});

		describe('Private Data in Properties with Marked Keys', function() {
			function StringBuilder() {
				this._buffer = [];
			}
			StringBuilder.prototype = {
				constructor: StringBuilder,
				add: function(str) {
					this._buffer.push(str);
				},
				toString: function() {
					return this._buffer.join('');
				}
			};

			it('simple use', function() {
				var sb = new StringBuilder();
				sb.add('Hello');
				sb.add(' world!');
				//assert.strictEqual(???, sb.toString());
			});

			it('Problem: properties are actually public', function() {
				var sb = new StringBuilder();
				//assert.is???(sb._buffer !== undefined); //By convention the properties that start with _ should not be used even if they are public
			});

		});

		describe('Keeping Global Data Private via IIFEs', function() {
			var StringBuilder = (function() {
				var _buffer = [];

				function StringBuilder() {

				}

				StringBuilder.prototype = {
					constructor: StringBuilder,
					add: function(str) {
						_buffer.push(str);
					},
					toString: function() {
						return _buffer.join('');
					}
				};

				return StringBuilder;

			}());

			it('simple use', function() {
				var sb = new StringBuilder();
				sb.add('Hello');
				sb.add(' world!');
				//assert.strictEqual(???, sb.toString());
			});

			it('Now the memory is used correctly', function() {
				var sb = new StringBuilder();
				var sb2 = new StringBuilder();
				//assert.is???(sb.add === sb2.add);
			});

		});

		describe('Using revealing module pattern', function() {
			var StringBuilder = function() {
				var _buffer = [];

				return {
					add: function(str) {
						_buffer.push(str);
					},
					toString: function() {
						return _buffer.join('');
					}
				};
			};

			it('simple use', function() {
				var sb = StringBuilder();
				sb.add('Hello');
				sb.add(' world!');
				//assert.strictEqual(???, sb.toString());
			});

			it('Waste of memory', function() {
				var sb = new StringBuilder();
				var sb2 = new StringBuilder();
				//assert.is???(sb.add === sb2.add);
			});

		});

	});

	describe('Inheritance', function() {
		describe('Classical inheritance', function() {
			it('Bad solution', function() {
				function Parent() {
					this.foo = 'a';
				}

				Parent.prototype.bar = 'b';

				var p = new Parent();
				//assert.strictEqual(???, p.foo);
				//assert.strictEqual(???, p.bar);

				function Child() {
					this.baz = 'c';
				}

				Child.prototype = new Parent();

				var c = new Child();
				//assert.strictEqual(???, c.baz);
				//assert.strictEqual(???, c.bar); //Seams to work, but ...
				//assert.strictEqual(???, c.foo); //The prototype is contaminated
			});

			it('Another bad solution', function() {
				function Parent() {
					this.foo = 'a';
				}

				Parent.prototype.bar = 'b';

				var p = new Parent();

				function Child() {
				}

				Child.prototype = Parent.prototype;

				Child.prototype.baz = 'c';

				var c = new Child();
				//assert.strictEqual(???, c.baz);
				//assert.strictEqual(???, c.bar);
				//assert.strictEqual(???, c.foo); //Now we are fixed the previous problem, but ...

				assert.strictEqual('c', p.baz); //Child and Parent prototypes are the same object <- Bad

			});

			it('A solution (not the best )', function() {
				function Parent() {
					this.foo = 'a';
				}

				Parent.prototype.bar = 'b';

				var p = new Parent();

				function Child() {
				}

				function F() {
				} //empty function
				F.prototype = Parent.prototype;

				Child.prototype = new F();

				Child.prototype.baz = 'c';

				var c = new Child();
				//assert.strictEqual(???, c.baz);
				//assert.strictEqual(???, c.bar);
				//assert.strictEqual(???, c.foo);

				//assert.strictEqual(???, p.baz); //Now parent prototype is not affected

			});

			it('The right aproach', function() {
				function Parent() {
					this.foo = 'a';
				}

				Parent.prototype.bar = 'b';

				var p = new Parent();

				function Child() {
				}

				Child.prototype = Object.create(Parent.prototype);

				Child.prototype.baz = 'c';

				var c = new Child();
				//assert.strictEqual(???, c.baz);
				//assert.strictEqual(???, c.bar);
				//assert.strictEqual(???, c.foo);

				//assert.strictEqual(???, p.baz); //Parent prototype reamains unaffected
			});


			it('Ensuring That instanceof Works', function() {
				function Parent() {
				}

				function Child() {
				}

				Child.prototype = Object.create(Parent.prototype);

				var c = new Child();

				//assert.is???(c instanceof Child);
				//assert.is???(c instanceof Parent);
				//assert.is???(c instanceof Object);
			});

			describe('inheriting own properties', function() {
				it('Own properties are not being inherited', function() {
					function Parent() {
						this.foo = 'a';
					}

					Parent.prototype.bar = 'b';

					function Child() {
					}

					Child.prototype = Object.create(Parent.prototype);

					var c = new Child();

					//assert.strictEqual(???, c.foo);
					//assert.strictEqual(???, c.bar);

				});


				it('Using call to fix this', function() {
					function Parent() {
						this.foo = 'a';
					}

					Parent.prototype.bar = 'b';

					function Child() {
						Parent.call(this);
					}

					Child.prototype = Object.create(Parent.prototype);

					var c = new Child();

					//assert.strictEqual(???, c.foo);
				});
			});

		});

		describe('Prototypal inheritance', function() {
			it('We do not need constructor functions at all', function() {

				var protoParent = {
					bar: 'b'
				};

				var p = Object.create(protoParent, {
					foo: {value: 'a', writable: true}
				});

				//assert.strictEqual(???, p.foo);
				//assert.strictEqual(???, p.bar);

				var protoChild = Object.create(protoParent, {
					baz: {value: 'c', writable: true}
				});

				var c = Object.create(protoChild, {
					qux: {value: 'd', writable: true}
				});

				//assert.strictEqual(???, c.foo);
				//assert.strictEqual(???, c.bar);
				//assert.strictEqual(???, c.baz);
				//assert.strictEqual(???, c.qux);

				//assert.strictEqual(???, p.baz); //parent prototype is not affected


				//assert.strictEqual(???, c.baz);
				//assert.strictEqual(???, c.bar); //Seams to work, but ...
				//assert.strictEqual(???, c.foo); //The prototype is contaminated
			});
		});
	});

	describe('Generic Methods', function() {
		it('We can use any method with any object', function() {
			function getName() {
				return this.name;
			}

			var john = {
				name: 'John'
			};

			assert.strictEqual('John', getName.call(john));
		});

		it('Array-Like Objects and Generic Methods', function() {

			var obj = {0: 3, 1: 4, length: 2}; //There are some objects in JavaScript that feel like an array, but actually aren’t

			//assert.strictEqual(???, Array.prototype.join.call(obj, ',')); //We can use array methods in this way
		});

		it('String like array', function() {

			var str = 'Peter'; //There are some objects in JavaScript that feel like an array, but actually aren’t

			//assert.strictEqual(???, Array.prototype.join.call(str, ','));
		});


		it('arguments like array', function() {

			function sum() {
				return Array.prototype.reduce.call(arguments, function(s, v) {
					return s + v;
				});
			}

			//assert.strictEqual(???, sum(1, 2, 3));
		});
	});

	describe('Mixining objects', function() {

		function mixin(destination, source) {
			for (key in source) {
				if (!(key in destination)) {
					destination[key] = source[key];
				}
			}
			
			return destination;
		}
		
		it('Object can mix their properties with other objects', function() {
			var x = {
				foo: 'a',
				bar: 'b'
			};

			var y = {
				bar: 'c',
				baz: 'd'
			};


			mixin(y, x);

			//assert.strictEqual(???, y.baz);
			//assert.strictEqual(???, y.foo);
			//assert.strictEqual(???, y.bar);
		});
		
		it('mixin can be used to clone objects', function() {
			var x = {
				foo: 'a',
				bar: 'b'
			};
			
			var clone = mixin.bind(null, {});


			var y = clone(x);

			//assert.strictEqual(???, y.foo);
			//assert.strictEqual(???, y.bar);
			//assert.???(x, y);
		});
	});
});