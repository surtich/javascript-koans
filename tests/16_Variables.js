describe('Chapter 16 Variables: Scopes, Environments, and Closures', function() {
	describe('Variables and Scopes', function() {
		it('Declaring a Variable', function() {

			var foo = 'abc';
			var bar;

			//assert.strictEqual(typeof foo, ???);
			//assert.strictEqual(typeof bar, ???);
			//assert.strictEqual(typeof baz, ???);

		});

		it('Variables Are Function-Scoped', function() {
			for (var i = 0; i < 3; i++) {
				var j = i + 2;
			}

			//assert.strictEqual(i, ???); //i variable is accessible outside loop
			//assert.strictEqual(j, ???); //also de j variable
		});


		it('Variables Are Function-Scoped 2', function() {
			var i;
			var j;
			for (i = 0; i < 3; i++) {
				j = i + 2;
			}

			//assert.strictEqual(i, ???); //Previous example and this are the same. In JavaScript variables are function scoped
			//assert.strictEqual(j, ???);
		});

		it('Variables Are Function-Scoped 3', function() {

			var foo = 'abc';

			function bar() {
				var baz = 'xyz';
				//assert.strictEqual(typeof baz, ???);
			}

			//assert.strictEqual(foo, ???);
			//assert.strictEqual(typeof bar, ???);
			//assert.strictEqual(bar(), ???);
			//assert.strictEqual(typeof baz, ???);
		});


		it('Variables Are Function-Scoped 4', function() {

			function foo() {
				var x = 1;
				function bar() {
					var y = 1;
					function baz() {
						var z = 1;
					}
					//assert.strictEqual(typeof z, ???);
				}

				//assert.strictEqual(typeof x, ???);
				//assert.strictEqual(typeof bar, ???);
				//assert.strictEqual(typeof y, ???);
			}

			//assert.strictEqual(typeof foo, ???);
			//assert.strictEqual(typeof x, ???);
			//assert.strictEqual(typeof bar, ???);
		});

		it('Variable Declarations Are Hoisted 2', function() {
			//assert.strictEqual(x, ???); //x variable is hoisted.
			var x = 1;
			//assert.strictEqual(x, ???);
		});



		it('Variable Declarations Are Hoisted 2', function() {
			function foo() {
				//assert.strictEqual(typeof bar, ???);
				function bar() {

				}
				//assert.strictEqual(typeof bar, ???);
			}
		});


		it('Variable Declarations Are Hoisted 3', function() {
			function foo() {
				//assert.strictEqual(typeof bar, ???);
				//assert.strictEqual(bar, ???);
				var bar = function() {
					return 1;
				};
				//assert.strictEqual(typeof bar, ???);
				//assert.strictEqual(bar(), ???);
			}
		});
	});

	describe('IIFE', function() {
		it('Introducing a New Scope via an IIFE', function() {
			function f() {
				//assert.strictEqual(tmp , ???); //tmp is hoisted
				var condition = true;
				if (condition) {
					var tmp = 'abc';
				}
				//assert.strictEqual(tmp , ???); //tmp still exists here => not what we want
			}

			function g() {
				//assert.strictEqual(typeof tmp , ???); //tmp does not exists in this scope
				var condition = true;
				if (condition) {
					(function() {
						var tmp = 'abc';
					}());//IIFE -> The function is called immediately. During its invocation, It defines its own scope. At the end of the execution, the scope is removed
				}
				//assert.strictEqual(typeof tmp , ???); //tmp does not exists in this scope
			}

			f();
			g();
		});

		it('IIFE seems difficult: What\'s the big deal with function scope 1', function() {
			var x = 'abc';
			function f() {
				x = 'xyz';
				//assert.strictEqual(x , ???);
			}
			//assert.strictEqual(x , ???);
			f();
			//assert.strictEqual(x , ???); //variable pollution: names collision
		});

		it('IIFE seems difficult: What\'s the big deal with function scope 2', function() {
			var x = 'abc';
			function f() {
				var x = 'xyz';
				//assert.strictEqual(x , ???);
			}
			//assert.strictEqual(x , ???);
			f();
			//assert.strictEqual(x , ???); //Fixed! without IIFE; then, What's the big deal?, again..,
			//Why do I need IIFE?

			//The problem is when a variable is defined outside a function, its scope is global (window)
			//and there is a high probability of name collision.
		});


		it('IIFE Variations: Invocations alternatives', function() {
			function f() {
				(function() {
					var x = 'xyz';
				}());
				//assert.strictEqual(typeof x , ???);
			}
			f();

			function g() {
				(function() {
					var x = 'xyz';
				})();
				//assert.strictEqual(typeof x , ???);
			}
			g();


			function h() {
				!function() {
					var x = 'xyz';
				};
				//assert.strictEqual(typeof x , ???);
			}
			h();

			function i() {
				void function() {
					var x = 'xyz';
				}();
				//assert.strictEqual(typeof x , ???);
			}
			i();
		});

		it('IIFE Variations: assing the result to a variable', function() {
			var foo = function f() {
				return function() {
					return 'abc';
				};
			}();

			//assert.strictEqual(typeof foo, ???);
			//assert.strictEqual(typeof f, ???);
			//assert.strictEqual(foo(), ???);
		});


		it('IIFE Variations: An IIFE with Parameters', function() {
			var x = {
				y: 'abc'
			};

			//assert.strictEqual(x.y, ???);

			(function(object) {
				object.y = 'xyz';
			}(x));

			//assert.strictEqual(x.y, ???);

		});
	});

	describe('Closures', function() {
		it('Functions Stay Connected to Their Birth Scopes', function() {
			function createInc(startValue) {
				return function(step) {
					startValue += step;
					return startValue;
				};
			}

			var inc = createInc(5);
			//assert.strictEqual(typeof inc, ???);
			//assert.strictEqual(inc(1), ???); //Amazing, Do not you think?
			//assert.strictEqual(inc(1), ???);
		});

		it('Closures use the actual value, no a copy value', function() {
			function foo() {
				var result = [];
				for (var i = 0; i < 3; i++) {
					var func = function() {
						return i;
					};
					result.push(func);
				}
				return result;
			}

			var f = foo();
			var g = f[0];
			var r = g();
			//assert.strictEqual(r, ???); //WTF?
			//assert.strictEqual(foo()[1](), ???);

		});


		it('IIFE to the rescue', function() {
			function foo() {
				var result = [];
				for (var i = 0; i < 3; i++) {
					var func = (function(x) {
						return function() {
							return x;
						};
					}(i)); //Freeze the value
					result.push(func);
				}
				return result;
			}

			var f = foo();
			var g = f[0];
			var r = g();
			//assert.strictEqual(r, ???);
			//assert.strictEqual(foo()[1](), ???);

		});

		it('Another approach', function() {

			var func = function(i) {
				return function() {
					return i;
				}
			};

			function foo() {
				var result = [];
				for (var i = 0; i < 3; i++) {
					result.push(func(i));
				}
				return result;
			}

			var f = foo();
			var g = f[0];
			var r = g();
			//assert.strictEqual(r, ???);
			//assert.strictEqual(foo()[1](), ???);

		});

		it('Exercise: fix the problem', function(done) {
			function sum(callback) {
				var s = 0;
				var i;
				for (i = 1; i <= 3; i++) {
					setTimeout(function() { //use here IIFE
						s += i;
						if (i === 3) {
							return callback(s);
						}
					}, 0);
				}
			}

			sum(function(result) {
				assert.strictEqual(result, 6);
				return done();
			});

		});


	});



});
