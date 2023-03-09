const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

function fakeSlice(array, start, end){
    let animal = [] 
    if (start >= 0){ 
        if (end < 0 ){
            for(let i = 0; start < array.length + end; i++){
            animal[i] = array[start]
            start++
            }
            return animal
        }
        for(let i = 0; start<end ? end:array.length; i++){
            animal[i] = array[start]
            start++
        }
        return animal
        }else if(start < 0){
            start = start + array.length 
            if (end <0 ){
                for(let i = 0; start< array.length + end; i++){
                animal[i] = array[start]
                start++
                }

            for(let i = 0; start < array.length; i++){
                animal[i] = array[start]
                start++
                }  
                return animal
        }
    }
    return animal
}
// console.log(animals.slice(-3,-1))
fakeSlice(animals, 2)