const fb = require('../fizzbuzz')
// Challenge 1
test('Constant', () => {
  expect(fb.FIZZ).toBe('fizz')
  expect(fb.BUZZ).toBe('buzz')
  expect(fb.FIZZBUZZ).toBe('fizzbuzz')
  expect(fb.FIZZ).not.toBe('foo')
  expect(fb.BUZZ).not.toBe('bar')
  expect(fb.FIZZBUZZ).not.toBe('foo bar')
})

// Challenge 2 
test('isFizzy', () => {
  expect(fb.isFizzy(3)).toBe(true)
  expect(fb.isFizzy(6)).toBe(true)
  expect(fb.isFizzy(9)).toBe(true)
  expect(fb.isFizzy(13)).toBe(false)
  expect(fb.isFizzy('thirteen')).toBe(false)
  expect(fb.isFizzy(1.3)).toBe(false)
})

// Challenge 3
test('isBuzzy', () => {
  expect(fb.isBuzzy(5)).toBe(true)
  expect(fb.isBuzzy(10)).toBe(true)
  expect(fb.isBuzzy(25)).toBe(true)
  expect(fb.isBuzzy(6)).toBe(false)
  expect(fb.isBuzzy('six')).toBe(false)
  expect(fb.isBuzzy(3)).toBe(false)
})

// Challenge 4 
test('fizzyBuzzy', () => {
  expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
  expect(fb.fizzyBuzzy(30)).toBe('fizzbuzz')
  expect(fb.fizzyBuzzy(45)).toBe('fizzbuzz')
  expect(fb.fizzyBuzzy(3)).toBe('fizz')
  expect(fb.fizzyBuzzy(6)).toBe('fizz')
  expect(fb.fizzyBuzzy(9)).toBe('fizz')
  expect(fb.fizzyBuzzy(5)).toBe('buzz')
  expect(fb.fizzyBuzzy(10)).toBe('buzz')
  expect(fb.fizzyBuzzy(25)).toBe('buzz')
})

// Challenge 5
test('fizzBuzz', () => {
  expect(fb.fizzBuzz(3)).toStrictEqual({count: 3, fizz: 1, buzz: 0, fizzBuzz: 0})
  expect(fb.fizzBuzz(5)).toStrictEqual({count: 5, fizz: 1, buzz: 1, fizzBuzz: 0})
  expect(fb.fizzBuzz(9)).toStrictEqual({count: 9, fizz: 3, buzz: 1, fizzBuzz: 0})
  expect(fb.fizzBuzz(10)).toStrictEqual({count: 10, fizz: 3, buzz: 2, fizzBuzz: 0})
  expect(fb.fizzBuzz(15)).toStrictEqual({count: 15, fizz: 4, buzz: 2, fizzBuzz: 1})
  // expect(fb.fizzBuzz(10)).toBe({10, fizz: 2, buzz: 2, fizzBuzz: 0})
})