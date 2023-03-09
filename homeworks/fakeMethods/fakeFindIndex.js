function fakeFindIndex(array,element){
    for(let i = 0; i<array.length; i++){
        let item = array[i]      
        if(item === element){
            return i
        }
        if(i === array.length-1){
            return -1
        }
        }
    }
    const array = [4,6,8,4]
console.log(fakeFindIndex(array, 5))