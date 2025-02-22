let color = undefined

window.addEventListener('DOMContentLoaded', function() {
  this.document.querySelector('#btnMenu').addEventListener('click', handleClickedBtnMenu)
  this.document.querySelector('#btnChangeBg').addEventListener('click', handleClickedBtnBgChange)
})

function handleClickedBtnMenu() {
  clickedBtnMenu()
}

function handleClickedBtnBgChange() {
  clickedBtnBgChange()
}

function clickedBtnBgChange() {
  getColor()
  render()
}


function clickedBtnMenu() {
  document.querySelector('#toggleNav').classList.toggle('hidden')
}

function getColor() {
  const letters = 'abcdef'
  const digits = '0123456789'
  const combinations = [...letters, ...digits]
  color = '#'
  for (let i = 1; i <= 6; i++) {
    color += combinations[Math.floor(Math.random() * combinations.length)]
  }
}

function render() {
  document.querySelector('#colorText').textContent = color
  document.querySelector('main').style.backgroundColor = color
}