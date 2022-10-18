// const li = document.getElementsByTagName('li')
// console.log(li)
/*
const firtItem = document.querySelector('.list-items')
console.log(firtItem.innerText)
console.log(firtItem.textContent)
console.log(firtItem.innerHTML)
const firtItem = document.querySelectorAll('.list-items')
console.log(firtItem)

const ul = document.querySelector('ul')
const li = document.createElement('li')

//addElement (li)
ul.append(li)
//Modifying the text
li.innerText = 'Testing'

//Modifying the attributes & classes
li.setAttribute('class', 'list-items')

//Remove
li.removeAttribute('class')
console.log(ul)

const html = document.documentElement
console.log(html)
*/

const html = document.documentElement
console.log(html.parentNode)
console.log(html.parentElement)
console.log(html.innerText)

let ul = document.querySelector('ul')
console.log(ul.childNodes)
console.log(ul.firstChild)
console.log(ul.lastChild)

console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)
