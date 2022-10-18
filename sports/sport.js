// class D {
//   constructor(fname, lname) {
//     this.fname = fname
//     this.lname = lname
//   }
// }
// const nams = new D('Daniel', 'Paulino')
// console.log(nams)

// CLICK AND CHANGE DE COLOR OF SPORT

/*
document.querySelector('#football').addEventListener('click', e => {
  console.log('Football is clicked')
  const target = e.target
  if (target.matches('li')) {
    target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
  }
})

document.querySelector('#basketball').addEventListener('click', e => {
  console.log('Basketball is clicked')
  const target = e.target
  if (target.matches('li')) {
    target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
  }
})
document.querySelector('#boxing').addEventListener('click', e => {
  console.log('Boxing is clicked')
  const target = e.target
  if (target.matches('li')) {
    target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
  }
})

document.querySelector('#tennis').addEventListener('click', e => {
  console.log('Tennis is clicked')
  const target = e.target
  if (target.matches('li')) {
    target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
  }
})

document.querySelector('#golf').addEventListener('click', e => {
  console.log('Golf is clicked')
  const target = e.target
  if (target.matches('li')) {
    target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
  }
})
*/

/// SHOT CODE

document.querySelector('#sports').addEventListener('click', e => {
  console.log(e.target.getAttribute('id', 'is clicked'))

  const target = e.target
  /*
  if (target.matches('#football')) {
    target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
  }
  if (target.matches('#basketball')) {
    target.style.backgroundColor = '#d68910'
  }

  if (target.matches('#boxing')) {
    target.style.backgroundColor = '#229954'
  }
  if (target.matches('#tennis')) { 
    target.style.backgroundColor = '#2874a6'
  }

  if (target.matches('#golf')) {
    target.style.backgroundColor = '#e234'
  }
*/
  if (target.matches('li')) {
    target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
  }
})

// CREATE TO LIST A NEW SPORT

const sports = document.querySelector('#sports')
const newSport = document.createElement('li')
newSport.innerText = 'Rugby'
newSport.setAttribute('id', 'Rugby')
sports.appendChild(newSport)
