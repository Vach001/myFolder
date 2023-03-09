function fakeFindIndex(array,element){
    for(let i = 0; i<array.length; i++){
        let item = array[i]      
        if(item === element){
            return item
        }
        if(i === array.length-1){
            return undefined
        }
        }
    }
    const array = [4,5,6,8,4]
console.log(fakeFindIndex(array, 5))