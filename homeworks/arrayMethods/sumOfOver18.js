const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43] 
const sumOfOver18 = arr.reduce((sum, number) => {
    if(number > 18 ){
        sum +=number
    }
    return sum
}, 0)
console.log(sumOfOver18)
