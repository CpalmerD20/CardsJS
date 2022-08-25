const standardValues = 'Ace 2 3 4 5 6 7 8 9 10 Jack Queen King'.split(' ');
const tarotValues = ['Knight', ...standardValues];
const frenchSuits = ['clubs', 'diamonds', 'hearts', 'spades'];
const minorArcana = ['wands', 'pentacles', 'cups', 'blades'];
const majorArcana = ['The Fool',
  'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 
  'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 
  'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 
  'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World', 
];

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

  addMajorArcana() {
    const range = majorArcana.length;
    for(let i = 0; i < range; ++i){
      this.cards.push(new Card(i, majorArcana[i]));
    }
  }
}


const deck = new Deck(standardValues, frenchSuits);
console.log(deck);
// deck.shuffle();
// console.log(deck.draw());

const tarot = new Deck(tarotValues, minorArcana);
tarot.addMajorArcana();
console.log(tarot);
// tarot.shuffle();
// console.log(tarot.draw());