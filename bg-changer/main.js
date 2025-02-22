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
  const colors = ['black', 'red', 'green', 'yellow', 'blue', 'gray']
  color = colors[Math.floor(Math.random() * colors.length)]
}

function render() {
  document.querySelector('#colorText').textContent = color
  document.querySelector('main').style.backgroundColor = color
}