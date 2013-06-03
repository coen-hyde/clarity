var assert = require('assert'),
    Clarity = require('..'),
    clarity,
    testData = {
      name: 'test'
    };

describe('data integrity', function() {
    before(function() {
      clarity = new Clarity();
      clarity.use(testData);
    });

    it('should preserve arrays', function() {
      var input = {
        name: '**name**',
        animals: [
          { name: 'Cat' },
          { name: 'Dog' },
          { name: 'Lion' }
        ]
      };

      assert.deepEqual(clarity.decode(input), {
        name: 'test',
        animals: [
          { name: 'Cat' },
          { name: 'Dog' },
          { name: 'Lion' }
        ]
      });
    });
});