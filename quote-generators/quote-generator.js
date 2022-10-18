// const nams = ['Daniel', 'Paulino', '🧰']
// const myF = () => {
//   console.log(nams)
// }

// const myNewF = myF()
// console.log(myNewF)

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
  {
    quote: `"The best way to find yourself is to lose yourself in service of athers."`,
    person: `Mahatma Gandhi`
  },
  {
    quote: `"If you want to live a happy life, tie it to goal, not to people or things."`,
    person: `Albert Einstein`
  },
  {
    quote: `"At his best, man is noblest of all animals; separed from law and justice he is the worst "`,
    person: `Aristotele`
  },
  {
    quote: `"Your time is limited,, so dont waste it living someone else's life."`,
    person: `Steven Jobs`
  },
  {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`
  },
  {
    quote: `"The way to get started is to quit talking and begin doing. "`,
    person: `Walt Disney`
  },

  {
    quote: `"If life were predictable it would cease to be life, and be without flavor."`,
    person: `Eleanor Roosevelt`
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`
  }
]

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length)
  quote.innerText = quotes[random].quote
  person.innerText = quotes[random].person
})
