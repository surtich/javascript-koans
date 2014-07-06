var assert = chai.assert;

describe('Chapter 07 JavaScript Sintax', function() {
	
	it('Assing test', function() {
		var check = true;
        
		assert.strictEqual(check, true, 'check should be true');
		
		check = false;
		
		assert.strictEqual(check, true, 'check should be false');
		
		check = !check;
		
		//assert(check, ???, 'check should be true');
		
    });
	
	it('Plus operator test', function() {
		
		var sum = 1 + 2;
        
		//assert(sum, ???);
		
		var name = 'Javier';
		
		name += ' Pérez';
		
		//assert(check, 'Javier Pérez');
		
    });
	
	
});