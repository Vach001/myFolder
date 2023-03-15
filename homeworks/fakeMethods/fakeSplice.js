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
    if(deleteCount<0 || deleteCount === 0){
        deleteCount = 0
    }
   

    // let arrLength = array.length -1
    // let argLength = argument.length-1
    // let length = array.length + argLength-deleteCount
    // let end = start+deleteCount
    // while(length>=0){
    //     if(length === end){
    //         while(argLength>=0){
    //             array[length]=argument[argLength]
    //             length--
    //             argLength--
    //         }
    //         } 
    //             if(length>=end){
    //                 array[length]=array[arrLength]
    //                 arrLength--
    //             } 
    //             if(length<=start){
    //             array[length]=array[arrLength]
    //             arrLength--
    //             }
        
    //     length--
    // }
    // return animals
    const argLength = argument.length
    let oldArray = [...array]
    let length=oldArray.length+argLength-deleteCount
    let end = start + argLength-1
    array.length=0

   
    for(let i = 0; i<length; i++){
        
        if(i < start){
        array[i] = oldArray.shift()
        }
        if(i >= start && i <= end){
        array[i] = argument.shift()
        } 
        if(i > end){
        let newArray= oldArray.slice(deleteCount)
        array = [...array, ...newArray]
        break
        }
    
    } 
    return array
}
console.log(fakeSplice(animals, -1,2, "add","bbbb","cccc","dddd"))