class Shiritori {
  constructor(word) {
    this.word = word;
    this.words = [];
    this.game_over = true;
  }

  play(newWord) {
    const alreadyExist = this.words.some((word) => word === newWord);
    if (typeof newWord === "string") {
      if (this.words.length === 0) {
        this.words.push(newWord);
      } else if (!alreadyExist) {
        let lastItemsLetter = [...this.words].pop().slice(-1)
        let newWordsFirstLetter = newWord[0];
        if (lastItemsLetter === newWordsFirstLetter) {
          this.words.push(newWord);
        } else {
          return `${newWord}  does not start with ${lastItemsLetter}`;
        }
      } else {
        this.game_over = false;
        return "game Over";
      }
      return this.words;
    } else {
      this.game_over = false;
      return "Please write a word";
    }
  }
  restarts() {
    this.game_over = true;
    this.words.length = 0;
    return "game restarted";
  }
}

let myShiritory = new Shiritori();

myShiritory.play("kala");
console.log(myShiritory.play("amen"));
console.log(myShiritory.play("nami"));
console.log(myShiritory.play("imani"));
console.log(myShiritory.play("inna"));
console.log(myShiritory.play("456"));

// console.log(myShiritory.words)
