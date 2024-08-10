const Item = require('../components/Item')
const item = { name: ''}

// User tests here
describe('Item property tests', () => {
  // test username
  test('name should be a string', () => {
    expect(typeof item.name).toBe('string')
  })});