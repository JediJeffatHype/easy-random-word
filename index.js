const { nouns } = require('./words/nouns');
const { adjectives } = require('./words/adjectives')
const { verbs } = require('./words/verbs')
class Random {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
  }
exports.randomNoun = () => {

    var rand = nouns[(Math.random() * nouns.length) | 0]
    console.log(rand)
}

exports.randomAdjective = () => {
    var rand = adjectives[(Math.random() * adjectives.length) | 0]
    console.log(rand)
}

exports.randomVerb = () => {
    var rand = verbs[(Math.random() * verbs.length) | 0]
    console.log(rand)
}


