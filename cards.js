const standardValues = 'Ace 2 3 4 5 6 7 8 9 10 Jack Queen King'.split(' ');
const tarotValues = ['Knight', ...standardValues];
const frenchSuits = ['clubs', 'diamonds', 'hearts', 'spades'];
const minorArcana = ['wands', 'pentacles', 'cups', 'blades']

class Card {
  #value;
  #suit;
  constructor(value, suit) {
    this.#value = value;
    this.#suit = suit;
  }
  get value() { return this.#value }
  get suit() { return this.#suit }
}

class Deck {
  cards = [];

  constructor(values, suits) {
    // const range = values.length;
    
    // for(let i = 0; i < range; ++i) {
    //   this.cards.push(new Card(values[i], suits[0]));
    //   this.cards.push(new Card(values[i], suits[1]));
    //   this.cards.push(new Card(values[i], suits[2]));
    //   this.cards.push(new Card(values[i], suits[3]));
    // }  

    values.forEach( value => {
      this.cards.push(new Card(value, suits[0]));
      this.cards.push(new Card(value, suits[1]));
      this.cards.push(new Card(value, suits[2]));
      this.cards.push(new Card(value, suits[3]));
    })
  }

  draw() { return this.cards.pop(); }

  shuffle() {
    const range = this.cards.length;
    const array = this.cards;
    for (let i = range - 1; i > 0; --i) {
        let u = Math.floor(Math.random() * (range));
        let temp = array[i];
        array[i] = array[u];
        array[u] = temp;
    }
  }
}


const deck = new Deck(standardValues, frenchSuits);
// deck.shuffle();
console.log(deck);
// console.log(deck.draw());

const tarot = new Deck(tarotValues, minorArcana);
// tarot.shuffle();
console.log(tarot);
// console.log(tarot.draw());