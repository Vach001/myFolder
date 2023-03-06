function fakepop(array){
    let lastItem = array[array.length-1]
    array.length = array.length-1
    return lastItem
}
console.log(fakepop([1,2,3,4,"ass"]))