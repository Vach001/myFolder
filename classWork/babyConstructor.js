function Baby (name, age, favoriteToy){
    this.name = name
    this.age = age
    this.favoriteToy = favoriteToy
}
Baby.prototype.play() = function(){
    return `playing with ${this.favoriteToy}`
}
