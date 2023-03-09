const names = ["Armen", "Vahag", "Ani", "Meri"]

function fakeForEach (array){
    for(let idx = 0; idx < array.length; idx++){
        let element = array[idx]
        let answer = `my name is ${element} and my index is ${idx}`
        console.log(answer) 
    }
    
}
fakeForEach(names)