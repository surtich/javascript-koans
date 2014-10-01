describe('19 Regular Expressions', function() {
	describe('Regular Expression Syntax', function() {
		it('Special characters', function() {
			//assert.is???(/^(ab)$/.test('(ab)')); //All of the following characters have special meaning: \ ^ $ . * + ? ( ) [ ] { } |
			//assert.is???(/^\(ab\)$/.test('(ab)')); //You can escape them by prefixing a backslash
		});

		it('.(dot)', function() {
			//assert.is???(/./.test('\n')); //Matches any JavaScript character except line terminators (new‐line, carriage return, etc.)
			//assert.is???(/[\s\S]/.test('\n')); //To really match any character, use [\s\S]
		});

		it('Character class escapes (match one of a set of characters)', function() {
			//assert.is???(/\d/.test('233')); //matches any digit (same as [0-9]);
			//assert.is???(/\D/.test('233')); //matches any nondigit (same as [^0-9]);
			//assert.is???(/\w/.test('acd')); //matches any Latin alphanumeric character plus underscore (same as [A-Za-z0-9_])
			//assert.is???(/\W/.test('acd')); //\W matches all characters not matched by \w
			//assert.is???(/\s/.test('a cd')); // matches whitespace characters (space, tab, line feed, carriage return, form feed, all Unicode spaces, etc.)
			//assert.is???(/\S/.test('a cd')); // \S matches all nonwhitespace characters
		});

		it('Character Classes', function() {
			//assert.is???(/[a-cP]/.test('Peter')); //[«charSpecs»] matches any single character that matches at least one of the charSpecs
			//assert.is???(/[^a-cP]/.test('Peter')); //[^«charSpecs»] matches any single character that does not match any of the charSpecs.
		});

		it('Groups', function() {
			//assert.is???(/^(a+)-\1$/.test('a-a')); //(«pattern») is a capturing group. Whatever is matched by pattern can be accessed via backreferences or as the result of a match operation.
			//assert.is???(/^(a+)-\1$/.test('aaa-aaa'));
			//assert.is???(/^(a+)-\1$/.test('aaa-a'));
		});

		it('Quantifiers', function() {
			//assert.is???(/ab?c/.test('ac')); //? means match never or once.
			//assert.is???(/ab*c/.test('abbbbc')); //* means match zero or more times.
			//assert.is???(/1(abc)+2/.test('1abcabc2')); //+ means match one or more times.
			//assert.is???(/1(abc){3}2/.test('1abcabc2')); //{n} means match exactly n times.
			//assert.is???(/1(abc){2,}2/.test('1abcabc2')); //{n,} means match n or more times.
			//assert.strictEqual(???, 'abcabc'.match(/(abc)+/)[0]); //By default, quantifiers are greedy; that is, they match as much as possible.
			//assert.strictEqual(???, 'abcabc'.match(/(abc)+?/)[0]); //You can get reluctant matching (as little as possible) by suffixing any of the preceding quantifiers (including the ranges in curly braces) with a question mark (?)
		});

		it('Assertions', function() {
			//assert.is???(/^abc/.test('1abc')); //^ Matches only at the beginning of the input.
			//assert.is???(/abc$/.test('1abc')); //$ Matches only at the end of the input.
			//assert.is???(/\babc/.test('1abc')); //\b Matches only at a word boundary. Don’t confuse with [\b], which matches a backspace.
			//assert.is???(/\Babc/.test('1abc')); //\B Matches only if not at a word boundary.
			//assert.strictEqual(???, '<a href="foo#bar"></a>'.match(/href=".+(?=#)/)[0]); //(?=«pattern») Positive lookahead: Matches only if pattern matches what comes next. pattern is used only to look ahead, but otherwise ignored.
			//assert.strictEqual(???, '<a href="foo#bar"></a>'.match(/href=".+?(?!#)/)[0]); //(?!«pattern») Negative lookahead: Matches only if pattern does not match what comes next. pattern is used only to look ahead, but otherwise ignored.
		});

		it('Disjunction', function() {
			//assert.is???(/^aa|bb$/.test('aaxx')); //A disjunction operator (|) separates two alternatives; either of the alternatives must match for the disjunction to match
			//assert.is???(/^aa|bb$/.test('xxbb'));
			//assert.is???(/^(aa|bb)$/.test('bbxx'));
			//assert.is???(/^(aa|bb)$/.test('aaxx'));
		});

	});

	describe('Creating a Regular Expression', function() {
		it('literal', function() {
			//assert.is???(/^abc/.test('abcxx'));
		});

		it('constructor', function() {
			var startWith = 'abc';
			//assert.is???(new RegExp('^' + startWith).test('abcxx'));
		});

		it('flags', function() {
			//assert.is???(/^abc/i.test('Abcxx')); //i ignoreCase: Case is ignored when trying to match the given regular expression.
			//assert.is???(/^abc/i.test('\nAbcxx'));
			//assert.is???(/^abc/im.test('\nAbcxx')); //m multiline: In multiline mode, the begin operator ^ and the end operator $ match each line, instead of the complete input string.
			//assert.deepEqual(???, 'aaa'.match(/a/));
			//assert.deepEqual(???, 'aaa'.match(/a/g)); //g global: The given regular expression is matched multiple times.
			//assert.is???(new RegExp('abc', 'i').test('Abcxx')); //i flags with constructor 
		});
	});

	describe('Methods', function() {
		it('RegExp.prototype.test: Is There a Match?', function() {
			//assert.is???(/x/i.test('Abcxx')); //The test() method checks whether a regular expression, regex, matches a string, str
		});

		it('String.prototype.search: At What Index Is There a Match?', function() {
			//assert.strictEqual(???, 'abba'.search(/b/)); //If there is a match, the index where it was found is returned.
			//assert.strictEqual(???, 'abba'.search(/x/)); //Otherwise, the result is -1
		});

		it('RegExp.prototype.exec: Capture Groups', function() {
			var regex = /a(b+)/g;
			var str = '_abbb_ab_';
			//assert.deepEqual(???, regex.exec(str)[0]);
			//assert.deepEqual(???, regex.exec(str)[1]);
		});
		
		it('String.prototype.match: Capture Groups or Return All Matching Substrings', function() {
			var regex = /a(b+)/;
			var str = '_abbb_ab_';
			//assert.deepEqual(???, str.match(regex)[0]); //When g flag is not set, match works like RegExp.prototype.exec()
			//assert.deepEqual(???, str.match(regex)[1]);
			
			regex = /a(b+)/g; //If the flag is set, then the method returns an array with all matching substrings in str (i.e., group 0 of every match) or null if there is no match
			//assert.deepEqual(???, str.match(regex)[0]);
			//assert.deepEqual(???, str.match(regex)[1]);
		});
		
		describe('String.prototype.replace: Search and Replace', function() {
			it('Replacement Is a String', function() {
				//assert.strictEqual(???, 'axb cxd'.replace(/x/g, "[$`,$&,$']")); //If replacement is a string, its content is used verbatim to replace the match. The only exception is the special character dollar sign ($), which starts so-called replacement directives: 
				
				/*
				 * Groups: $n inserts group n from the match. n must be at least 1 ($0 has no special meaning).
				 * The matching substring:
						— $` (backtick) inserts the text before the match.
						— $& inserts the complete match.
						— $' (apostrophe) inserts the text after the match.
				 * $$ inserts a single $.
				 */
				
				//assert.strictEqual(???, '"foo" and "bar"'.replace(/"(.*?)"/g, '#$1#'));

			});
			
			it('Replacement Is a Function', function() {
				function replaceFunc(match) { return 2 * match }

				//assert.strictEqual(???, '3 apples and 5 oranges'.replace(/[0-9]+/g, replaceFunc)); 
				
				/*
				 * if replacement is a function, it computes the string that is to replace the match. This
				 * function has the following signature:
				 *			function (completeMatch, group_1, ..., group_n, offset, inputStr)
				 * completeMatch is the same as $& previously, offset indicates where the match was
				 * found, and inputStr is what is being matched against. Thus, you can use the special
				 * variable arguments to access groups (group 1 via arguments[1], and so on)
				 */
				
			});
		});
	});
});