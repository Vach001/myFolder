function fakeSome(array, action = () => {}){
    let isSome = false
    for(let i = 0; i <array.length;i++){
        let curItem = array[i] 
        if(action(curItem)){
            return isEvery = true
        } 
    }
    return isSome 
}