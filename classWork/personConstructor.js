function Person(name, age){
    this.name = name,
    this.age = age
    let stomach  =[]
}
Person.prototype.eat = function(...foods){
    this.stomach.push(...foods)
    if(stomach.length>9){
        this.stomach.length = 9 
    }
}
Person.prototype.poop() = function(){
    this.stomach = []
}

Person.prototype.toString() = function(){
    return `${name}, ${age} `
}