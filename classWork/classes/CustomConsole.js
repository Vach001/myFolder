class CustomConsole {
    constructor(name) {
        this.name = name
        this.history = []
    }
    log(...args){
        this.history.push(args.toString())
        if(args.length > 1){
        
            return args.toString()
        } else {
            return   this.name + ":  " + JSON.stringify(args[0])
        }
    }

    history(){
        return this.history
    }

    clearHistory(){
        this.history.length = 0
        return true
    }

}
const myconsole = new CustomConsole("regulyar")
console.log(myconsole.log(1,652,6312))

