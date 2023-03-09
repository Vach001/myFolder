function fakeFilter(array, action = () => {}){
    const newArray = []
    for(let i = 0; i <array.length;i++){
        let curItem = array[i] 
        if(action(curItem)){
            newArray.push(curItem)
        }
    }
    return newArray 
}