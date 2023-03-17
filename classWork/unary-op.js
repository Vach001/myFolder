const a = {
    valueOf() {
    return 224;
    }, //227
    };
    const b = {
    valueOf() {
    return "hey";
    },//"Hey"
    };
    const c = {
    valueOf() {
    return new String("some");
    },//NaN
    };
    const d = {
    toString() {
    return 22;
    },//"22"
    };
    const f = {
    toString() {
    return new Number(5);
    }//'5'
}
// console.log(-([]))//0
// console.log(-([2]))//-2
// console.log(-([2,3]))//NaN
// console.log(-(function(){}))//undefined,, NaN
// console.log(-([a]))//-224,, NaN

//console.log(null instanceof Object)//false
//console.log(true instanceof Boolean)//false
//console.log(false instanceof Boolean)//false
//console.log(1 instanceof Number) //false
//console.log(NaN instanceof Number)//false
//console.log('hello' instanceof String)//false
//console.log((function () { }) instanceof Function)//true
//console.log('valueOf' in null)//true
//console.log('valueOf' in undefined)//true
//console.log('valueOf' in true)//true
//console.log('valueOf' in 1)//false
//console.log('valueOf' in 'toString')//false
// console.log(delete ({}).valueOf)
// console.log(delete 1)
// console.log(delete a.x)
// console.log(a.y = 3; console.log(delete a.y))
// console.log(delete f)
// console.log(delete z)