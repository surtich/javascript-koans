describe('20 Dates', function() {
  it('The Date Constructor', function() {
    var date = new Date(2001, 1, 27, 14, 55);
    //assert.strictEqual(???, date.getHours());
    date = new Date('2004-08-29');
    //assert.strictEqual(???, date.getFullYear());
    date = new Date(0);
    //assert.strictEqual(???, date.getMonth());
    
    //assert.strictEqual(???, new Date(100000).getTime());
    
    var now = new Date();
    //assert.strictEqual(???, now.getDate()); //day of the month
    //assert.strictEqual(???, now.getDay()); //day of the week
  });
  
  it('Date Constructor Methods', function() {
    //assert.strictEqual(???, new Date(Date.now()).getFullYear());
    //assert.strictEqual(???, new Date(Date.parse('1970-01-02')).getFullYear());
  });
  
  it('Date Prototype Methods', function() {
    var d = new Date('1968-11-25');
    //assert.strictEqual(???, d.getDay());
    //assert.strictEqual(???, d.getDate());
    //assert.strictEqual(???, new Date(0).getTime());
    
    d.setFullYear(2011);
    //assert.strictEqual(???, d.getFullYear());
  });
  
  it('Converting a Date to a Number', function() {
    //assert.is???(new Date('1980-05-21') > new Date('1980-05-20'));
    //assert.strictEqual(???, new Date('1980-05-21') - new Date('1980-05-20'));
  });
});