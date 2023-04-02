function Calculator(){}

Calculator.prototype.add = function(number1, number2){
    if(typeof number1 !== "number" || typeof number2 !=="number"){
        throw new Error("Please  write a number")
    }
    return number1 + number2
}
Calculator.prototype.subtract = function(number1, number2){
    if(typeof number1 !== "number" || typeof number2 !=="number"){
        throw new Error("Please  write a number")
    }
    return number1 - number2
}
Calculator.prototype.multiply = function(number1, number2){
    if(typeof number1 !== "number" || typeof number2 !=="number"){
        throw new Error("Please  write a number")
    }
    return number1 * number2
}
Calculator.prototype.divide = function(number1, number2){
    if(typeof number1 !== "number" || typeof number2 !=="number"){
        throw new Error("Please  write a number")
    }
    return number1 / number2
}





const calculator = new Calculator()
console.log(calculator.add(4,5))
console.log(calculator.subtract(4,5))
console.log(calculator.multiply(4,5))
console.log(calculator.divide(4,5))