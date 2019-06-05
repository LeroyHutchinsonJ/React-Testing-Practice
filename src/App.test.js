//Non default functions must be put in curly brackets
import {add,minus, divide, multiply, sumTotal} from './App';



console.log(add(1,2));

//This is a unit test, it checks one piece of code
test('Add', () => {
    const value = add(1, 2);
    expect(value).toBe(3);
})
test('Minus', () => {
  const value = minus( 2,4);
  expect(value).toBe(-2);
})
test('Divide', () => {
  const value = divide(4,2);
  expect(value).toBe(2);
})
test('Multiply', () => {
  const value = multiply( 3,3);
  expect(value).toBe(9);
})

//This is an integration test, it is meant to test multiple functions that may rely on each other
test('total', () =>{
  const value = sumTotal(3,2);
  expect(value).toBe(`$${5}`)
})
