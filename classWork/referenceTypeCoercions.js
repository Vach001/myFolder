// . Number('0x77') === 0x77 //false ? ,,true
// . Number('077') === 077 // true ? ,, false
// . Number(' 12') //NaN ? ,, 12
// . isNaN(' ') // false
// . 0 === +0 //true
// . +0 === -0 // true
// . 1 / '2' //0.5
// . 1 / 0  //NaN ?,,infitnity
// . 0 / 0 //NaN
// . +true //1
// . +false //0
// . +null //0
// . +undefined //0 ?,, NaN
//console.log(Number(' 12      '))



// . null + undefined // NaN
// . null - undefined // NaN
// . null * undefined // NaN
// . null / undefined // NaN
// . null % undefined // NaN
// . null == undefined // true
// . null === undefined // false
// . null < undefined //  false
// . null > undefined // false
// . null <= undefined // false
// . null >= undefined // false
// . null + true // 1
// . null - true // -1
// . null * true // 0
// . null / true // 0
// . null % true // 0
// . null == true // false
// . null === true // false
// . null < true // true
// . null > true // false
// . null <= true // true
// . null >= true // false
// . null + false // 0
// . null - false // 0
// . null * false // 0
// . null / false // NaN
// . null % false // infinity ?,, NaN
// . null == false // true ?,,false
// . null === false // false
// . null < false // false
// . null > false // false
// . null <= false // true
// . null >= false // true
// . undefined + true // NaN
// . undefined - true // NaN
// . undefined * true // NaN
// . undefined / true // NaN
// . undefined % true // NaN
// . undefined == true // false
// . undefined === true // false
// . undefined < true // false
// . undefined > true // false
// . undefined <= true //false
// . undefined >= true // false
// . undefined + false // NaN
// . undefined - false // NaN
// . undefined * false // NaN
// . undefined / false // NaN
// . undefined % false // NaN
// . undefined < false // false
// . undefined > false // false
// . undefined <= false // false
// . undefined >= false // false
// . undefined == false // false
// . undefined === false // false
// . undefined + 5 // NaN
// . undefined - 5 // NaN
// . undefined * 5 // NaN
// . undefined / 5 // NaN
// . undefined % 5 // NaN
// . undefined == 5 // false
// . undefined === 5 // false
// . undefined < 5 // false
// . undefined > 5 // false
// . undefined <= 5 // false
// . undefined >= 5 // false
// . true + false // 1
// . true - false // 1
// . true * false // 0
// . true % false // NaN
// . true / false // infinity
// . true < false // false
// . true > false // true
// . true <= false // false
// . true >= false // true
// . true == false // false
// . true === false // false
// . true + 2 // 3
// . true - 2 // -1
// . true * 2 // 2
// . true / 2 // 0.5
// . true % 2 // 1
// . true < 2 // true
// . true > 2 // false
// . true <= 2 // true
// . true >= 2 // false
// . true == 2 // false
// . true === 2 // false
// . false + 4 // 4
// . false - 4 // -4
// . false * 4 // 0
// . false / 4 // 0
// . false % 4 // 0
// . false < 4 // true
// . false > 4 // false
// . false <= 4 // true
// . false >= 4 // false
// . false == 4 // false
// . false === 4 // false
// . false + NaN // NaN
// . 5 + 3 // 8
// . 5 + NaN // NaN
// . 'hello' + NaN // NaN
// . 'hello' + a + b + c + d + e + f // NaN
// function foo(arg1, arg2){
//     return arg1 / arg2
// }
// console.log(foo(false, NaN))
const obj = {
    _name: [], //[name, length] []
    set name (text){
        let firstName = ''
        let names =[]
        
        for(let i = 0; i < text.length; i++){
            let letter = text[i]
            if(letter === ' '){
                continue
            }
            if(letter !== ","){
                firstName+=letter

            }
            if(text[i+1] === ","){
                let item = [firstName, firstName.length]
                names.push(item)
                firstName = ""

            }
        }
        return obj._name = names
    },
    get name(){
        return obj._name
    }
}

console.log(obj.name) // []

    obj.name = 'Artak, Artavazd, Samvel';
    console.log(obj.name) // [["Artak", 5], ["Artavazd",8],["samvel", 6]]

