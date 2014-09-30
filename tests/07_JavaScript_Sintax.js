describe('Chapter 07 JavaScript Sintax', function() {
	
	it('Assing test', function() {
		var check = true;
        
		assert.strictEqual(check, true, 'check should be true');
		
		check = false;
		
		assert.strictEqual(check, false, 'check should be false');
		
		check = !check;
		
		assert.strictEqual(check, true, 'check should be true');
		
    });
	
	it('Plus operator test', function() {
		
		var sum = 1 + 2;
        
		//assert.strictEqual(sum, ???);
		
		var name = 'Javier';
		
		name += ' Pérez';
		
		//assert.strictEqual(???, 'Javier Pérez');
		
    });
	
	
});
