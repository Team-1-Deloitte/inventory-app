const Item = require('./Item')

beforeAll(() => {
    
});

describe('Item Component test', () => { 
    test('should be a string', () => { 
        expect(typeof Item.name).toBe('string')
     })
});
