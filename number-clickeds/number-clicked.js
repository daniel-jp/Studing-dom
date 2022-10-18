window.addEventListener(
  'click',
  () => {
    console.log('Window clicked')
  },
  false
)

document.addEventListener(
  'click',
  () => {
    console.log('Document clicked')
  },
  false
)

document.querySelector('.div2').addEventListener(
  'click',
  () => {
    console.log('Div 2 clicked')
  },
  { once: true }
)
document.querySelector('.div1').addEventListener(
  'click',
  () => {
    console.log('Div 1 clicked')
  },
  false
)

document.querySelector('.btn').addEventListener(
  'click',
  e => {
    e.preventDefault()
    console.log((e.target.innerTex = 'Button!'))
  },
  false
)
