
function Person (name, age){  
  this.name = name
  this.age = age
}
const p1 = new Person("Samuel", 24) 
const p2 = new Person("Joel", 36) 
const p3 = new Person("Lily", 24)

Person.prototype.compareAge= function ({ age, name }){
    let older = 'older than'
    if(age === this.age){
        older = "the same age as"
    } else if(age < this.age){
        older = "younger than "
    }
    return `${name} is ${older} me`
}
console.log(p1.compareAge(p2) )