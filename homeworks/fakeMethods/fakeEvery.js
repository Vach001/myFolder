function fakeEvery(array, action = () => {}){
    let isEvery = true
    for(let i = 0; i <array.length;i++){
        let curItem = array[i] 
        if(!action(curItem)){
            return isEvery = false
        } 
    }
    return isEvery 
}