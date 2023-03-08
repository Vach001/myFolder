const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN]
const numbers = arr.filter((item => typeof item === "number" && !Number.isNaN(item)))
console.log(numbers)
