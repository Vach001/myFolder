const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

function fakeSlice(array, start, end){
    let animal = [] 
    if(start<0){
        start =start+array.length
    }
    if(start < -array.length){
        start = 0
    }
    if(start >= array.length || end < start){
        return animal
    }
    if(end<0){
        end = end+array.length
    }
    if(end< -array.length){
        return animal
    }
    if(end>=array.length || end === undefined){
        end = array.length-1
    }
    for(let i = 0; start<= end; start++){
        animal[i] = array[start]
        i++
    }
    return animal
}
// console.log(animals.slice(-3,-1))
console.log(fakeSlice(animals, 2, ))