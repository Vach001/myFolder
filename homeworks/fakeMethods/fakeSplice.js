const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

function fakeSplice(array, start, deleteCount, ...argument){
    if(start<0){
        start = start+array.length
    }
    if(start < -array.length){
        start = 0
    }
    if(start >= array.length ){
        return array.push(argument)
    }
    if(deleteCount<0 ||deleteCount === 0){
        deleteCount = 0
    }
    if(deleteCount>=array.length    ){
        deleteCount = array.length-1
    }
    let length = array.length
    while(start<length){
        array[length-1 + argument.length]=array.length
    }
    return animal
}
// console.log(animals.slice(-3,-1))
console.log(fakeSlice(animals, 2, ))